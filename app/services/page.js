import Footer from "@/components/Footer";
import ServiceReachUs from "@/components/ServiceReachUs";
import ServicesList from "@/components/ServicesList";
import Services_Banner from "@/components/Services_Banner";
import React from "react";

const page = () => {
  return (
    <div>
      <Services_Banner />
      <ServicesList />
      <ServiceReachUs />
      <Footer />
    </div>
  );
};

export default page;
