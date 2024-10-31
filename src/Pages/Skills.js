import React from "react";
import { isMobile } from "react-device-detect";
import { skillsToolsData } from "../utils/skillsToolsData";

function Skills() {
  return (
    <div className="text-white">
      <h1
        className={`${isMobile ? "text-4xl" : "text-8xl"} text-left font-bold`}
      >
        SKILLS & <br />{" "}
        <span className="text-left text-secondaryHeadingText">TOOLS</span>
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 gap-10 mt-10">
        {/* Left Column */}
        <div>
          {skillsToolsData?.slice(0, 5).map((skill, index) => (
            <div
              key={index}
              className={`${
                isMobile ? "flex-col p-4" : "flex p-7 items-center"
              }  gap-5 mb-8 shadow-lg bg-secondaryHeadingText cursor-pointer rounded-xl mt-5 transition-transform duration-300 transform hover:scale-105 hover:animate-blink-border`}
            >
              <img
                src={skill?.imageURL}
                alt={skill?.title}
                className={`w-12 h-12 rounded-lg ${isMobile && "mx-10 mb-2"}`}
              />
              <div>
                <h3
                  className={`text-xl ${
                    isMobile ? "text-center" : "text-left"
                  } font-bold`}
                >
                  {skill?.title}
                </h3>
                <p
                  className={`text-secondaryText ${
                    isMobile ? "text-center" : "text-left"
                  }`}
                >
                  {skill?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div>
          {skillsToolsData?.slice(5).map((skill, index) => (
            <div
              key={index}
              className={`${
                isMobile ? "flex-col p-4" : "flex p-7 items-center"
              }  gap-5 mb-8 shadow-lg bg-secondaryHeadingText cursor-pointer rounded-xl mt-5 transition-transform duration-300 transform hover:scale-105 hover:animate-blink-border`}
            >
              <img
                src={skill?.imageURL}
                alt={skill?.title}
                className={`w-12 h-12 rounded-lg ${isMobile && "mx-10 mb-2"}`}
              />

              <div>
                <h3
                  className={`text-xl ${
                    isMobile ? "text-center" : "text-left"
                  } font-bold`}
                >
                  {skill?.title}
                </h3>
                <p
                  className={`text-secondaryText ${
                    isMobile ? "text-center" : "text-left"
                  }`}
                >
                  {skill?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
