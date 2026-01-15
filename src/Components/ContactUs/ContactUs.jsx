import React from "react";
import "./ContactUs.css";
import msg_icon from "../../assets/msg-icon.png";
import email_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const ContactUs = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "886fa314-f18a-4e04-a25d-429edd370bbe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setTimeout(() => {
        setResult("");
      }, 3000);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" width={30} />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={email_icon} alt="" width={30} /> contact@educity.com
          </li>
          <li>
            <img src={phone_icon} alt="" width={30} /> +91 123456789
          </li>
          <li>
            <img src={location_icon} alt="" width={30} /> 123, Educity Avenue,
            Mumbai
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" />
          </div>
          <div className="form-control">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-control">
            <label>Your Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="form-control">
            <label>Your Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" width={20} />
          </button>
        </form>
        <span className="sending-msg">{result}</span>
      </div>
    </div>
  );
};

export default ContactUs;
