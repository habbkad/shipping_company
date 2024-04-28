import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Services_home from "@/components/Services_home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Future_home from "@/components/Future_home";
import DreamBuild from "@/components/DreamBuild";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Carousel />
      <Services_home />
      <Future_home />
      <DreamBuild />
      <Footer />
    </div>
  );
}
