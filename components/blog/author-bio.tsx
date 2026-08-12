import Image from "next/image";
import Link from "next/link";
import type { Author } from "@/types/blog";

export function AuthorBio({ author }: { author: Author }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6">
      <Image
        src={author.avatar}
        alt=""
        width={56}
        height={56}
        className="h-14 w-14 shrink-0 rounded-full object-cover"
      />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Written by</p>
        <Link href={`/blog/author/${author.slug}`} className="font-display text-base text-navy-950 hover:text-royal-700">
          {author.name}
        </Link>
        <p className="text-xs text-ink-muted">{author.credentials}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{author.bio}</p>
      </div>
    </div>
  );
}
