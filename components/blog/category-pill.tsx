import Link from "next/link";

export function CategoryPill({ category }: { category: string }) {
  return (
    <Link
      href={`/blog/category/${category}`}
      className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-100"
    >
      {category.replace(/-/g, " ")}
    </Link>
  );
}
