import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { descriptor } from "@/lib/brand";
import { images } from "@/lib/images";

export default function Footer() {
  const credits = Object.values(images);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-descriptor">{descriptor}</p>
          <p className="footer-tagline">De Chinú para el mundo.</p>
        </div>
        <nav aria-label="Pie de página">
          <h4>Explorar</h4>
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/origen">Origen</Link>
          <Link href="/ayuda#contacto">Contacto</Link>
          <Link href="/ayuda">Ayuda</Link>
        </nav>
        <div>
          <h4>Información</h4>
          <p className="footer-note">
            Información comercial provisional. Productos, precios e imágenes de
            esta versión son de demostración.
          </p>
        </div>
      </div>

      <div className="container footer-credits">
        <details>
          <summary>Créditos de imágenes provisionales</summary>
          <ul>
            {credits.map((c) => (
              <li key={c.src}>
                {c.credit} · {c.license} · Wikimedia Commons
              </li>
            ))}
          </ul>
        </details>
      </div>
    </footer>
  );
}
