import deepmerger from "@fastify/deepmerge"

import { PlusAuthRestError } from "./error.js"
import { fetchPn } from "./utils/fetch_wrapper.js"

const deepmerge = deepmerger()

/**
 * @internal
 */
async function parseFetchResponse(response: Response, options: CustomRequestOptions): Promise<any> {
  const contentType = response.headers.get("content-type")
  if (options.responseType === "stream" && response.ok) {
    return response.body?.getReader()
  }
  if (options.responseType === "json" || (contentType && contentType.indexOf("application/json") > -1)) {
    return await response.json()
  }
  return await response.text()
}

function wrapInError(reject: (...args: any) => void) {
  return (err: Error): void => {
    reject(new PlusAuthRestError(err))
  }
}

/**
 * @internal
 */
async function fetchAsPromise(url: string, options: CustomRequestOptions): Promise<any> {
  const rawResponse: Response = await fetchPn(url, options).catch((err) => {
    return Promise.reject(new PlusAuthRestError(err))
  })
  const clone = rawResponse.clone()
  if (rawResponse.ok) {
    return await parseFetchResponse(clone, options)
  }
  if (rawResponse.status === 400) {
    const parsedErr = await parseFetchResponse(clone, options)
    if (parsedErr?.error === "xhr_request" && parsedErr.location) {
      window?.location?.replace(parsedErr.location)
      return false
    }
    throw new PlusAuthRestError(parsedErr)
  }
  throw new PlusAuthRestError(await parseFetchResponse(clone, options))
}

/**
 * @public
 */
export type CustomRequestOptions = RequestInit & { responseType?: "stream" | "json" }

/**
 * @public
 */
export type BodyType = Record<string, any> | string

/**
 * @public
 */
export interface HttpClient {
  get: (uri: string, options?: CustomRequestOptions) => Promise<any>
  post: (uri: string, body?: BodyType | null, options?: CustomRequestOptions) => Promise<any>
  patch: (uri: string, body?: BodyType | null, options?: CustomRequestOptions) => Promise<any>
  delete: (uri: string, body?: BodyType | null, options?: CustomRequestOptions) => Promise<any>
}

/**
 * @public
 */
export class HttpService {
  protected http: HttpClient

  protected static prefix = ""

  private _baseUrl: string;

  declare ["constructor"]: typeof HttpService

  constructor(apiURL: string, options: Record<string, any> = {}) {
    if (!apiURL) {
      throw new Error("'apiURL' must be provided")
    }
    try {
      new URL(apiURL)
    } catch {
      throw new Error("'apiUrl' must be a valid uri")
    }

    if (typeof options !== "object") {
      throw new Error("'options' must be an object")
    }

    if (options.httpClient && typeof options.httpClient !== "function") {
      throw new Error('"httpClient" must be function')
    }
    const finalUri = apiURL + (/\/api\/v\d(\/)?$/.test(apiURL) ? "" : `${apiURL.endsWith("/") ? "" : "/"}api/v1`)

    const _baseUrl = finalUri + this.constructor.prefix

    const httpClient = options.httpClient || fetchAsPromise
    const http: any = {}
    for (const method of ["get", "post", "patch", "delete"]) {
      http[method] = (...args: any[]): Promise<any> => {
        let token
        if (options && typeof options.token === "function") {
          token = options.token.call(undefined)
        } else {
          token = options.token
        }
        let fetchOptions: RequestInit = {
          method: method.toUpperCase(),
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...(options.version ? { "X-PlusAuth-Version": options.version } : {})
          }
        }
        if (args.length > 1) {
          if (method !== "get") {
            fetchOptions.body = typeof args[1] === "object" ? JSON.stringify(args[1]) : args[1]
          }
        }
        if (!!args[2] && typeof args[2] === "object") {
          fetchOptions = deepmerge(fetchOptions, args[2])
        }
        return httpClient.call(null, _baseUrl + args[0], fetchOptions)
      }
    }

    this._baseUrl = _baseUrl
    this.http = http
  }

  get baseUrl(): string {
    return this._baseUrl
  }
}
