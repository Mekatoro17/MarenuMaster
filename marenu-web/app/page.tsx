import ButtonLink from "@/components/ui/ButtonLink";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Origen Chinú · Córdoba · Colombia</p>
            <h1>De Chinú para el mundo.</h1>
            <p className="lead">
              MARENÚ visibiliza el talento, los oficios y la tradición de Chinú,
              llevando sus productos a nuevos mercados y conectando a quienes
              los crean con nuevos clientes y oportunidades.
            </p>
            <ButtonLink href="#origen">Explorar el origen</ButtonLink>
          </div>
          <div
            className="hero-media"
            role="img"
            aria-label="Espacio reservado para fotografía de MARENÚ"
          >
            <span>Fotografía pendiente</span>
          </div>
        </div>
      </section>

      <section id="origen" className="origin">
        <div className="container origin-inner">
          <h2>No inventamos el origen. Lo hacemos visible.</h2>
          <p>
            Comenzamos con sandalias para mujer elaboradas en Chinú. Cada pieza
            se selecciona por su origen, calidad, diseño, comodidad y
            autenticidad.
          </p>
        </div>
      </section>
    </>
  );
}
