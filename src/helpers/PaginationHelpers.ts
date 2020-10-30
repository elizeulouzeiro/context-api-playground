const MAX_PAGES_SHOWED = 10

export const getTotalPages = (perPage: number, totalItems: number) =>
  Math.ceil(totalItems / perPage)

export const getFirstAndLastPage = (pages: number[]) => ({
  firstPage: pages[0],
  lastPage: pages[pages.length - 1]
})

export const getDisplayablePages = (currentPage: number, pages: number[]) => {
  const nextPages = pages.splice(currentPage - 1, MAX_PAGES_SHOWED)
  const previousPages =
    nextPages.length < MAX_PAGES_SHOWED
      ? pages.slice(nextPages.length - MAX_PAGES_SHOWED)
      : []

  return [...previousPages, ...nextPages]
}
