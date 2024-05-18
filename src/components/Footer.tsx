import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="bg-brown pt-2 px-2 lg:px-10 font-roboto">
      <div className="flex justify-between py-5 lg:py-3 lg:px-5">
        <Socials />
        <div className="hidden lg:block">
          <img src="/logo.png" alt="logo" className="w-28" />
        </div>
      </div>
      <p className="text-white text-lg text-center border-t border-white py-1 font-italiana">
        Jus Detail &nbsp;&nbsp;•&nbsp;&nbsp; All rights reserved
      </p>
    </div>
  );
};

export default Footer;
