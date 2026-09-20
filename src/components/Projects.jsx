import SectionHeading from "./SectionHeading.jsx";
import ImageBox from "./ImageBox.jsx";
import SmartLink from "./SmartLink.jsx";
import Icon from "./Icons.jsx";
import Ph from "./Ph.jsx";
import { projects } from "../data/portfolioData.js";
import { hasValue } from "../utils/helpers.js";

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionHeading
          title="Projects"
          subtitle="Selected work that shows how I build and solve problems."
        />

        <div className="projects__grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <ImageBox
                src={project.image}
                alt={`${project.name} preview`}
                label={`[PROJECT_${index + 1}_IMAGE]`}
                variant="project"
              />

              <div className="project-card__body">
                <h3>
                  <Ph>{project.name}</Ph>
                </h3>
                <p className="project-card__desc">
                  <Ph>{project.description}</Ph>
                </p>

                <ul className="chips" aria-label="Technologies used">
                  {project.techStack.map((tech) => (
                    <li className="chip" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="project-card__actions">
                  {hasValue(project.githubUrl) && (
                    <SmartLink
                      href={project.githubUrl}
                      className="btn btn--secondary btn--sm"
                    >
                      <Icon name="github" size={16} />
                      GitHub
                    </SmartLink>
                  )}
                  {hasValue(project.liveUrl) && (
                    <SmartLink
                      href={project.liveUrl}
                      className="btn btn--primary btn--sm"
                    >
                      <Icon name="external" size={16} />
                      Live Demo
                    </SmartLink>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
