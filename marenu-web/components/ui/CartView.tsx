"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ButtonLink from "@/components/ui/ButtonLink";
import { TrashIcon } from "@/components/ui/Icons";
import { whatsappNumber } from "@/lib/config";
import { formatPrice, getProduct } from "@/lib/mock-products";
import { useCart } from "@/lib/use-cart";
import {
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  orderTotal,
  type OrderLine,
} from "@/lib/whatsapp";

const NOT_READY =
  "Estamos preparando nuestro canal de WhatsApp. Por el momento, puedes consultar los detalles de tu pedido en el carrito.";

export default function CartView() {
  const { items, setQty, remove } = useCart();
  const [notice, setNotice] = useState(false);

  const lines = items.flatMap((item) => {
    const product = getProduct(item.slug);
    return product ? [{ item, product }] : [];
  });
  const orderLines: OrderLine[] = lines.map(({ item, product }) => ({
    name: product.name,
    size: item.size,
    color: item.color,
    qty: item.qty,
    unitPrice: product.price,
  }));
  const subtotal = orderTotal(orderLines);

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
          <li
            key={`${item.slug}-${item.color}-${item.size}`}
            className="cart-line"
          >
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
              <p className="muted">
                {item.size ? `Talla: ${item.size} · ` : ""}Color: {item.color}
              </p>
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
          <span>Total provisional de productos</span>
          <strong>{formatPrice(subtotal)}</strong>
        </p>
        <p className="muted">
          El envío y el total definitivo se confirman con MARENÚ. Abrir
          WhatsApp no confirma tu pedido ni reserva inventario.
        </p>

        {whatsappNumber ? (
          <a
            className="button button-whatsapp"
            href={buildWhatsAppUrl(
              whatsappNumber,
              buildWhatsAppMessage(orderLines),
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Finalizar compra por WhatsApp
          </a>
        ) : (
          <button
            type="button"
            className="button button-whatsapp"
            aria-describedby={notice ? "whatsapp-aviso" : undefined}
            onClick={() => setNotice(true)}
          >
            Finalizar compra por WhatsApp
          </button>
        )}
        {notice && !whatsappNumber && (
          <p id="whatsapp-aviso" className="notice" role="status">
            {NOT_READY}
          </p>
        )}
      </aside>
    </div>
  );
}
