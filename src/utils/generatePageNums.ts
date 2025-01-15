export const generatePageNums = (
  current_page: number,
  total_pages: number,
  maxPagesToShow: number = 5
): number[] => {
  if (total_pages < 1 || maxPagesToShow < 1) return []

  const half = Math.floor(maxPagesToShow / 2)
  let startPage = Math.max(1, current_page - half)
  const endPage = Math.min(total_pages, startPage + maxPagesToShow - 1)

  startPage = Math.max(1, endPage - maxPagesToShow + 1)

  const pages: number[] = []
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }
  return pages
}
