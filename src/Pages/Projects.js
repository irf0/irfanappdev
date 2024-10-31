import React from "react";
import { isMobile } from "react-device-detect";
import { MdOutlineArrowOutward } from "react-icons/md";
import { projectCards } from "../utils/projectCards";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="text-white relative">
      <div>
        <h1
          className={`${
            isMobile ? "text-4xl" : "text-8xl"
          } text-left font-bold`}
        >
          RECENT <br />{" "}
          <span className="text-left text-secondaryHeadingText">PROJECTS</span>
        </h1>
      </div>

      {projectCards?.map((project) => (
        <Link to={`/projectdetail/${project?.id}`}>
          <div
            key={project?.id}
            className="relative flex gap-5 shadow-lg bg-secondaryHeadingText cursor-pointer p-7 rounded-xl mt-5 transition-transform duration-300 transform hover:scale-105 hover:animate-blink-border"
          >
            {/* Project Image */}
            <div>
              <img
                src={project?.imageURL}
                alt={project?.title}
                className={`${isMobile ? "w-40 h-24" : "w-24 h-24"} rounded-lg`}
              />
            </div>

            {/* Project Title and Description */}
            <div>
              <h1
                className={`text-left ${
                  isMobile ? "text-lg font-bold" : "text-3xl font-bold"
                }`}
              >
                {project?.title}
              </h1>
              <p className="text-secondaryText">{project?.shortDesc}</p>
            </div>

            {/* Arrow Icon */}
            <div className="absolute top-0 right-0 mt-2 mr-2">
              <MdOutlineArrowOutward
                className="text-white transition-transform duration-300 transform hover:scale-125"
                size={30}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Projects;
