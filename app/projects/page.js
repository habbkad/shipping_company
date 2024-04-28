import Footer from "@/components/Footer";
import ProjectsBanner from "@/components/ProjectsBanner";
import ProjectsList from "@/components/ProjectsList";
import React from "react";

const page = () => {
  return (
    <div>
      <ProjectsBanner />
      <ProjectsList />
      <Footer />
    </div>
  );
};

export default page;
