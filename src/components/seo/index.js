import React from "react";
import profile from "../../data/profile.json";
export default function Seo({
  title,
  description = profile.summary,
  path = "/",
  noindex = false,
}) {
  const pageTitle = title
    ? `${title} | ${profile.name}`
    : `${profile.name} | Frontend Engineer · React & Next.js`;
  const url = `${profile.siteUrl}${path}`;
  const image = `${profile.siteUrl}/images/social-cover.png`;
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: profile.siteUrl,
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: ["React", "Next.js", "TypeScript", "Frontend engineering"],
    worksFor: { "@type": "Organization", name: "Overseas Network" },
  };
  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#25364D" />
      {noindex && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta
        property="og:image:alt"
        content="El Mehdi Essaadi. Frontend engineering. React, Next.js and TypeScript."
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">{JSON.stringify(person)}</script>
    </>
  );
}
