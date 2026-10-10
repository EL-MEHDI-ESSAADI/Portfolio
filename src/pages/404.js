import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
export default function NotFound() {
  return (
    <Layout>
      <section className="container not-found">
        <p className="eyebrow">404</p>
        <h1>This page isn’t here.</h1>
        <p>
          You can find my work, experience and contact details on the homepage.
        </p>
        <Link to="/" className="button button-navy">
          Back to the portfolio
        </Link>
      </section>
    </Layout>
  );
}

export const Head = () => <Seo title="Page not found" path="/404/" noindex />;
