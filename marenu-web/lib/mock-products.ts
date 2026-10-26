import { images, type SiteImage } from "@/lib/images";

export type CategorySlug = "sandalias" | "calzado" | "abarcas";

export type Category = {
  slug: CategorySlug;
  name: string;
  tagline: string;
  description: string;
  image: SiteImage;
};

export type ProductColor = { name: string; hex: string };

// DATOS DE DEMOSTRACIÓN: nombres, precios y colores no son productos reales ni hay inventario.
export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  colors: ProductColor[];
  image: SiteImage;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "sandalias",
    name: "Sandalias",
    tagline: "Ligeras, versátiles y llenas de origen.",
    description:
      "Nuestro punto de partida: sandalias para mujer elaboradas en Chinú.",
    image: images.coleccionSandalias,
  },
  {
    slug: "calzado",
    name: "Calzado",
    tagline: "Diseño, comodidad y estilo para cada ocasión.",
    description: "Calzado de cuero pensado para acompañarte todos los días.",
    image: images.coleccionCalzado,
  },
  {
    slug: "abarcas",
    name: "Abarcas",
    tagline: "Una pieza que representa la tradición del calzado de Chinú.",
    description: "Pieza de origen: tradición y oficio en una sola pieza.",
    image: images.coleccionAbarcas,
  },
];

export const products: Product[] = [
  {
    slug: "sandalia-aura",
    name: "Sandalia Aura",
    category: "sandalias",
    price: 149900,
    colors: [
      { name: "Cuero", hex: "#8a5a35" },
      { name: "Café", hex: "#6B4A2E" },
      { name: "Carbón", hex: "#1F1F1F" },
    ],
    image: images.productoAura,
    description:
      "Sandalia de tiras de cuero, ligera y versátil. Producto de demostración.",
  },
  {
    slug: "sandalia-alma",
    name: "Sandalia Alma",
    category: "sandalias",
    price: 159900,
    colors: [
      { name: "Terracota", hex: "#B65A3C" },
      { name: "Cuero", hex: "#8a5a35" },
      { name: "Carbón", hex: "#1F1F1F" },
    ],
    image: images.productoAlma,
    description:
      "Sandalia de tiras cruzadas pensada para el uso diario. Producto de demostración.",
  },
  {
    slug: "calzado-esencial",
    name: "Calzado Esencial",
    category: "calzado",
    price: 189900,
    colors: [
      { name: "Cuero", hex: "#8a5a35" },
      { name: "Café", hex: "#6B4A2E" },
    ],
    image: images.productoEsencial,
    description:
      "Calzado de cuero de líneas limpias para cada ocasión. Producto de demostración.",
  },
  {
    slug: "abarca-tradicion",
    name: "Abarca Tradición",
    category: "abarcas",
    price: 129900,
    colors: [
      { name: "Oliva", hex: "#5b6040" },
      { name: "Terracota", hex: "#B65A3C" },
      { name: "Carbón", hex: "#1F1F1F" },
    ],
    image: images.productoAbarca,
    description:
      "Pieza de origen inspirada en la tradición del calzado de Chinú. Producto de demostración.",
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
