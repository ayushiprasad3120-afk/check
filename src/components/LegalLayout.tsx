import { Link } from "react-router-dom";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-5 lg:px-8 py-14">
        <Link to="/" className="text-sm font-semibold text-[var(--color-blue-primary)] hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-[var(--color-navy-deep)]">
          {title}
        </h1>
        {updated && <p className="mt-2 text-sm text-[var(--color-text-muted)]">Last updated: {updated}</p>}
        <div className="mt-8 prose-legal space-y-6 text-[var(--color-text-dark)] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
