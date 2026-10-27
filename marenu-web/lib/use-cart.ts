"use client";

import { useSyncExternalStore } from "react";
import {
  getServerSnapshot,
  getSnapshot,
  setItems,
  subscribe,
  type CartItem,
} from "@/lib/cart-store";

const same = (a: CartItem, b: CartItem) =>
  a.slug === b.slug && a.color === b.color && a.size === b.size;

export function useCart() {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const count = items.reduce((sum, i) => sum + i.qty, 0);

  const add = (item: Omit<CartItem, "qty">, qty = 1) => {
    const current = getSnapshot();
    const found = current.find((i) => same(i, { ...item, qty }));
    setItems(
      found
        ? current.map((i) =>
            i === found ? { ...i, qty: Math.min(99, i.qty + qty) } : i,
          )
        : [...current, { ...item, qty }],
    );
  };

  const setQty = (item: CartItem, qty: number) => {
    const next = Math.max(1, Math.min(99, qty));
    setItems(getSnapshot().map((i) => (same(i, item) ? { ...i, qty: next } : i)));
  };

  const remove = (item: CartItem) =>
    setItems(getSnapshot().filter((i) => !same(i, item)));

  return { items, count, add, setQty, remove };
}
