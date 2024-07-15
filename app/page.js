import Accreditation from "component/Accreditation";
import Hero from "component/Hero";
import RightSchool from "component/RightSchool";
import SportsStars from "component/SportsStars";
import Testimonials from "component/Testimonials";
import WhyChooseUs from "component/WhyChooseUs";
import React from "react";

function HomePage() {
  return (
    <div className="r-w">
      <Accreditation />
      <Hero />
      <WhyChooseUs />
      <RightSchool />
      <SportsStars />
      <Testimonials />
    </div>
  );
}

export default HomePage;
