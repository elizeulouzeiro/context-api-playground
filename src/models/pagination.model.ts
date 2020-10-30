export interface IPagination {
  page: number
  perPage: number
  totalItems: number
  onChangePage: (page: number) => void
}
