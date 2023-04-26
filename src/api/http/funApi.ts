import { AxiosRequestConfig } from 'axios'
import request from '@/api/http/axios'

/**
 * reqeust method types
 */
export enum REQUEST_METHODS {
  GET = 'GET',
  PUT = 'PUT',
  UPDATE = 'PUT',
  UPPOST = 'POST',
  POST = 'POST',
  ADD = 'POST',
  DELETE = 'DELETE',
  REMOVE = 'DELETE'
}

/**
 * get request
 * @param url request path
 * @param params query params?
 */
export async function get(url: string, params?: any) {
  const result = await request(
    {
      url,
      method: REQUEST_METHODS.GET,
      params
    },
    {
      qiXiao_cancel: false
    }
  )
  return result
}

export function gets<T = any>(config: AxiosRequestConfig) {
  return request(config, false).then(res => {
    return (res.data.data || res.data) as T
  })
}

/**
 * post request
 * @param url request path
 * @param data request body params
 */
export function add(url: string, data: any) {
  return request(
    {
      url,
      method: REQUEST_METHODS.ADD,
      data
    },
    {
      qiXiao_cancel: false
    }
  )
}

export function pot(url: string) {
  return request(
    {
      url,
      method: REQUEST_METHODS.POST
    },
    {
      qiXiao_cancel: false
    }
  )
}

/**
 * put request
 * @param url request path
 * @param data request body params
 */
export function update(url: string, data: any) {
  return request(
    {
      url,
      method: REQUEST_METHODS.UPDATE,
      data
    },
    {
      qiXiao_cancel: false
    }
  )
}

export function uppost(url: string, data: any) {
  return request(
    {
      url,
      method: REQUEST_METHODS.UPPOST,
      data
    },
    {
      qiXiao_cancel: false
    }
  )
}

/**
 * delete request
 * @param url request path
 * @param data request body params
 */
export function del(url: string, data?: any) {
  return request(
    {
      url,
      method: REQUEST_METHODS.DELETE,
      data
    },
    {
      qiXiao_cancel: false
    }
  )
}
