"use client";

import { useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import type { Product } from "@/lib/mock-products";

export default function CatalogGrid({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const visible = q
    ? products.filter((p) => p.name.toLowerCase().includes(q))
    : products;

  return (
    <>
      <div className="search-box" id="buscar">
        <label htmlFor="buscar-input" className="sr-only">
          Buscar productos
        </label>
        <input
          id="buscar-input"
          type="search"
          placeholder="Buscar por nombre"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {visible.length ? (
        <div className="product-grid">
          {visible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <p className="empty">No encontramos productos con ese nombre.</p>
      )}
    </>
  );
}
