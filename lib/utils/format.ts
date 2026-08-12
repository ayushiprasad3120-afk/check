export function toTelHref(phoneDisplay: string): string {
  const digits = phoneDisplay.replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}

export function formatDate(iso: string): string {
  const date = new Date(iso);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
