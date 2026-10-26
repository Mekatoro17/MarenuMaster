import type { ReactNode } from "react";

export default function ButtonLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className="button">
      {children}
    </a>
  );
}
