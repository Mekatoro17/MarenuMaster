import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCart from "@/components/ui/AddToCart";
import {
  formatPrice,
  getCategory,
  getProduct,
  products,
} from "@/lib/mock-products";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return { title: product ? `${product.name} | MARENÚ` : "Producto | MARENÚ" };
}

export default async function ProductoPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const category = getCategory(product.category);

  return (
    <div className="container page">
      <p className="breadcrumb">
        <Link href="/catalogo">Catálogo</Link> /{" "}
        <Link href={`/catalogo/${product.category}`}>{category?.name}</Link> /{" "}
        {product.name}
      </p>
      <div className="detail">
        <div className="detail-media">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            priority
            sizes="(min-width: 900px) 50vw, 100vw"
            style={{ objectFit: product.image.fit }}
          />
        </div>
        <div className="detail-info">
          <p className="eyebrow">{category?.name}</p>
          <h1>{product.name}</h1>
          <p className="price price-lg">{formatPrice(product.price)}</p>
          <p>{product.description}</p>
          <p className="muted">
            Producto, precio y colores de demostración. No hay inventario real
            ni compra disponible todavía.
          </p>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}
