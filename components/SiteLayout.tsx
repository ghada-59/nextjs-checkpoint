import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { navigation, site } from "../data/site";

type SiteLayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
};

export default function SiteLayout({ children, title, description }: SiteLayoutProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${title} | ${site.name}`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#080d18" />
      </Head>

      <div className="site-shell">
        <header className="site-header">
          <div className="container header-inner">
            <Link className="brand" href="/" aria-label={`${site.name} home`}>
              <span className="brand-mark">{site.initials}</span>
              <span className="brand-name">{site.name}</span>
            </Link>

            <nav className="main-nav" aria-label="Main navigation">
              {navigation.map((item) => {
                const isActive = router.pathname === item.href;
                return (
                  <Link
                    className={`nav-link${isActive ? " active" : ""}`}
                    href={item.href}
                    key={item.href}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link className="header-cta" href="/contact">
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <p>© {new Date().getFullYear()} {site.name}. Built with Next.js.</p>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
