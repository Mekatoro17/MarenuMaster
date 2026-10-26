"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import { BagIcon, CloseIcon, MenuIcon, SearchIcon } from "@/components/ui/Icons";
import { useCart } from "@/lib/use-cart";
import { descriptor } from "@/lib/brand";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/origen", label: "Origen" },
  { href: "/origen#historia", label: "Nuestra historia" },
  { href: "/ayuda", label: "Ayuda" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useCart();

  const isActive = (href: string) =>
    !href.includes("#") &&
    (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>{descriptor}</span>
          <span>Envíos a Colombia</span>
        </div>
      </div>

      <div className="container nav-inner">
        <Logo />

        <nav className="nav-desktop" aria-label="Principal">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={isActive(l.href) ? "active" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link href="/catalogo#buscar" aria-label="Buscar productos">
            <SearchIcon />
          </Link>
          <Link href="/carrito" className="cart-link" aria-label={`Carrito, ${count} productos`}>
            <BagIcon />
            <span className="cart-badge">{count}</span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-movil" className="nav-mobile" aria-label="Menú móvil">
          {links.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
