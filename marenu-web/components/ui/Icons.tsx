import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const SearchIcon = () => (
  <svg {...base}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4.5 4.5" />
  </svg>
);

export const BagIcon = () => (
  <svg {...base}>
    <path d="M5 8h14l-1 12H6L5 8Z" />
    <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
  </svg>
);

export const MenuIcon = () => (
  <svg {...base}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = () => (
  <svg {...base}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const ArrowIcon = () => (
  <svg {...base} width={16} height={16}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const LeafIcon = () => (
  <svg {...base} width={30} height={30}>
    <path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" />
    <path d="M5 19c3-4 6-7 10-9" />
  </svg>
);

export const HandIcon = () => (
  <svg {...base} width={30} height={30}>
    <path d="M8 12V6.5a1.5 1.5 0 0 1 3 0V11m0-5.5V5a1.5 1.5 0 0 1 3 0v6m0-4.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-.5A5.5 5.5 0 0 1 5 14.5V11a1.5 1.5 0 0 1 3 0" />
  </svg>
);

export const GemIcon = () => (
  <svg {...base} width={30} height={30}>
    <path d="M6 4h12l3 5-9 11L3 9l3-5Z" />
    <path d="M3 9h18M9 4l3 5 3-5M12 9v11" />
  </svg>
);

export const TruckIcon = () => (
  <svg {...base} width={30} height={30}>
    <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" />
    <circle cx="7" cy="17.5" r="1.8" />
    <circle cx="17" cy="17.5" r="1.8" />
  </svg>
);

export const TrashIcon = () => (
  <svg {...base} width={18} height={18}>
    <path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" />
  </svg>
);
