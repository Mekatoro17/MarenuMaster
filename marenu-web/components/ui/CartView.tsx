"use client";

import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import { TrashIcon } from "@/components/ui/Icons";
import { formatPrice, getProduct } from "@/lib/mock-products";
import { useCart } from "@/lib/use-cart";

export default function CartView() {
  const { items, setQty, remove } = useCart();

  const lines = items.flatMap((item) => {
    const product = getProduct(item.slug);
    return product ? [{ item, product }] : [];
  });
  const subtotal = lines.reduce((s, l) => s + l.product.price * l.item.qty, 0);

  if (!lines.length) {
    return (
      <div className="cart-empty">
        <p>Tu carrito está vacío.</p>
        <ButtonLink href="/catalogo" variant="outline">
          Ver catálogo
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="cart-layout">
      <ul className="cart-lines">
        {lines.map(({ item, product }) => (
          <li key={`${item.slug}-${item.color}`} className="cart-line">
            <Link href={`/producto/${product.slug}`} className="cart-thumb">
              <Image
                src={product.image.src}
                alt={product.image.alt}
                fill
                sizes="120px"
              />
            </Link>
            <div className="cart-line-info">
              <h3>{product.name}</h3>
              <p className="muted">Color: {item.color}</p>
              <p>{formatPrice(product.price)}</p>
            </div>
            <div
              className="qty"
              role="group"
              aria-label={`Cantidad de ${product.name}`}
            >
              <button
                type="button"
                aria-label="Disminuir cantidad"
                onClick={() => setQty(item, item.qty - 1)}
                disabled={item.qty <= 1}
              >
                {"\u2212"}
              </button>
              <span aria-live="polite">{item.qty}</span>
              <button
                type="button"
                aria-label="Aumentar cantidad"
                onClick={() => setQty(item, item.qty + 1)}
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="icon-button"
              aria-label={`Eliminar ${product.name}`}
              onClick={() => remove(item)}
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>

      <aside className="cart-summary">
        <h2>Resumen</h2>
        <p className="summary-row">
          <span>Subtotal (demostración)</span>
          <strong>{formatPrice(subtotal)}</strong>
        </p>
        <p className="muted">
          El pago y el envío aún no están disponibles. El checkout se
          implementará en la siguiente etapa.
        </p>
      </aside>
    </div>
  );
}
