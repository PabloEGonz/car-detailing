import { useState, useEffect } from "react";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
// import Socials from "../components/Socials";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagePaths = [banner1, banner2, banner3];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [imagePaths.length]);
  return (
    <div className="w-full h-96 lg:h-100 relative z-0">
      {imagePaths.map((path, index) => (
        <img
          key={index}
          src={path}
          alt="tent image"
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
            transition: "opacity 2s ease-in-out",
          }}
          className="w-full object-cover brightness-50 h-full absolute"
        />
      ))}
      <div className="text-white absolute left-5 lg:left-20 top-1/3 lg:top-1/2">
        <h1 className="text-3xl lg:text-6xl font-semibold font-roboto">
          Jus Detail
        </h1>
        <h2 className="text-2xl lg:text-5xl text-balance font-italiana shadow-xl">
          Transform Your Vehicle into a Masterpiece with our Premium Car
          Detailing Services
        </h2>
      </div>
      <div className="absolute bottom-10">
        {/* <Socials hoverColor="black" /> */}
      </div>
    </div>
  );
};

export default Hero;
