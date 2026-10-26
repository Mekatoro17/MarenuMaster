import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CatalogGrid from "@/components/ui/CatalogGrid";
import { categories, getCategory, products } from "@/lib/mock-products";

type Params = { categoria: string };

export function generateStaticParams() {
  return categories.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const category = getCategory((await params).categoria);
  return { title: category ? `${category.name} | MARENÚ` : "Catálogo | MARENÚ" };
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const category = getCategory((await params).categoria);
  if (!category) notFound();

  return (
    <div className="container page">
      <p className="breadcrumb">
        <Link href="/catalogo">Catálogo</Link> / {category.name}
      </p>
      <div className="section-heading">
        <p className="eyebrow">
          {category.slug === "abarcas" ? "Pieza de origen" : "Colección"}
        </p>
        <h1>{category.name}</h1>
        <p className="muted">{category.description}</p>
      </div>
      <CatalogGrid
        products={products.filter((p) => p.category === category.slug)}
      />
    </div>
  );
}
