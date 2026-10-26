"use client";

import { useState } from "react";
import { useCart } from "@/lib/use-cart";
import type { Product } from "@/lib/mock-products";

export default function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [color, setColor] = useState(product.colors[0].name);
  const [added, setAdded] = useState(false);

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
      <button
        type="button"
        className="button button-solid"
        onClick={() => {
          add(product.slug, color);
          setAdded(true);
        }}
      >
        Agregar al carrito
      </button>
      <p className="status" role="status">
        {added ? "Producto agregado al carrito." : ""}
      </p>
    </div>
  );
}
