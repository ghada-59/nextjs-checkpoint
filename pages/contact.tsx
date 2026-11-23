import SiteLayout from "../components/SiteLayout";
import { site } from "../data/site";

export default function ContactPage() {
  const emailSubject = encodeURIComponent("Portfolio contact");
  const emailBody = encodeURIComponent("Hello Ghada,\n\nI am reaching out regarding...");

  return (
    <SiteLayout
      title="Contact"
      description="Contact Ghada Boughrara about biomedical engineering, healthcare AI, research and internship opportunities."
    >
      <section className="contact-page container">
        <p className="eyebrow">CONTACT / OPEN TO OPPORTUNITIES</p>
        <h1>Good work starts with <span className="gradient-text">a conversation.</span></h1>
        <p className="page-lead">Interested in biomedical engineering, healthcare AI, medical technology or research &amp; development? I&apos;d be glad to connect.</p>

        <div className="contact-panel">
          <div className="contact-panel-main">
            <span className="contact-icon" aria-hidden="true">↗</span>
            <p className="eyebrow">SEND A MESSAGE</p>
            <h2>Let&apos;s connect.</h2>
            <p>For internship opportunities, project discussions or professional networking, reach out by email or GitHub.</p>
            <a className="button button-primary" href={`mailto:${site.email}?subject=${emailSubject}&body=${emailBody}`}>
              Email me <span aria-hidden="true">↗</span>
            </a>
            {site.email.includes("YOUR_EMAIL") ? (
              <p className="setup-note">Setup note: replace the email placeholder in <code>data/site.ts</code> before publishing.</p>
            ) : null}
          </div>
          <div className="contact-details">
            <div><span>GITHUB</span><a href={site.github} target="_blank" rel="noreferrer">{site.githubLabel} ↗</a></div>
            <div><span>LOCATION</span><p>{site.location}</p></div>
            <div><span>INTERESTS</span><p>Healthcare AI · Medical Technology · R&amp;D</p></div>
            <div><span>AVAILABILITY</span><p>{site.availability}</p></div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
