// Small built-in icon set (24x24, stroke based, Lucide-style) so the project
// needs no extra icon dependency.

const paths = {
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUp: <path d="M12 19V5M6 11l6-6 6 6" />,
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  directions: (
    <>
      <path d="M12 3l9 9-9 9-9-9z" />
      <path d="M9 13v-2a2 2 0 0 1 2-2h4M13 7l2 2-2 2" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  // capabilities
  press: (
    <>
      <path d="M6 3h12v4H6zM12 7v6M8 13h8l1 3H7zM4 21h16M7 16v5M17 16v5" />
    </>
  ),
  fabrication: (
    <>
      <path d="M14.5 5.5l4 4M3 21l7.5-7.5M13 3l8 8-3 3-8-8z" />
    </>
  ),
  assembly: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
      <path d="M14 7h3a3 3 0 0 1 3 3v1M10 17H7a3 3 0 0 1-3-3v-1" />
    </>
  ),
  tooling: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
    </>
  ),
  coating: (
    <>
      <path d="M4 4h12v5H4zM16 6.5h3v6H11v3" />
      <path d="M9 15.5h4V21H9z" />
    </>
  ),
  // industries
  car: (
    <>
      <path d="M5 16V11l2-5h10l2 5v5M3 16h18M3 16v3h3v-3M18 16v3h3v-3" />
      <circle cx="7.5" cy="12.5" r=".6" />
      <circle cx="16.5" cy="12.5" r=".6" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V9l8-5 8 5v12M2 21h20M9 21v-6h6v6M9 11h.01M15 11h.01" />
    </>
  ),
  tractor: (
    <>
      <circle cx="7" cy="16" r="4" />
      <circle cx="18" cy="18" r="2" />
      <path d="M11 16h5M14 16V6h-4v5M3 12V7h5M16 9h3l2 7" />
    </>
  ),
  tower: (
    <>
      <path d="M12 3v18M8 21l4-18 4 18M9.5 15h5M10.5 10h3M6 7a8 8 0 0 1 0-6M18 7a8 8 0 0 0 0-6" transform="translate(0 2)" />
    </>
  ),
  // quality
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z" />
      <path d="M8.5 12l2.5 2.5L15.5 10" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 17a8 8 0 1 1 16 0" />
      <path d="M12 17l4-5" />
      <circle cx="12" cy="17" r="1" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 12l4-4 4 1 3-2 7 7-4 4-3-1-3 2-3-3-4-1z" />
      <path d="M9 14l2 2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  factory: <path d="M3 21V9l6 4V9l6 4V5h4v16zM7 17h2M12 17h2M17 17h.01" />,
}

export default function Icon({ name, size = 24, className = '', strokeWidth = 1.8 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] || null}
    </svg>
  )
}
