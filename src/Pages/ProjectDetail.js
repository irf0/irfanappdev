import React from "react";
import { isMobile } from "react-device-detect";
import { useParams } from "react-router-dom";

function ProjectDetail({ projectCards }) {
  const { projectId } = useParams();
  const project = projectCards.find((p) => p?.id === Number(projectId));

  if (!project) return <div>Project not found</div>;

  return (
    <div className={`${isMobile ? "p-4" : "p-10"} min-h-screen`}>
      <div
        className={`${isMobile ? "max-w-full" : "max-w-4xl"
          } mx-auto p-6 rounded-lg shadow-md`}
      >
        {/* Title */}
        <h1 className="text-4xl text-white font-bold mb-6 text-left">
          {project?.title}
        </h1>

        {/* Overview */}
        {project?.overview && (
          <div className="mb-8 text-left">
            <h3 className="text-2xl text-white font-bold mb-1">Overview</h3>
            <p className="text-secondaryText text-lg">{project?.overview}</p>

            {/* Play Store under overview */}
            {project?.isMobileApp && project?.playStoreLink && (
              <div className="mt-4">
                <a
                  href={project.playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Logos/getonplaystore.png"
                    alt="Play Store"
                    className="h-12 bg-white rounded-sm"
                  />
                </a>
              </div>
            )}
          </div>
        )}

        {/* Screenshots */}
        {Array.isArray(project?.screenshots) &&
          project.screenshots.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl text-white font-semibold mb-3 text-left">
                Screenshots
              </h3>
              <div
                className={`grid gap-4 ${isMobile ? "grid-cols-3" : "grid-cols-4"
                  }`}
              >
                {project.screenshots.map((s, i) => (
                  <img
                    key={i}
                    src={s}
                    alt={`Screenshot ${i + 1}`}
                    className="rounded-lg shadow-md object-cover"
                  />
                ))}
              </div>
            </div>
          )}

        {/* Challenges */}
        {Array.isArray(project?.challenges) && (
          <div className="mb-8 text-left">
            <h3 className="text-2xl text-white font-bold mb-1">Challenges</h3>
            <ul className="list-disc pl-6 text-lg text-secondaryText leading-relaxed">
              {project.challenges.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Solution */}
        {Array.isArray(project?.solution) && (
          <div className="mb-8 text-left">
            <h3 className="text-2xl text-white font-bold mb-1">Solution</h3>
            <ul className="list-disc pl-6 text-lg text-secondaryText leading-relaxed">
              {project.solution.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* My Role */}
        {Array.isArray(project?.myRole) && (
          <div className="mb-8 text-left">
            <h3 className="text-2xl text-white font-bold mb-1">My Role</h3>
            <ul className="list-disc pl-6 text-lg text-secondaryText leading-relaxed">
              {project.myRole.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {Array.isArray(project?.technologies) && (
          <div className="mb-8 text-left">
            <h3 className="text-2xl text-white font-bold mb-1">Technologies</h3>
            <ul className="list-disc pl-6 text-lg text-secondaryText leading-relaxed">
              {project.technologies.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Impact */}
        {Array.isArray(project?.impact) && (
          <div className="mb-8 text-left">
            <h3 className="text-2xl text-white font-bold mb-1">Impact</h3>
            <ul className="list-disc pl-6 text-lg text-secondaryText leading-relaxed">
              {project.impact.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
