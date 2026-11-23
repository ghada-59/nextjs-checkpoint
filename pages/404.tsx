import Link from "next/link";
import SiteLayout from "../components/SiteLayout";

export default function NotFoundPage() {
  return (
    <SiteLayout title="Page not found" description="The requested page could not be found.">
      <section className="not-found container">
        <p className="eyebrow">ERROR / 404</p>
        <h1>This page isn&apos;t in the system.</h1>
        <Link className="button button-primary" href="/">Back to home <span aria-hidden="true">↗</span></Link>
      </section>
    </SiteLayout>
  );
}
