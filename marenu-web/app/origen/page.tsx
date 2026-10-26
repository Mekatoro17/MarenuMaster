import type { Metadata } from "next";
import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import { descriptor } from "@/lib/brand";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "Origen | MARENÚ" };

const phrases = [
  "Chinú, en cada pieza.",
  "Hecho en Chinú, hecho con historia.",
  "De nuestras manos a las tuyas.",
  "Donde cada pieza cuenta una historia.",
];

export default function OrigenPage() {
  return (
    <>
      <section className="page-hero">
        <Image
          src={images.panoramica.src}
          alt={images.panoramica.alt}
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow eyebrow-light">{descriptor}</p>
          <h1>Origen</h1>
          <p className="hero-phrase">De Chinú para el mundo.</p>
        </div>
      </section>

      <section id="historia" className="section container narrow">
        <p className="eyebrow">Nuestra historia</p>
        <h2>Chinú vive en cada pieza.</h2>
        <p>
          MARENÚ es una marca colombiana de origen que nace en Chinú, Córdoba.
          Queremos visibilizar el talento, los oficios y la tradición de Chinú,
          llevando sus productos a nuevos mercados y conectando a quienes los
          crean con nuevos clientes y oportunidades.
        </p>
        <p>
          Comenzamos con sandalias para mujer elaboradas en Chinú. Más adelante
          podremos incorporar otros tipos de calzado, accesorios y productos de
          origen. No somos un marketplace genérico: seleccionamos por origen,
          calidad, diseño, comodidad y autenticidad.
        </p>
        <p className="quote">No inventamos el origen. Lo hacemos visible.</p>
      </section>

      <section className="phrases">
        <ul className="container">
          {phrases.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      <section className="section container center">
        <ButtonLink href="/catalogo" arrow>
          Descubrir colección
        </ButtonLink>
      </section>
    </>
  );
}
