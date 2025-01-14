export interface Pagination {
  currentPage: number
  totalPages: number
}

export interface PaginationRaw {
  current_page: number
  total_pages: number
  limit: number
  next_url?: string
  prev_url?: string
  offset: number
  total: number
}
