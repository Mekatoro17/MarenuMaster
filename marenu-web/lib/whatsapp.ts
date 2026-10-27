import { formatPrice } from "@/lib/mock-products";

export type OrderLine = {
  name: string;
  size: string;
  color: string;
  qty: number;
  unitPrice: number;
};

export const orderTotal = (lines: OrderLine[]) =>
  lines.reduce((sum, l) => sum + l.unitPrice * l.qty, 0);

// El espacio de no separación de Intl se cambia por un espacio normal.
const money = (value: number) => formatPrice(value).replace(/\u00a0/g, " ");

export function buildWhatsAppMessage(lines: OrderLine[]): string {
  const items = lines.map((l, i) =>
    [
      `${i + 1}. ${l.name}`,
      l.size ? `   Talla: ${l.size}` : null,
      `   Color: ${l.color}`,
      `   Cantidad: ${l.qty}`,
      `   Precio unitario: ${money(l.unitPrice)}`,
      `   Subtotal: ${money(l.unitPrice * l.qty)}`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    "Hola, MARENÚ. Quiero consultar y finalizar la compra de los siguientes productos:",
    "",
    items.join("\n\n"),
    "",
    `Total provisional de productos: ${money(orderTotal(lines))}`,
    "El envío y el total definitivo deben confirmarse con MARENÚ.",
    "",
    "Por favor, confirmen la disponibilidad, el costo del envío y los pasos para completar mi pedido.",
  ].join("\n");
}

export const buildWhatsAppUrl = (number: string, message: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
