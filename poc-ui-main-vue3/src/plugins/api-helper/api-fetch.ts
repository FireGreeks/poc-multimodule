import {ApiOptions, FetchMethod} from 'src/plugins/api-helper/api-options';

export default async function apiFetch(url: string, method: FetchMethod, options?: ApiOptions, content?: string | any): Promise<Response> {
  const body = (!content || options?.bodyContentType === 'PLAIN') ? content : JSON.stringify(content)
  const contentType = options?.bodyContentType === 'PLAIN' ? 'text/plain' : 'application/json'

  return await fetch('/api/' + url, {
    ...{
      method: method,
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': contentType,
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: body
    },
    ...options?.fetchOptions
  }
)
}
