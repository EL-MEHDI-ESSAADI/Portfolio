import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Arrow } from "../../components/icons";
export default function FifaProject() {
  return (
    <Layout>
      <section className="case-intro container">
        <Link to="/#work" className="text-link back-link">
          ← All work
        </Link>
        <p className="eyebrow">Selected work · Overseas Network</p>
        <h1>
          Travel around
          <br />
          the World Cup.
        </h1>
        <p className="case-lead">
          Led frontend development for an official FIFA World Cup 2026 travel
          booking platform, helping fans explore matches and arrange travel
          around them.
        </p>
        <dl className="project-facts">
          <div>
            <dt>My role</dt>
            <dd>Main frontend engineer</dd>
          </div>
          <div>
            <dt>Development</dt>
            <dd>December 2025 to March 2026</dd>
          </div>
          <div>
            <dt>Tournament period</dt>
            <dd>June to July 2026</dd>
          </div>
          <div>
            <dt>Core stack</dt>
            <dd>React · Next.js · TypeScript</dd>
          </div>
        </dl>
      </section>
      <figure className="container case-image">
        <StaticImage
          src="../../../static/images/fifa-home.png"
          alt="FIFA World Cup travel homepage. Fans can search by match, dates and travelers, with hotels, experiences, transfers and car rentals available."
          width={1800}
          quality={90}
        />
      </figure>
      <section className="container section case-body">
        <div>
          <p className="eyebrow">The product</p>
          <h2>
            One journey.
            <br />
            Several travel services.
          </h2>
        </div>
        <div>
          <p>
            The platform connects World Cup matches with hotels, experiences,
            car rentals and ground transportation, giving fans a place to
            arrange travel around an event.
          </p>
          <p>
            My work at Overseas Network focused on the frontend: turning product
            requirements and service integrations into connected search, product
            selection, trip management and checkout journeys.
          </p>
        </div>
      </section>
      <section className="case-contributions">
        <div className="container section">
          <p className="eyebrow">My contribution</p>
          <h2>
            From finding a stay
            <br />
            to completing a trip.
          </h2>
          <div className="contribution-grid">
            <article>
              <h3>Search & discovery</h3>
              <p>
                Built hotel search interfaces with product results and
                filtering, keeping match context and traveler inputs part of the
                journey.
              </p>
            </article>
            <article>
              <h3>Trip & checkout journeys</h3>
              <p>
                Connected product selection, trip management and checkout
                through reusable components and integrations across travel
                services.
              </p>
            </article>
            <article>
              <h3>Frontend ownership</h3>
              <p>
                Led frontend development with React, Next.js and TypeScript,
                coordinating the interface with backend services and product
                requirements.
              </p>
            </article>
          </div>
        </div>
      </section>
      <figure className="container case-image case-results">
        <StaticImage
          src="../../../static/images/fifa-hotels.png"
          alt="Hotel search results with price, star and amenity filters, a map entry point and hotel cards with photos and sample pricing."
          width={1800}
          quality={90}
        />
      </figure>
      <section className="container case-closing">
        <h2>A preview of the product.</h2>
        <p>
          The application is no longer live. These screenshots show the
          interface using sample data. Displayed rates and availability are
          illustrative.
        </p>
        <Link to="/#work" className="button button-navy">
          Back to selected work <Arrow />
        </Link>
        <a
          href="/documents/el-mehdi-essaadi-resume.pdf"
          className="text-link"
          download
        >
          Download my résumé <Arrow diagonal />
        </a>
      </section>
    </Layout>
  );
}

export const Head = () => (
  <Seo
    title="Official FIFA World Cup 2026 travel booking platform"
    path="/work/fifa-world-cup/"
    description="Frontend development of an official FIFA World Cup 2026 travel booking platform at Overseas Network, connecting match discovery with travel search, trips and checkout."
  />
);
