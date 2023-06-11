import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import ContactButton from "../ContactButton";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex flex-col space-y-24 lg:flex-row p-20 justify-between items-center lg:space-x-28">
        <div className="flex flex-col lg:w-[40%] space-y-12">
          <div className="text-[45px] font-semibold flex flex-col space-y-4">
            <div>
              <h1 className="bg-gradient-to-br from-[#5b37eb] to-[#37eba9] bg-clip-text text-transparent">
                Hello, I'm Fer.
              </h1>
              <h2>A passionate fullstack developer.</h2>
            </div>
            <p className="text-[15px] font-normal text-[#b4b4b4]">
              I am a fullstack developer from Spain specializing in React. With
              a keen eye for detail and a drive for delivering exceptional user
              experiences, I strive to create engaging and intuitive web
              applications. Explore my projects, learn about my skills, and get
              in touch to discuss how I can bring your ideas to life.
            </p>
          </div>
          <div className="flex flex-row w-full space-x-4">
            <ContactButton />
            <Link to={"/about"}>
              <button
                type="button"
                className="text-white focus:outline-none bg-[#739ca7]
              rounded-lg text-md px-5 py-3 text-center hover:bg-[#57757e]"
              >
                About me
              </button>
            </Link>
          </div>
          <SocialMediaIcons />
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="images/landingImage.png"
            alt=""
            className="lg:w-[90%] h-auto lg:max-w-[1200px]"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
