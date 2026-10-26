"use client";

import { useSyncExternalStore } from "react";
import {
  getServerSnapshot,
  getSnapshot,
  setItems,
  subscribe,
  type CartItem,
} from "@/lib/cart-store";

export function useCart() {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const count = items.reduce((sum, i) => sum + i.qty, 0);

  const add = (slug: string, color: string, qty = 1) => {
    const current = getSnapshot();
    const found = current.find((i) => i.slug === slug && i.color === color);
    setItems(
      found
        ? current.map((i) => (i === found ? { ...i, qty: i.qty + qty } : i))
        : [...current, { slug, color, qty }],
    );
  };

  const setQty = (item: CartItem, qty: number) => {
    const next = Math.max(1, Math.min(99, qty));
    setItems(
      getSnapshot().map((i) =>
        i.slug === item.slug && i.color === item.color ? { ...i, qty: next } : i,
      ),
    );
  };

  const remove = (item: CartItem) =>
    setItems(
      getSnapshot().filter(
        (i) => !(i.slug === item.slug && i.color === item.color),
      ),
    );

  return { items, count, add, setQty, remove };
}
