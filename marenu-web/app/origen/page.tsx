import type { Metadata } from "next";
import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import {
  filosofia,
  marca,
  origen,
  pendiente,
  posicionamiento,
  principio,
  proposito,
} from "@/lib/brand-copy";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "Origen | MARENÚ" };

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
          <p className="eyebrow eyebrow-light">{marca.descriptor}</p>
          <h1>{origen.titulo}</h1>
          <p className="hero-phrase">{origen.secundaria}</p>
        </div>
      </section>

      <section id="historia" className="section container narrow">
        <p className="eyebrow">Nuestra historia</p>
        <h2>{marca.lema}</h2>
        <p>{posicionamiento}</p>
        <p>{proposito}</p>
        <blockquote className="quote">
          {principio.frase}
          <footer>{principio.compromiso}</footer>
        </blockquote>
      </section>

      <section className="band">
        <div className="container narrow">
          <p className="eyebrow eyebrow-light">{filosofia.artesaniaContemporanea}</p>
          <h2>{filosofia.modernoNoBorra}</h2>
          <p>{filosofia.estandarSeleccion}</p>
          <p>{filosofia.dosMetros}</p>
        </div>
      </section>

      <section className="section container narrow">
        <p className="eyebrow">Productores</p>
        <h2>{origen.productoresTitulo}</h2>
        <p>{origen.productoresPendiente}</p>
        <ul className="pending-list" aria-label="Información de cada pieza">
          {origen.tag.map((q) => (
            <li key={q}>
              <span>{q}</span>
              <em>{pendiente}</em>
            </li>
          ))}
        </ul>
      </section>

      <section className="section container center">
        <h2>{origen.cierre}</h2>
        <ButtonLink href="/catalogo" arrow>
          Descubrir colección
        </ButtonLink>
      </section>
    </>
  );
}
