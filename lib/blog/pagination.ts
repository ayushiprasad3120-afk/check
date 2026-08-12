export const ARTICLES_PER_PAGE = 9;

export function paginate<T>(items: T[], page: number, perPage = ARTICLES_PER_PAGE) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  const pageItems = items.slice(start, start + perPage);

  return { items: pageItems, currentPage: safePage, totalPages };
}
