import React from "react";
import { GiSelfLove } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="px-20 py-8 leading-8">
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
        <div className="font-bold text-xl text-blue-500">
          workout<span className="font-normal text-black">TRACKER</span>
        </div>
        <p className="text-center">
          Made with <GiSelfLove className="inline text-red-600" />
          &nbsp; by{" "}
          <a href="https://dhulnurein.netlify.app">
            {" "}
            <span className="text-blue-600">&#60;dhulnurein/&#62;</span>
          </a>
        </p>
      </div>
      <p className="lg:text-center text-sm">&#169; 2023, all rights reserved</p>
    </div>
  );
};

export default Footer;
