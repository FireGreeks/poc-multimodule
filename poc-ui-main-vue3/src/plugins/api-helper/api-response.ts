import {ApiOptions} from 'src/plugins/api-helper/api-options';

export default function apiHandleResponse(response: Response, options: ApiOptions | undefined): Promise<string> {
  if (options?.responseType === 'PLAIN') return response.text()
  else return response.json()
}
