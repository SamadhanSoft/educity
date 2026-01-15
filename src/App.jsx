import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Program from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/campus";
import Testimonial from "./Components/Testimonial/Testimonial";
import "./App.css";
import ContactUs from "./Components/ContactUs/ContactUs";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Programs" title="What we offer" />
        <Program />
        <About />
        <Title subTitle="Gallary" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What our students say" />
        <Testimonial />
        <Title subTitle="Contact us" title="Get in touch" />
        <ContactUs />
      </div>
    </>
  );
}

export default App;
