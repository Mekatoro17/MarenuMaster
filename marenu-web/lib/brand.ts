import { marca } from "@/lib/brand-copy";

export const logos = {
  horizontal: { src: "/brand/logo-horizontal.png", width: 1182, height: 312 },
  vertical: { src: "/brand/logo-vertical.png", width: 872, height: 500 },
  simbolo: { src: "/brand/logo-simbolo.png", width: 320, height: 224 },
} as const;

export const descriptor = marca.descriptor;
