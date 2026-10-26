import type { Metadata } from "next";
import CartView from "@/components/ui/CartView";

export const metadata: Metadata = { title: "Carrito | MARENÚ" };

export default function CarritoPage() {
  return (
    <div className="container page">
      <div className="section-heading">
        <p className="eyebrow">Carrito</p>
        <h1>Tu selección</h1>
      </div>
      <CartView />
    </div>
  );
}
