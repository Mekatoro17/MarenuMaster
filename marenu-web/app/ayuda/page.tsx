import type { Metadata } from "next";

export const metadata: Metadata = { title: "Ayuda | MARENÚ" };

export default function AyudaPage() {
  return (
    <div className="container page narrow">
      <div className="section-heading">
        <p className="eyebrow">Ayuda</p>
        <h1>¿Cómo podemos ayudarte?</h1>
      </div>
      <p>
        Esta es una versión inicial de MARENÚ. Las condiciones de envío,
        cambios y pagos aún no están definidas y se publicarán aquí cuando
        estén confirmadas.
      </p>
      <h2 id="contacto" className="subheading">
        Contacto
      </h2>
      <p>
        Los canales de contacto (web y WhatsApp) se publicarán próximamente.
      </p>
    </div>
  );
}
