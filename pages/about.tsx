import SiteLayout from "../components/SiteLayout";
import SectionHeading from "../components/SectionHeading";
import { site } from "../data/site";

const skillGroups = [
  {
    title: "Biomedical & clinical technology",
    skills: ["Biomedical Engineering", "Medical Devices", "Clinical Engineering", "Medical Imaging", "Physiological Signals"],
  },
  {
    title: "AI & data",
    skills: ["Python", "Machine Learning", "Data Science", "Signal Processing", "Image Processing"],
  },
  {
    title: "Software & prototyping",
    skills: ["TypeScript", "React", "Next.js", "FastAPI", "Git / GitHub", "IoT Prototyping"],
  },
];

export default function AboutPage() {
  return (
    <SiteLayout
      title="About"
      description="Learn about Ghada Boughrara's biomedical engineering background, technical interests and skills."
    >
      <section className="page-hero container">
        <p className="eyebrow">ABOUT ME</p>
        <h1>Curious about the space where <span className="gradient-text">medicine meets technology.</span></h1>
        <p className="page-lead">
          I&apos;m {site.name}, a fifth-year Biomedical Engineering student at ESPITA in Tunisia.
          I&apos;m interested in building useful connections between healthcare needs, intelligent
          systems and software.
        </p>
      </section>

      <section className="container about-main-grid">
        <div className="about-monogram-card">
          <div className="monogram-ring"><span>{site.initials}</span></div>
          <p className="monogram-caption">BIOMEDICAL ENGINEERING</p>
          <p className="monogram-location">{site.location} <span>·</span> ESPITA</p>
          <div className="monogram-decoration decoration-a" />
          <div className="monogram-decoration decoration-b" />
        </div>
        <div className="about-story">
          <p className="eyebrow">MY APPROACH</p>
          <h2>Technology should make a real difference in healthcare.</h2>
          <p>
            My biomedical engineering studies have introduced me to the technical environment of
            healthcare, including medical equipment, imaging systems and hospital workflows. Alongside
            this foundation, I&apos;m developing software and data skills to explore how AI can support
            medical technology and biomedical problem solving.
          </p>
          <p>
            I&apos;m especially interested in medical robotics, AI applications in healthcare,
            computer-aided diagnosis, medical image analysis and research &amp; development.
          </p>
          <a className="text-link" href={site.github} target="_blank" rel="noreferrer">Explore my GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="muted-section">
        <div className="container section-block">
          <SectionHeading eyebrow="TECHNICAL TOOLKIT" title="A multidisciplinary foundation." description="A growing toolkit across biomedical engineering, AI and software development." />
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-block experience-section">
        <SectionHeading eyebrow="BACKGROUND" title="Learning through study and practice." />
        <div className="timeline">
          <article className="timeline-item">
            <span className="timeline-marker" />
            <div><p className="timeline-kicker">EDUCATION</p><h3>Biomedical Engineering</h3><p className="timeline-place">ESPITA · Tunisia</p><p className="timeline-copy">Fifth-year engineering student building a foundation in biomedical systems, medical technology and applied engineering.</p></div>
          </article>
          <article className="timeline-item">
            <span className="timeline-marker" />
            <div><p className="timeline-kicker">HOSPITAL ENVIRONMENT</p><h3>Biomedical equipment maintenance internships</h3><p className="timeline-place">CHU Fattouma Bourguiba · Monastir</p><p className="timeline-copy">Practical exposure to hospital equipment and biomedical maintenance, including medical imaging and respiratory-care devices.</p></div>
          </article>
          <article className="timeline-item">
            <span className="timeline-marker" />
            <div><p className="timeline-kicker">CONTINUOUS LEARNING</p><h3>AI, data science &amp; software development</h3><p className="timeline-place">Independent and structured learning</p><p className="timeline-copy">Developing practical skills in Python, machine learning, web development and biomedical applications.</p></div>
          </article>
        </div>
      </section>
    </SiteLayout>
  );
}
