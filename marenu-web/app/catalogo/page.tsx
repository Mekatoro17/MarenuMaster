import type { Metadata } from "next";
import CatalogGrid from "@/components/ui/CatalogGrid";
import CategoryCard from "@/components/ui/CategoryCard";
import { categories, products } from "@/lib/mock-products";

export const metadata: Metadata = { title: "Catálogo | MARENÚ" };

export default function CatalogoPage() {
  return (
    <div className="container page">
      <div className="section-heading">
        <p className="eyebrow">Catálogo</p>
        <h1>Elige tu pieza.</h1>
        <p className="muted">
          Productos de demostración: aún no hay inventario real.
        </p>
      </div>
      <div className="category-grid category-grid-compact">
        {categories.map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </div>
      <h2 className="subheading">Todas las piezas</h2>
      <CatalogGrid products={products} />
    </div>
  );
}
