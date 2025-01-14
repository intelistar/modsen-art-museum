export interface PaginationRaw {
  currentPage: number
  totalPages: number
  limit: number
  nextUrl?: string
  prevUrl?: string
  offset: number
  total: number
}
