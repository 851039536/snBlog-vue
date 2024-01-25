import { AxiosRequestConfig } from 'axios'
import request from '@/api_core/http/axios'

/**
 * request method types
 */
export enum REQUEST_METHODS {
  GET = 'GET',
  PUT = 'PUT',
  UPDATE = 'PUT',
  upPost = 'POST',
  POST = 'POST',
  ADD = 'POST',
  DELETE = 'DELETE',
  REMOVE = 'DELETE'
}

/**
 * get request
 * @param url request path
 * @param params  request query params
 * @param loading  request loading
 * @returns  Promise
 */
export async function get(url: string, params?: any, loading?: boolean) {
  const result = await request(
    {
      url,
      method: REQUEST_METHODS.GET,
      params
    },
    {
      cancel_request: false
    },
    {
      loading
    }
  )
  return result
}

export function gets<T = any>(config: AxiosRequestConfig) {
  return request(config, false, true).then(res => {
    return (res.data.data || res.data) as T
  })
}

/**
 * post request
 * @param url request path
 * @param data request body params
 * @param loading
 */
export function add(url: string, data: any, loading?: boolean) {
  return request(
    {
      url,
      method: REQUEST_METHODS.ADD,
      data
    },
    {
      cancel_request: false
    },
    {
      loading
    }
  )
}

export function pot(url: string, loading?: boolean) {
  return request(
    {
      url,
      method: REQUEST_METHODS.POST
    },
    {
      cancel_request: false
    },
    {
      loading
    }
  )
}

/**
 * put request
 * @param url request path
 * @param data request body params
 * @param loading
 */
export function update(url: string, data: any, loading?: boolean) {
  return request(
    {
      url,
      method: REQUEST_METHODS.UPDATE,
      data
    },
    {
      cancel_request: false
    },
    {
      loading
    }
  )
}

export function upPost(url: string, data: any, loading?: boolean) {
  return request(
    {
      url,
      method: REQUEST_METHODS.upPost,
      data
    },
    {
      cancel_request: false
    },
    {
      loading
    }
  )
}

/**
 * delete request
 * @param url request path
 * @param data request body params
 * @param loading
 */
export function del(url: string, data?: any, loading?: boolean) {
  return request(
    {
      url,
      method: REQUEST_METHODS.DELETE,
      data
    },
    {
      cancel_request: false
    },
    {
      loading
    }
  )
}
