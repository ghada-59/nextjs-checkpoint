import Image from "next/image";
import type { PortfolioProject } from "../data/projects";

type ProjectCardProps = {
  project: PortfolioProject;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={900}
          height={620}
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className="project-image"
        />
        <span className="project-number">{project.number}</span>
      </div>
      <div className="project-card-body">
        <div className="project-meta-row">
          <p className="project-category">{project.category}</p>
          <span className="status-pill">{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tag-list" aria-label="Project technologies">
          {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
        {project.repository ? (
          <a className="text-link" href={project.repository} target="_blank" rel="noreferrer">
            View repository <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="project-note">Selected academic / development work</span>
        )}
      </div>
    </article>
  );
}
