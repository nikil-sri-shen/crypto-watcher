import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

function Navbar() {
  return (
    <div className="mt-1">
      <div className="p-3 fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-opacity-30">
        <ul className="flex">
          <li className="ml-4 mt-4 mr-2 glow-text text-3xl">
            <a href="/">
              <img
                src="logo.png"
                alt="Logo of Crypto Watcher"
                height={50}
                width={50}
              ></img>
            </a>
          </li>
          <li className="ml-2 mt-2 mr-4 glow-text text-3xl text-green-900 font-bold ">
            <p>Crypto-Watcher </p>
            <p className="text-base text-white">Gaze at your Cryptos. . .</p>
          </li>
          <div class="flex ml-auto">
            <li class="mr-6 glow-text">
              <a
                href="https://www.linkedin.com/in/nikil-sri-shen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="inline-block w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8" />
              </a>
            </li>
            <li class="mr-6 glow-text">
              <a
                href="mailto:nikilsrishen@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMail className="inline-block w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8" />
              </a>
            </li>
            <li class="mr-6 glow-text">
              <a
                href="https://github.com/nikil-sri-shen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="inline-block w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8" />
              </a>
            </li>
            <li class="mr-6 glow-text">
              <a
                href="https://www.instagram.com/blog_chain.daily/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="inline-block w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8" />
              </a>
            </li>
            <li class="mr-6 glow-text">
              <a
                href="https://blogchaindaily.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink className="inline-block w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8" />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
