import React from "react";
import { isMobile } from "react-device-detect";

function Home() {
  return (
    <div className={`text-white relative`}>
      {" "}
      {/* Keeps the position unchanged */}
      <div className="inline-block">
        {/* Ensures text aligns without shifting */}
        <h1
          className={` ${isMobile ? "text-4xl" : "text-8xl"
            } text-left font-bold`}
        >
          SOFTWARE <br />{" "}
          <span className=" text-secondaryHeadingText">DEVELOPER</span>
        </h1>
        <p className={`text-left text-xl mt-8 text-secondaryText`}>
          Passionate about crafting web and mobile apps that transform ideas
          into seamless, engaging user experiences. Dedicated to delivering
          innovative solutions that captivate users and elevate your brand.
        </p>

        <div
          className={`flex ${isMobile ? "" : "w-24 gap-14"
            } justify-between mt-8`}
        >




        </div>
      </div>
    </div>
  );
}

export default Home;
