import { Skeleton } from "@/components/ui/skeleton";

export default function InsuranceLoading() {
  return (
    <div className="container py-16">
      <Skeleton className="mb-8 h-8 w-72" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-56 w-full rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
