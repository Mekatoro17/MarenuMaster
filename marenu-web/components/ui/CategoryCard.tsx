import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icons";
import type { Category } from "@/lib/mock-products";

export default function CategoryCard({
  category,
  label,
}: {
  category: Category;
  label?: string;
}) {
  return (
    <Link href={`/catalogo/${category.slug}`} className="category-card">
      <Image
        src={category.image.src}
        alt={category.image.alt}
        fill
        sizes="(min-width: 900px) 33vw, 100vw"
      />
      <div className="category-text">
        <h3>{label ?? category.name}</h3>
        <p>{category.tagline}</p>
        <span className="category-cta">
          Ver colección <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}
