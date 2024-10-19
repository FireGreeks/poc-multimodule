import {ApiOptions} from 'src/plugins/simple-api-fetch/api-fetch/api-options';
import ApiRequestImpl from 'src/plugins/simple-api-fetch/api-fetch/api-request';
import filterChains from 'src/plugins/simple-api-fetch/api-filter-chain/filter-presets';
import {FilterChain} from 'src/plugins/simple-api-fetch/api-filter-chain/filter-chain';

export default {
  get: <T = Response>(url: string, responseFilterChain: FilterChain<Response, any, T>, options?: ApiOptions<T>): Promise<T> => {
    const request: ApiRequestImpl<T> = new ApiRequestImpl<T>(url, 'GET', responseFilterChain, options)
    return request.fetch()
  },
  post: <T>(url: string, body: any, responseFilterChain: FilterChain<Response, any, T>, options?: ApiOptions<T>): Promise<T> => {
    const request: ApiRequestImpl<T> = new ApiRequestImpl<T>(url, 'POST', responseFilterChain, options, body)
    return request.fetch()
  },
  filters: filterChains
}
