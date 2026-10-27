"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/use-cart";
import type { Product } from "@/lib/mock-products";

export default function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [color, setColor] = useState(product.colors[0].name);
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(
    null,
  );

  const submit = () => {
    if (product.sizes.length && !size) {
      setMessage({ text: "Elige una talla para continuar.", ok: false });
      return;
    }
    add({ slug: product.slug, color, size }, qty);
    setMessage({ text: "Producto agregado al carrito.", ok: true });
  };

  return (
    <div className="add-to-cart">
      <fieldset>
        <legend>Color (demostración): {color}</legend>
        <div className="color-options">
          {product.colors.map((c) => (
            <label key={c.name} title={c.name}>
              <input
                type="radio"
                name="color"
                value={c.name}
                checked={color === c.name}
                onChange={() => setColor(c.name)}
              />
              <span style={{ background: c.hex }} />
              <span className="sr-only">{c.name}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {product.sizes.length > 0 && (
        <fieldset>
          <legend>Talla (demostración){size ? `: ${size}` : ""}</legend>
          <div className="size-options">
            {product.sizes.map((s) => (
              <label key={s}>
                <input
                  type="radio"
                  name="talla"
                  value={s}
                  checked={size === s}
                  onChange={() => {
                    setSize(s);
                    setMessage(null);
                  }}
                />
                <span>{s}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className="qty-row">
        <span id="qty-label">Cantidad</span>
        <div className="qty" role="group" aria-labelledby="qty-label">
          <button
            type="button"
            aria-label="Disminuir cantidad"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            disabled={qty <= 1}
          >
            {"\u2212"}
          </button>
          <span aria-live="polite">{qty}</span>
          <button
            type="button"
            aria-label="Aumentar cantidad"
            onClick={() => setQty((q) => Math.min(99, q + 1))}
          >
            +
          </button>
        </div>
      </div>

      <button type="button" className="button button-solid" onClick={submit}>
        Agregar al carrito
      </button>
      <p
        className={message?.ok === false ? "status status-error" : "status"}
        role="status"
      >
        {message?.text}{" "}
        {message?.ok && (
          <Link href="/carrito" className="text-link">
            Revisar carrito y continuar compra
          </Link>
        )}
      </p>
    </div>
  );
}
