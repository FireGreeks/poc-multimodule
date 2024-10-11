export type ContentType = 'JSON' | 'PLAIN'
export type FetchMethod = 'GET' | 'POST'

export type ApiOptions = {
  fetchOptions?: RequestInit,
  responseType?: ContentType,
  bodyContentType?: ContentType,
}
