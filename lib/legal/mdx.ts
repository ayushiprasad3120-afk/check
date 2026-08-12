import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const LEGAL_DIR = path.join(process.cwd(), "content", "legal");

export function getLegalDoc(slug: string): { title: string; lastUpdated: string; content: string } | null {
  const fullPath = path.join(LEGAL_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return { title: data.title, lastUpdated: data.lastUpdated, content: content.trim() };
}
