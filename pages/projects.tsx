import SiteLayout from "../components/SiteLayout";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <SiteLayout
      title="Projects"
      description="Selected biomedical engineering, healthcare AI and software projects by Ghada Boughrara."
    >
      <section className="page-hero container">
        <p className="eyebrow">PROJECTS / 01—03</p>
        <h1>Experiments, prototypes &amp; <span className="gradient-text">practical ideas.</span></h1>
        <p className="page-lead">Selected work across biomedical signal processing, connected medical concepts and software engineering. Each project represents a learning and engineering process — not a clinically validated product.</p>
      </section>

      <section className="container section-block projects-page-section">
        <SectionHeading eyebrow="SELECTED WORK" title="From biomedical signals to intelligent systems." />
        <div className="project-grid project-grid-page">
          {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
        </div>
      </section>

      <section className="container project-principle">
        <p className="eyebrow">A NOTE ON THE WORK</p>
        <p>These projects are educational and exploratory. They are presented to demonstrate technical interests and development experience, not as medical advice or validated diagnostic devices.</p>
      </section>
    </SiteLayout>
  );
}
