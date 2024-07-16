import Accreditation from "component/Accreditation";
import Footer from "component/Footer";
import Hero from "component/Hero";
import Navbar from "component/Navbar";
import RightSchool from "component/RightSchool";
import SportsStars from "component/SportsStars";
import Testimonials from "component/Testimonials";
import WhyChooseUs from "component/WhyChooseUs";
import React from "react";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="r-w">
        <Accreditation />
        <Hero />
        <WhyChooseUs />
        <RightSchool />
        <SportsStars />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
