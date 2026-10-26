import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/Icons";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "outline-light";
  arrow?: boolean;
};

export default function ButtonLink({
  href,
  children,
  variant = "solid",
  arrow = false,
}: Props) {
  return (
    <Link href={href} className={`button button-${variant}`}>
      {children}
      {arrow && <ArrowIcon />}
    </Link>
  );
}
