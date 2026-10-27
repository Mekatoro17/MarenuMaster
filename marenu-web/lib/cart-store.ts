export type CartItem = { slug: string; color: string; size: string; qty: number };

const KEY = "marenu-cart";
const EMPTY: CartItem[] = [];
const listeners = new Set<() => void>();
let cache: CartItem[] | null = null;

function read(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.map((i: Partial<CartItem>) => ({
      slug: String(i.slug),
      color: String(i.color),
      size: typeof i.size === "string" ? i.size : "",
      qty: Number(i.qty) || 1,
    }));
  } catch {
    return [];
  }
}

export function getSnapshot(): CartItem[] {
  if (cache === null) cache = read();
  return cache;
}

export function getServerSnapshot(): CartItem[] {
  return EMPTY;
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setItems(next: CartItem[]) {
  cache = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Sin almacenamiento disponible: el carrito vive solo en memoria.
  }
  listeners.forEach((l) => l());
}
