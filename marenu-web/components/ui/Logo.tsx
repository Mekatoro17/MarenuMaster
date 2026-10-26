import Image from "next/image";
import Link from "next/link";
import { logos } from "@/lib/brand";

export default function Logo({
  light = false,
  variant = "horizontal",
}: {
  light?: boolean;
  variant?: "horizontal" | "vertical";
}) {
  const logo = logos[variant];
  return (
    <Link
      href="/"
      className={`logo logo-${variant}${light ? " logo-light" : ""}`}
      aria-label="MARENÚ, inicio"
    >
      <Image
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt="MARENÚ, origen Chinú, Córdoba, Colombia"
        priority
      />
    </Link>
  );
}
