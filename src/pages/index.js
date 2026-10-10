import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout, { ExternalLink } from "../components/layout";
import Seo from "../components/seo";
import { Arrow, ProjectSymbol } from "../components/icons";
import profile from "../data/profile.json";
const platforms = [
  {
    name: "Fanatrips",
    kind: "Consumer travel",
    body: "Event travel booking for hotels, experiences and car rentals. Built connected journeys across search, authentication, trip management and payments.",
    tags: ["React", "Next.js", "Booking journeys"],
  },
  {
    name: "University white label platform",
    kind: "Multi tenant travel",
    body: "Branded university travel sites from one codebase. Implemented domain based tenant resolution for each university’s identity and event content.",
    tags: ["Tenant resolution", "Shared frontend", "Caching"],
  },
  {
    name: "Overseas Express (OX)",
    kind: "Agency & traveler booking",
    body: "B2B and B2B2C travel booking. Lead the frontend where agencies assemble trips, book directly or share trips with travelers for checkout.",
    tags: ["Trip planning", "API integration"],
  },
  {
    name: "Overseas Network website & library",
    kind: "Content & reusable UI",
    body: "A Payload CMS website for company pages and blogs, with technical SEO. Built reusable React search, hotel details and transfer components with Bit.dev.",
    tags: ["Payload CMS", "Bit.dev", "SEO"],
  },
];
function SectionHeading({ label, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
      </div>
      {children && <p className="section-intro">{children}</p>}
    </div>
  );
}
export default function Portfolio() {
  return (
    <Layout>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">React · Next.js · TypeScript</p>
            <h1 id="hero-title">
              Complex products.
              <br />
              <span>Clear experiences.</span>
            </h1>
            <p className="hero-description">
              I’m Mehdi, a frontend engineer turning complex requirements into
              web experiences people can use with confidence.
            </p>
            <p className="hero-context">
              Currently leading frontend development at Overseas Network.
            </p>
            <div className="hero-actions">
              <a className="button button-navy" href="#work">
                Explore my work <Arrow />
              </a>
              <a className="text-link" href={`mailto:${profile.email}`}>
                Get in touch <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="hero-portrait">
            <div className="portrait-frame">
              <StaticImage
                src="../../static/images/mehdi.png"
                alt="El Mehdi Essaadi"
                width={560}
                quality={92}
                loading="eager"
              />
            </div>
          </div>
        </div>
        <div className="container hero-foot">
          <span>Frontend architecture</span>
          <span>Product ownership</span>
          <span>Practical AI workflows</span>
        </div>
      </section>
      <section id="work" className="section container">
        <SectionHeading
          label="Selected work"
          title="Products I’ve helped build."
        />
        <article className="featured-project">
          <Link
            to="/work/fifa-world-cup/"
            className="featured-image"
            aria-label="Read the FIFA World Cup project case study"
          >
            <StaticImage
              src="../../static/images/fifa-hotels.png"
              alt="FIFA travel hotel results showing hotel photos, prices, map and amenity filters. Application preview with sample data."
              width={1400}
              quality={88}
            />
          </Link>
          <div className="featured-copy">
            <div className="featured-title">
              <p className="eyebrow">Overseas Network · 2026</p>
              <h3>
                Official FIFA World Cup 2026
                <br />
                travel booking platform
              </h3>
              <ul className="tags" aria-label="Project technologies">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="featured-details">
              <p>
                Travel around the match. Led frontend development of a platform
                connecting World Cup events with hotels, experiences and ground
                transportation.
              </p>
              <p>
                Built the journeys from hotel search to trip management and
                checkout.
              </p>
              <Link className="text-link" to="/work/fifa-world-cup/">
                Explore the project <Arrow />
              </Link>
            </div>
          </div>
        </article>
        <div className="platform-grid">
          {platforms.map((p) => (
            <article className="platform-card" key={p.name}>
              <ProjectSymbol kind={p.kind} />
              <p className="eyebrow">{p.kind}</p>
              <h3>{p.name}</h3>
              <p>{p.body}</p>
              <ul className="tags" aria-label={`${p.name} focus`}>
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <details className="earlier-work">
          <summary>
            Earlier independent projects <span>Quran apps, Voneet & more</span>
            <span className="details-indicator" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="independent-grid">
            <article>
              <StaticImage
                src="../../static/images/quran-web.png"
                alt="Quran For You web application"
                width={650}
                quality={85}
              />
              <h3>Quran For You</h3>
              <p>
                A React web app for reading and listening to the Quran, with
                multiple translations and reciters.
              </p>
              <ExternalLink
                href={`${profile.github}/Quran-Player`}
                className="text-link"
              >
                View source <Arrow diagonal />
              </ExternalLink>
            </article>
            <article>
              <StaticImage
                src="../../static/images/quran-mobile.png"
                alt="Quran mobile application screens"
                width={650}
                quality={85}
              />
              <h3>Quran mobile app</h3>
              <p>
                A React Native and Expo application for reading and listening to
                the Quran.
              </p>
              <ExternalLink
                href={`${profile.github}/mobile-quran-app`}
                className="text-link"
              >
                View source <Arrow diagonal />
              </ExternalLink>
            </article>
            <article>
              <StaticImage
                src="../../static/images/voneet.png"
                alt="Voneet Twitter tool interface"
                width={650}
                quality={85}
              />
              <h3>Voneet</h3>
              <p>
                A Twitter tool built with React, Node.js, Express and MongoDB
                for the Chirp developer challenge.
              </p>
              <ExternalLink
                href={`${profile.github}/Voneet`}
                className="text-link"
              >
                View source <Arrow diagonal />
              </ExternalLink>
            </article>
          </div>
          <ExternalLink
            href={profile.github}
            className="text-link all-projects"
          >
            More projects on GitHub <Arrow diagonal />
          </ExternalLink>
        </details>
      </section>
      <section id="experience" className="section experience-section">
        <div className="container experience-layout">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>
              Ownership,
              <br />
              beyond the UI.
            </h2>
            <p className="section-intro">
              From reusable interfaces to complete product journeys, with close
              collaboration across engineering and product.
            </p>
            <a
              href="/documents/el-mehdi-essaadi-resume.pdf"
              className="text-link"
              download
            >
              Download my résumé <Arrow diagonal />
            </a>
          </div>
          <div className="timeline">
            {profile.experiences.map((job, i) => (
              <article key={job.company} className="job">
                <div className="job-date">
                  {job.start} to {job.end}
                </div>
                <h3>{job.company}</h3>
                <p className="job-role">{job.role}</p>
                <p>{job.summary}</p>
                {i === 0 && (
                  <p className="job-extra">
                    Own most frontend architecture decisions, review frontend
                    contributions and help shape user journeys with backend
                    engineers, designers and product managers.
                  </p>
                )}
                <span className="job-context">{job.context}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className="section container">
        <SectionHeading label="Capabilities" title="The tools. The thinking.">
          A strong frontend foundation, with the range to work across product
          boundaries.
        </SectionHeading>
        <div className="capability-grid">
          {profile.capabilities.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul className="tags">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div className="about-side">
            <p className="eyebrow">A little about me</p>
            <h2>
              Curious by nature.
              <br />
              Careful in the details.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I started learning software development in 2021 with CS50. Since
              then, I’ve worked across freelance projects, grocery commerce and
              travel technology.
            </p>
            <p>
              I enjoy understanding the product as much as building the
              interface. I care about the edge cases, loading states and small
              interactions that make an experience feel complete.
            </p>
            <div className="ai-note">
              <h3>AI is part of my engineering practice.</h3>
              <p>
                I use Claude Code, Codex and ChatGPT to support planning,
                implementation and problem solving. Reusable agent skills and
                parallel sessions help me work effectively, while AI agents also
                help test user journeys and identify issues through browser
                based QA.
              </p>
              <p>
                I stay responsible for engineering decisions and the quality of
                what ships. This work also extends to backend contributions in
                TypeScript and Go.
              </p>
            </div>
            <p className="personal-note">
              Away from the screen, I enjoy football, discovering new places and
              time with family.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Let’s connect</p>
            <h2>
              Have a product
              <br />
              worth building?
            </h2>
            <p>
              I’m interested in Senior Frontend Engineer opportunities with
              teams that value product ownership and thoughtful engineering.
            </p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="contact-email">
              {profile.email}
              <Arrow diagonal />
            </a>
            <div>
              <ExternalLink href={profile.linkedin}>
                LinkedIn <Arrow diagonal />
              </ExternalLink>
              <ExternalLink href={profile.github}>
                GitHub <Arrow diagonal />
              </ExternalLink>
              <a href="/documents/el-mehdi-essaadi-resume.pdf" download>
                Résumé <Arrow diagonal />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const Head = () => <Seo />;
