import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import CategoryCard from "@/components/ui/CategoryCard";
import ProductCard from "@/components/ui/ProductCard";
import { GemIcon, HandIcon, LeafIcon, TruckIcon } from "@/components/ui/Icons";
import {
  filosofia,
  marca,
  origen,
  posicionamiento,
  producto,
  proposito,
} from "@/lib/brand-copy";
import { images } from "@/lib/images";
import { categories, products } from "@/lib/mock-products";

const values = [
  { icon: <LeafIcon />, title: "Hecho en Chinú", text: "Origen auténtico" },
  { icon: <HandIcon />, title: "Diseño y comodidad", text: "Pensado para el día a día" },
  { icon: <GemIcon />, title: "Calidad seleccionada", text: "Piezas escogidas con criterio" },
  { icon: <TruckIcon />, title: "Envíos a Colombia", text: "A todo el país" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow eyebrow-light">{marca.etiquetaHero}</p>
          <h1>{marca.nombre}</h1>
          <p className="hero-phrase">{marca.mensajeHero}</p>
          <p className="hero-desc">{marca.lema}</p>
          <ButtonLink href="/catalogo" arrow>
            Descubrir colección
          </ButtonLink>
        </div>
      </section>

      <section className="intro container narrow">
        <p className="eyebrow">{filosofia.artesaniaContemporanea}</p>
        <p className="intro-text">{posicionamiento}</p>
        <p className="muted">{filosofia.modernoNoBorra}</p>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">Nuestras colecciones</p>
          <h2>{producto.coleccionesTitulo}</h2>
          <p className="muted">{producto.coleccionesSubtitulo}</p>
        </div>
        <div className="category-grid">
          {categories.map((c) => (
            <CategoryCard
              key={c.slug}
              category={c}
              label={c.slug === "abarcas" ? "Abarcas \u2014 Pieza de origen" : undefined}
            />
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">Piezas destacadas</p>
          <h2>{producto.seleccionTitulo}</h2>
          <p className="muted">{producto.seleccionFrase}</p>
        </div>
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="center">
          <ButtonLink href="/catalogo" variant="outline" arrow>
            Ver todo el catálogo
          </ButtonLink>
        </div>
      </section>

      <section className="origin-split">
        <div className="origin-photo">
          <Image
            src={images.manos.src}
            alt={images.manos.alt}
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
          />
        </div>
        <div className="origin-copy">
          <svg className="origin-leaf" viewBox="0 0 120 160" aria-hidden="true">
            <path d="M60 155C60 95 70 50 100 8M60 120c-25-8-40-25-45-50 25 5 42 20 45 50ZM64 95c22-6 34-20 38-42-22 4-36 18-38 42Z" />
          </svg>
          <p className="eyebrow">Nuestro origen</p>
          <h2>{origen.titulo}</h2>
          <p className="origin-second">{origen.secundaria}</p>
          <p>{proposito}</p>
          <ButtonLink href="/origen#historia" variant="outline" arrow>
            Conoce nuestra historia
          </ButtonLink>
        </div>
      </section>

      <section className="value-strip" aria-label="Valores de MARENÚ">
        <ul className="container value-list">
          {values.map((v) => (
            <li key={v.title}>
              {v.icon}
              <div>
                <strong>{v.title}</strong>
                <span>{v.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
