import React, { useEffect } from "react";
import { FaInstagram, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { PiFolderBold, PiGearBold } from "react-icons/pi";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import { isMobile } from "react-device-detect";
import { FaRegPenToSquare, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import Blogs from "./Blogs";

function Layout() {
  // Function to scroll smoothly to a section by its ID
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToSection("projects");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-screen h-98 overflow-x-hidden ${!isMobile && "overflow-y-auto"
        }`}
    >
      {/* Navigation Bar */}
      <div className={`text-white justify-center flex`}>
        <nav
          className={`rounded-xl bg-navbarBg shadow-lg ${isMobile ? "w-80" : "w-1/5"
            } flex justify-evenly mt-5 ${isMobile && "p-2"}`}
        >
          <ul className="flex gap-10 p-3 items-center">
            {/* Add onClick handlers to scroll to specific sections */}
            <li onClick={() => scrollToSection("home")}>
              <HiOutlineHome
                data-tooltip-id="my-tooltip-1"
                className="outline-none cursor-pointer"
                size={22}
              />
            </li>
            <li onClick={() => scrollToSection("projects")}>
              <PiFolderBold
                data-tooltip-id="my-tooltip-2"
                className="outline-none cursor-pointer"
                size={22}
              />
            </li>
            <li onClick={() => scrollToSection("skills")}>
              <PiGearBold
                data-tooltip-id="my-tooltip-3"
                className="outline-none cursor-pointer"
                size={22}
              />
            </li>
            <li onClick={() => scrollToSection("blogs")}>
              <FaRegPenToSquare
                data-tooltip-id="my-tooltip-4"
                className="outline-none cursor-pointer"
                size={20}
              />
            </li>
            <li onClick={() => scrollToSection("contact")}>
              <FaRegEnvelope
                data-tooltip-id="my-tooltip-5"
                className="outline-none cursor-pointer"
                size={22}
              />
            </li>
          </ul>
        </nav>
        <ReactTooltip id="my-tooltip-1" place="bottom" content="Home" />
        <ReactTooltip id="my-tooltip-2" place="bottom" content="Projects" />
        <ReactTooltip id="my-tooltip-3" place="bottom" content="Skills" />
        <ReactTooltip id="my-tooltip-4" place="bottom" content="Thoughts" />
        <ReactTooltip id="my-tooltip-5" place="bottom" content="Contact" />
      </div>

      <div className={`${isMobile ? "flex-col" : "flex mx-40 "} `}>
        {/* Fixed Picture Box on the Left */}
        <div
          className={`bg-white rounded-xl px-2 py-8 mt-5 ${isMobile ? "w-80 mx-10 h-28" : "fixed h-80 w-1/4"
            }`}
        >
          <div
            className={`bg-orange-600 rounded-2xl ${isMobile ? "w-[70%] h-[55%] mx-11" : "w-[80%] h-[67%] mx-9"
              }  `}
          >
            <img src="/Irfanpic.jpg" alt="Irfan" className=" rounded-xl" />
          </div>

          <div>
            <h1
              className={`font-extrabold text-gray-600 pt-2 mt-1 ${isMobile ? "text-2xl" : "text-4xl"
                }`}
            >
              M IRFAN
            </h1>
            <p
              className={`py-2 px-4 font-semibold text-lg italic text-secondaryHeadingText`}
            >
              "A developer driven by results that boost business growth, with a
              focus beyond just writing code."
            </p>
          </div>

          <div
            className={`flex justify-center gap-6 cursor-pointer ${isMobile ? "mt-1" : "mt-3"
              }`}
          >
            <a
              href="https://www.linkedin.com/in/irfanappdev/"
              className=" text-white py-2 px-4 rounded transition-all"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={22} className="text-orange-600" />
            </a>

            <a
              href="https://www.instagram.com/mr_irffan/"
              className=" text-white py-2 px-4 rounded transition-all"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={22} className="text-orange-600" />
            </a>

            <a
              href="https://x.com/irfancodes1"
              className=" text-white py-2 px-4 rounded transition-all"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter size={22} className="text-orange-600" />
            </a>

            <a href="mailto:mirfan3054@gmail.com" rel="noreferrer">
              <MdOutlineMailOutline
                size={24}
                className="text-orange-600 mt-1.5"
              />
            </a>
          </div>
        </div>

        {/* Scrollable Content on the Right */}
        <div className={`h-screen p-1 ${isMobile ? "mx-4" : "ml-[40%]"}`}>
          <section id="home" className="mt-6 mb-6">
            <Home />
          </section>

          <section id="projects" className="my-12">
            <Projects />
          </section>

          <section id="skills" className="my-12">
            <Skills />
          </section>

          <section id="blogs" className="my-12">
            <Blogs />
          </section>

          <section id="contact" className="my-12">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Layout;
