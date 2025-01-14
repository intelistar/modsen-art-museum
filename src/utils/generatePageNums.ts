export const generatePageNums = (
  current_page: number,
  total_pages: number,
  maxPagesToShow: number = 5
) => {
  const pages = []
  const startPage = Math.max(1, current_page - Math.floor(maxPagesToShow / 2))
  const endPage = Math.min(total_pages, startPage + maxPagesToShow - 1)

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }
  return pages
}
