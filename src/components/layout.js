import React from "react";
import { Link } from "gatsby";
import profile from "../data/profile.json";
import { Arrow } from "./icons";
import "../globalStyles/portfolio.css";
export function ExternalLink({ children, ...props }) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
export default function Layout({ children, darkHeader = false }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`site-header ${darkHeader ? "site-header-dark" : ""}`}>
        <div className="container nav-inner">
          <Link to="/" className="brand" aria-label="El Mehdi Essaadi, home">
            <span>
              El Mehdi Essaadi
              <span className="brand-role">Frontend Engineer</span>
            </span>
          </Link>
          <nav aria-label="Main navigation">
            <Link to="/#work">Work</Link>
            <Link to="/#experience">Experience</Link>
            <Link to="/#about">About</Link>
            <a
              href="/documents/el-mehdi-essaadi-resume.pdf"
              className="nav-resume"
              download
            >
              Résumé <Arrow diagonal />
            </a>
          </nav>
        </div>
      </header>
      <main id="main" tabIndex="-1">
        {children}
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>

          <a href="#main">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
