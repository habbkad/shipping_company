import AboutBanner from "@/components/AboutBanner";
import AboutComunity from "@/components/AboutComunity";
import AboutContent from "@/components/AboutContent";
import AboutWhy from "@/components/AboutWhy";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const about = () => {
  return (
    <div>
      <AboutBanner />
      <AboutContent />
      <AboutWhy />
      <AboutComunity />
      <Footer />
    </div>
  );
};

export default about;
