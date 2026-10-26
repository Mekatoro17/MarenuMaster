import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/mock-products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/producto/${product.slug}`} className="product-media">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          style={{ objectFit: product.image.fit }}
        />
      </Link>
      <div className="product-info">
        <h3>
          <Link href={`/producto/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="price">
          {formatPrice(product.price)} <span className="demo-tag">demo</span>
        </p>
        <ul className="swatches" aria-label="Colores de demostración">
          {product.colors.map((c) => (
            <li key={c.name} title={c.name} style={{ background: c.hex }}>
              <span className="sr-only">{c.name}</span>
            </li>
          ))}
        </ul>
        <Link href={`/producto/${product.slug}`} className="text-link">
          Ver producto
        </Link>
      </div>
    </article>
  );
}
