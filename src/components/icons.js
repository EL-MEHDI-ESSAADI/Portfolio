import React from "react";
export function Arrow({ diagonal = false, ...props }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function ProjectSymbol({ kind }) {
  const paths = {
    "Consumer travel": (
      <>
        <rect x="5" y="8" width="22" height="20" rx="3" />
        <path d="M10 5v6m12-6v6M5 15h22m-16 5h4m4 0h2m-10 4h4" />
      </>
    ),
    "Multi tenant travel": (
      <>
        <path d="M6 27V11l10-6 10 6v16M3 27h26M12 27v-7h8v7M11 12h2m6 0h2m-10 4h2m6 0h2" />
      </>
    ),
    "Agency & traveler booking": (
      <>
        <rect x="4" y="8" width="24" height="19" rx="3" />
        <path d="M11 8V5h10v3M4 17h24m-14-2h4v5h-4z" />
      </>
    ),
    "Content & reusable UI": (
      <>
        <rect x="4" y="5" width="24" height="22" rx="3" />
        <path d="M4 11h24M9 8h1m3 0h1m3 0h1M9 16h8m-8 4h14m-14 3h10" />
      </>
    ),
  };
  return (
    <span className="project-symbol" aria-hidden="true">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[kind]}
      </svg>
    </span>
  );
}
