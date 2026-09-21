import type { ReactNode, SVGProps } from "react";

// One custom line-icon family, drawn to match the Peach State logo
// (trash can, dump trailer, crossed hammer and axe). No icon library.
export type IconName =
  | "trash"
  | "trailer"
  | "demo"
  | "phone"
  | "check"
  | "arrow"
  | "camera"
  | "truck"
  | "clear"
  | "pin"
  | "shield"
  | "tag"
  | "recycle"
  | "home"
  | "building"
  | "sofa"
  | "fridge"
  | "mattress"
  | "house"
  | "clipboard"
  | "garage"
  | "debris"
  | "leaf"
  | "tub"
  | "monitor"
  | "image";

const defs: Record<IconName, { vb: string; sw: number; d: ReactNode }> = {
  trash: {
    vb: "0 0 32 32",
    sw: 1.7,
    d: (
      <>
        <path d="M5 9h22" />
        <path d="M12 9V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
        <path d="M7 9l1.6 17a2 2 0 0 0 2 1.9h10.8a2 2 0 0 0 2-1.9L25 9" />
        <path d="M13 14v9M19 14v9" />
      </>
    ),
  },
  trailer: {
    vb: "0 0 32 32",
    sw: 1.7,
    d: (
      <>
        <path d="M3 21h20V13H3z" />
        <path d="M23 17h5l1-4h-6" />
        <circle cx="9" cy="24" r="2.4" />
        <circle cx="21" cy="24" r="2.4" />
        <path d="M3 13l2-3h13l3 3" />
      </>
    ),
  },
  demo: {
    vb: "0 0 32 32",
    sw: 1.7,
    d: (
      <>
        <path d="M6 26l9-9" />
        <path d="M17 15l2.5-2.5" />
        <path d="M18 6l4 4-3.5 3.5-4-4z" />
        <path d="M14.5 9.5 12 7l-3 1 2.5 2.5" />
        <path d="M22 24l4-4" />
        <path d="M20 22l6 6" />
        <path d="M26 20l2 2" />
      </>
    ),
  },
  phone: {
    vb: "0 0 24 24",
    sw: 1.8,
    d: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    ),
  },
  check: { vb: "0 0 24 24", sw: 2, d: <path d="M20 6 9 17l-5-5" /> },
  arrow: {
    vb: "0 0 24 24",
    sw: 2.2,
    d: <path d="M5 12h14M13 6l6 6-6 6" />,
  },
  camera: {
    vb: "0 0 24 24",
    sw: 1.7,
    d: (
      <>
        <path d="M3 8h3l1.5-2h9L18 8h3v12H3z" />
        <circle cx="12" cy="14" r="3.5" />
      </>
    ),
  },
  truck: {
    vb: "0 0 24 24",
    sw: 1.7,
    d: (
      <>
        <path d="M2 16V6h11v10" />
        <path d="M13 9h4l3 3v4h-7z" />
        <circle cx="7" cy="18" r="1.9" />
        <circle cx="17" cy="18" r="1.9" />
      </>
    ),
  },
  clear: {
    vb: "0 0 24 24",
    sw: 1.7,
    d: (
      <>
        <path d="M7 19a5 5 0 0 1-1-9.5A6 6 0 0 1 18 9a4.5 4.5 0 0 1-1 8.9" />
        <path d="M9 13l2 2 4-4" />
      </>
    ),
  },
  pin: {
    vb: "0 0 24 24",
    sw: 1.7,
    d: (
      <>
        <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.4" />
      </>
    ),
  },
  shield: {
    vb: "0 0 24 24",
    sw: 1.6,
    d: (
      <>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  tag: {
    vb: "0 0 24 24",
    sw: 1.6,
    d: (
      <>
        <path d="M20.6 13.4 13 21l-9-9V4h8z" />
        <circle cx="9" cy="9" r="1.4" />
      </>
    ),
  },
  recycle: {
    vb: "0 0 24 24",
    sw: 1.6,
    d: (
      <>
        <path d="M7 19a5 5 0 0 1-1-9.5A6 6 0 0 1 18 9a4.5 4.5 0 0 1-1 8.9" />
        <path d="M12 8l3 3-3 3-3-3z" />
      </>
    ),
  },
  home: {
    vb: "0 0 24 24",
    sw: 1.5,
    d: (
      <>
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </>
    ),
  },
  building: {
    vb: "0 0 24 24",
    sw: 1.5,
    d: (
      <>
        <path d="M3 21h18M5 21V7l7-4v18M12 21V9l7 3v9" />
        <path d="M8 10v0M8 14v0M16 14v0M16 17v0" />
      </>
    ),
  },
  sofa: {
    vb: "0 0 24 24",
    sw: 1.6,
    d: (
      <>
        <path d="M4 12v6h16v-6" />
        <path d="M4 12a2 2 0 0 1 2-2h1V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h1a2 2 0 0 1 2 2" />
        <path d="M6 18v2M18 18v2" />
      </>
    ),
  },
  fridge: {
    vb: "0 0 24 24",
    sw: 1.6,
    d: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="1.5" />
        <path d="M6 9h12" />
        <path d="M9 6v0M9 13v3" />
      </>
    ),
  },
  mattress: {
    vb: "0 0 24 24",
    sw: 1.6,
    d: (
      <>
        <rect x="3" y="8" width="18" height="9" rx="2" />
        <path d="M6 8V6h12v2M5 17v2M19 17v2" />
      </>
    ),
  },
  house: {
    vb: "0 0 24 24",
    sw: 1.6,
    d: (
      <>
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-5h4v5" />
      </>
    ),
  },
  clipboard: {
    vb: "0 0 24 24",
    sw: 1.6,
    d: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M8 3v18M4 9h4M4 15h4" />
        <circle cx="14.5" cy="12" r="1" />
      </>
    ),
  },
  garage: {
    vb: "0 0 24 24",
    sw: 1.6,
    d: (
      <>
        <path d="M3 10l9-6 9 6v10H3z" />
        <path d="M3 10h18M8 20v-6h8v6" />
      </>
    ),
  },
  debris: {
    vb: "0 0 24 24",
    sw: 1.6,
    d: (
      <>
        <path d="M4 20V9l4-2 4 2v3h8v8z" />
        <path d="M12 12v8M16 16v4" />
      </>
    ),
  },
  leaf: {
    vb: "0 0 24 24",
    sw: 1.6,
    d: (
      <>
        <path d="M12 21c-4-3-7-6-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5-3 8-7 11z" />
        <path d="M12 8v6" />
      </>
    ),
  },
  tub: {
    vb: "0 0 24 24",
    sw: 1.6,
    d: (
      <>
        <ellipse cx="12" cy="9" rx="8" ry="3" />
        <path d="M4 9v5c0 1.7 3.6 3 8 3s8-1.3 8-3V9" />
        <path d="M9 20v0M15 20v0" />
      </>
    ),
  },
  monitor: {
    vb: "0 0 24 24",
    sw: 1.6,
    d: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M9 20h6M12 16v4" />
      </>
    ),
  },
  image: {
    vb: "0 0 24 24",
    sw: 1.5,
    d: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.8" />
        <path d="m21 16-5-5L5 20" />
      </>
    ),
  },
};

type IconProps = { name: IconName } & SVGProps<SVGSVGElement>;

export function Icon({ name, ...props }: IconProps) {
  const def = defs[name];
  return (
    <svg
      viewBox={def.vb}
      fill="none"
      stroke="currentColor"
      strokeWidth={def.sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {def.d}
    </svg>
  );
}
