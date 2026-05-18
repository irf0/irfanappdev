import React, { lazy, Suspense, useState } from "react";
import Home from "./Home";
import { useIsMobile } from "../hooks/useIsMobile";
import LazySection from "../components/LazySection";
import {
  IconEnvelope,
  IconFolder,
  IconGear,
  IconHome,
  IconLinkedIn,
  IconMail,
  IconPen,
  IconX,
} from "../components/NavIcons";

const Projects = lazy(() => import("./Projects"));
const Skills = lazy(() => import("./Skills"));
const Blogs = lazy(() => import("./Blogs"));
const Contact = lazy(() => import("./Contact"));

const publicUrl = process.env.PUBLIC_URL || "";

function SectionFallback() {
  return <div className="min-h-[12rem]" aria-hidden="true" />;
}

function Layout() {
  const isMobile = useIsMobile();
  const [imgLoaded, setImgLoaded] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`w-screen h-98 overflow-x-hidden ${
        !isMobile && "overflow-y-auto"
      }`}
    >
      <div className={`text-white justify-center flex`}>
        <nav
          className={`rounded-xl bg-navbarBg shadow-lg ${
            isMobile ? "w-80" : "w-1/5"
          } flex justify-evenly mt-5 ${isMobile && "p-2"}`}
        >
          <ul className="flex gap-10 p-3 items-center">
            <li onClick={() => scrollToSection("home")}>
              <button type="button" title="Home" className="text-white bg-transparent border-0 p-0">
                <IconHome size={22} />
              </button>
            </li>
            <li onClick={() => scrollToSection("projects")}>
              <button type="button" title="Projects" className="text-white bg-transparent border-0 p-0">
                <IconFolder size={22} />
              </button>
            </li>
            <li onClick={() => scrollToSection("skills")}>
              <button type="button" title="Skills" className="text-white bg-transparent border-0 p-0">
                <IconGear size={22} />
              </button>
            </li>
            <li onClick={() => scrollToSection("blogs")}>
              <button type="button" title="Thoughts" className="text-white bg-transparent border-0 p-0">
                <IconPen size={20} />
              </button>
            </li>
            <li onClick={() => scrollToSection("contact")}>
              <button type="button" title="Contact" className="text-white bg-transparent border-0 p-0">
                <IconMail size={22} />
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`${isMobile ? "flex-col" : "flex mx-40 "} `}>
        <div
          className={`bg-white rounded-xl px-2 py-8 mt-5 ${
            isMobile ? "w-80 mx-10 h-28" : "fixed h-80 w-1/4"
          }`}
        >
          <div
            className={`bg-orange-600 rounded-2xl relative overflow-hidden ${
              isMobile ? "w-[70%] h-[55%] mx-11" : "w-[80%] h-[67%] mx-9"
            }`}
          >
            {!imgLoaded && (
              <div className="absolute inset-0 bg-orange-400 animate-pulse rounded-xl" />
            )}

            <picture>
              <source srcSet={`${publicUrl}/Irfanpic.webp`} type="image/webp" />
              <img
                src={`${publicUrl}/Irfanpic.jpg`}
                alt="Irfan"
                fetchPriority="high"
                decoding="async"
                width={320}
                height={320}
                className={`w-full h-full object-cover rounded-xl transition-opacity duration-300 ${
                  imgLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImgLoaded(true)}
              />
            </picture>
          </div>

          <div>
            <h1
              className={`font-extrabold text-gray-600 pt-2 mt-1 text-center ${
                isMobile ? "text-2xl" : "text-4xl"
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
            className={`flex justify-center items-center gap-5 cursor-pointer ${
              isMobile ? "mt-1" : "mt-3"
            }`}
          >
            <a
              href="https://www.linkedin.com/in/irfan3054/"
              className="flex h-8 w-8 items-center justify-center rounded transition-all"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <IconLinkedIn size={28} className="h-7 w-7 text-[#0A66C2]" />
            </a>

            <a
              href="https://x.com/mirfandev5"
              className="flex h-8 w-8 items-center justify-center rounded transition-all"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <IconX size={28} className="h-7 w-7 text-black" />
            </a>

            <a
              href="mailto:mirfan3054@gmail.com"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center"
              aria-label="Email"
            >
              <IconEnvelope size={28} className="h-7 w-7 text-[#EA4335]" />
            </a>
          </div>
        </div>

        <div className={`h-screen p-1 ${isMobile ? "mx-4" : "ml-[40%]"}`}>
          <section id="home" className="mt-6 mb-6">
            <Home />
          </section>

          <section id="projects" className="my-12">
            <LazySection minHeight="20rem" rootMargin="80px">
              <Suspense fallback={<SectionFallback />}>
                <Projects />
              </Suspense>
            </LazySection>
          </section>

          <section id="skills" className="my-12">
            <LazySection minHeight="20rem" rootMargin="80px">
              <Suspense fallback={<SectionFallback />}>
                <Skills />
              </Suspense>
            </LazySection>
          </section>

          <section id="blogs" className="my-12">
            <LazySection minHeight="16rem" rootMargin="80px">
              <Suspense fallback={<SectionFallback />}>
                <Blogs />
              </Suspense>
            </LazySection>
          </section>

          <section id="contact" className="my-12">
            <LazySection minHeight="16rem" rootMargin="80px">
              <Suspense fallback={<SectionFallback />}>
                <Contact />
              </Suspense>
            </LazySection>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Layout;
