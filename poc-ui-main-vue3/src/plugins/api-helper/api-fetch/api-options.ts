import {FilterChain} from 'src/plugins/api-helper/api-filter-chain/filter-chain';
import {ApiRequest, RequestState} from 'src/plugins/api-helper/api-fetch/api-request-types';

export type ApiOptions<T> = {
  fetchOptions?: RequestInit,
  updateInterval?: number,
  bodyPreprocessing?: FilterChain<string, any, string>,
  callbacks?: {
    onstart?: (r: Readonly<ApiRequest<T>>) => void,
    onerror?: (r: Readonly<ApiRequest<T>>, error: any) => void,
    onstatechange?: (r: Readonly<ApiRequest<T>>, state: RequestState) => void,
    onfilterstep?: (r: Readonly<ApiRequest<T>>, i?: number, percent?: number) => void,
    onupdate?: (r: Readonly<ApiRequest<T>>, elapsedTime: number) => void
  }
}
