export type ApiResponse<T> = {
  message?: string
  content?: T
  error?: string
}
