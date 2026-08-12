/** Converts a string to a URL/anchor-safe slug, e.g. "What is InsureDirect?" -> "what-is-insuredirect". */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
