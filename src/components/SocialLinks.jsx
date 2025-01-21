import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      <a
        href="https://www.instagram.com/itz.kameshh?utm_source=qr&igsh=MWU2cW10c2xhbGM1OQ== "
        target="_blank"
        rel="noreferrer"
        className="text-pink-500 hover:text-pink-600 transition"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/kamesh-s-b71359271 "
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 hover:text-blue-600 transition"
      >
        <FaLinkedin size={30} />
      </a>

      <a
        href="https://github.com/Kameshnic"
        target="_blank"
        rel="noreferrer"
        className="text-blue-400 hover:text-blue-500 transition"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://x.com/KAMesh1389131"
        target="_blank"
        rel="noreferrer"
        className="text-blue-400 hover:text-blue-500 transition"
      >
        <FaTwitter size={30} />
      </a>
    </div>
    
  );
};

export default SocialLinks;
