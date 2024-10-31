import React from "react";
import { isMobile } from "react-device-detect";
import { useParams } from "react-router-dom";

function ProjectDetail({ projectCards }) {
  const { projectId } = useParams();

  const project = projectCards.find((p) => p?.id === parseInt(projectId));

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div className={`${isMobile ? "p-4" : "p-10"} min-h-screen`}>
      <div
        className={`${
          isMobile ? "max-w-full" : "max-w-4xl"
        } mx-auto p-6 rounded-lg shadow-md`}
      >
        {/* Title */}
        <h1 className="text-4xl text-white font-bold mb-6 text-left">
          {project?.title}
        </h1>

        {/* Overview */}
        <div className="mb-8 text-left">
          <h3 className="text-2xl text-white font-bold mb-1">Overview</h3>
          <p className={` text-secondaryText text-lg`}>{project?.overview}</p>
        </div>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl text-white font-semibold mb-3 text-left">
              Screenshots
            </h3>
            <div
              className={`grid grid-cols-3 ${
                isMobile ? "grid-cols-3" : "grid-cols-4"
              } gap-4`}
            >
              {project.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="rounded-lg shadow-md object-cover"
                />
              ))}
            </div>
          </div>
        )}

        {/* Problem */}
        <div className="mb-8 text-left">
          <h3 className="text-2xl text-white font-bold mb-1">Problem</h3>
          <ul className="list-disc list-outside pl-6 -indent-0.5 text-lg text-secondaryText leading-relaxed">
            {project.problem.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="mb-8 text-left">
          <h3 className="text-2xl text-white font-bold mb-1">Solution</h3>
          <ul className="list-disc list-outside pl-6 -indent-0.5 text-lg text-secondaryText leading-relaxed">
            {project.solution.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8 text-left">
          <h3 className="text-2xl text-white font-bold mb-1">Technologies</h3>
          <ul className="list-disc list-outside pl-6 -indent-0.5 text-lg text-secondaryText leading-relaxed">
            {project?.technologies?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Result */}
        <div className="mb-8 text-left">
          <h3 className="text-2xl text-white font-bold mb-1">Result</h3>
          <ul className="list-disc list-outside pl-6 -indent-0.5 text-lg text-secondaryText leading-relaxed">
            {project?.result?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Play Store and App Store Links */}
        {project?.isMobileApp && (
          <div className="mb-2 text-left">
            <h3 className="text-2xl text-white font-bold mb-1">
              Check it Out Here
            </h3>
            <div className="mt-2 text-left flex gap-4">
              {/* Play Store Link */}
              {project?.playStoreLink && (
                <a
                  href={project.playStoreLink}
                  className="text-white py-2 px-4 rounded transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Logos/getonplaystore.png"
                    alt="Get it on Play Store"
                    className="bg-white"
                  />
                </a>
              )}

              {/* App Store Link */}
              {project?.appStoreLink ? (
                <a
                  href={project.appStoreLink}
                  className="text-white py-2 px-4 rounded transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Logos/downloadappstore.png"
                    alt="Download on the App Store"
                    className={`bg-white rounded-sm ${
                      isMobile ? "" : "h-16 w-48"
                    }`}
                  />
                </a>
              ) : (
                <div className="text-center">
                  <img
                    src="/Logos/downloadappstore.png"
                    alt="Coming Soon"
                    className={`bg-white rounded-sm ${
                      isMobile ? "" : "h-16 w-48"
                    }`}
                  />
                  <p>Coming soon..</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
