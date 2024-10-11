import apiFetch from 'src/plugins/api-helper/api-fetch';
import {ApiOptions} from 'src/plugins/api-helper/api-options';
import apiHandleResponse from 'src/plugins/api-helper/api-response';

export default {
  get: async (url: string, options?: ApiOptions): Promise<string> => {
    const response = await apiFetch(url, 'GET', options)
    return await apiHandleResponse(response, options)
  },
  post: async (url: string, body: any, options?: ApiOptions): Promise<string> => {
    const response = await apiFetch(url, 'POST', options, body)
    return await apiHandleResponse(response, options)
  }
}
