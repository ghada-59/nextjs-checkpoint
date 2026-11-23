import Image from "next/image";
import Link from "next/link";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import SiteLayout from "../components/SiteLayout";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { site } from "../data/site";

type HomePageProps = {
  renderedAt: string;
};

// This function runs on the server for every request to the home page.
// It demonstrates request-time Server-Side Rendering (SSR) with the Pages Router.
export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  return {
    props: {
      renderedAt: new Date().toISOString(),
    },
  };
};

export default function HomePage({
  renderedAt,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const serverTime = new Date(renderedAt).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  });

  return (
    <SiteLayout
      title="Home"
      description="Portfolio of Ghada Boughrara, a biomedical engineering student interested in healthcare AI, medical imaging and intelligent medical technologies."
    >
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="availability-line">
              <span className="availability-dot" />
              {site.availability}
            </div>
            <p className="eyebrow">BIOMEDICAL ENGINEERING × SOFTWARE</p>
            <h1>
              Engineering ideas
              <span className="gradient-text"> for better health.</span>
            </h1>
            <p className="hero-description">
              I&apos;m {site.name}, a biomedical engineering student exploring the intersection of
              healthcare, artificial intelligence and software engineering.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/projects">
                Explore my work <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-secondary" href="/about">
                More about me
              </Link>
            </div>
            <div className="hero-footnote">
              <span>Based in {site.location}</span>
              <span className="footnote-separator" />
              <span>Biomedical AI · Medical Technology · R&amp;D</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Abstract biomedical signal and data visualization">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-glow" />
            <div className="visual-panel panel-top">
              <span className="panel-label">SIGNAL / 001</span>
              <span className="panel-value">ECG<span>·</span></span>
              <span className="panel-subtitle">Signal processing</span>
            </div>
            <Image
              src="/images/hero-biomedical.svg"
              alt="Abstract ECG waveform and biomedical data visualization"
              width={780}
              height={720}
              priority
              className="hero-art"
            />
            <div className="visual-panel panel-bottom">
              <span className="panel-label">FOCUS AREAS</span>
              <div className="focus-chip-row"><span>AI</span><span>MEDTECH</span><span>R&amp;D</span></div>
            </div>
            <div className="visual-index">01 / 04</div>
          </div>
        </div>
        <div className="hero-bottom-line" />
      </section>

      <section className="container intro-strip">
        <p className="intro-label">THE BIG PICTURE</p>
        <p>
          Translating biomedical challenges into thoughtful technical solutions — from physiological
          signals and medical images to connected devices and intelligent software.
        </p>
      </section>

      <section className="container section-block">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Projects at the intersection of health & technology."
          description="A selection of academic and software projects that reflect my interests in biomedical engineering and applied AI."
        />
        <div className="project-grid">
          {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
        </div>
        <div className="section-end-link">
          <Link className="text-link" href="/projects">View all project details <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="capability-section">
        <div className="container capability-grid">
          <div>
            <p className="eyebrow">HOW I THINK</p>
            <h2>One problem.<br /><span className="gradient-text">Multiple disciplines.</span></h2>
          </div>
          <div className="capability-list">
            <div><span>01</span><p>Biomedical understanding</p><small>Clinical context, medical devices and physiological signals.</small></div>
            <div><span>02</span><p>Data &amp; intelligence</p><small>Machine learning, signal analysis and medical imaging workflows.</small></div>
            <div><span>03</span><p>Engineering execution</p><small>Software, prototyping and structured problem solving.</small></div>
          </div>
        </div>
      </section>

      <section className="container closing-cta">
        <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
        <div className="closing-cta-row">
          <h2>Let&apos;s build something meaningful.</h2>
          <Link className="button button-primary" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <div className="container server-render-note" aria-label="Server-side rendering demonstration">
        <span className="server-render-indicator" />
        This page was rendered on the server at {serverTime} UTC.
      </div>
    </SiteLayout>
  );
}
