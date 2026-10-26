import Image from "next/image";
import Link from "next/link";
import { officialLogo } from "@/lib/brand";

// Wordmark provisional con tilde terracota; se sustituye por el logotipo oficial en lib/brand.ts.
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`logo${light ? " logo-light" : ""}`}
      aria-label="MARENÚ, inicio"
    >
      {officialLogo ? (
        <Image
          src={officialLogo.src}
          width={officialLogo.width}
          height={officialLogo.height}
          alt="MARENÚ"
          priority
        />
      ) : (
        <span aria-hidden="true">
          MAREN<span className="logo-u">U</span>
        </span>
      )}
    </Link>
  );
}
