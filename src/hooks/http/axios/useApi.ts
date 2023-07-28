import { AxiosRequestConfig } from 'axios'
import { useAxios } from '@hooksHttp/axios/useAxios'
const { myAxios } = useAxios()
export function useApi() {
  /**
   * 定义常用枚举
   */
  enum REQUEST_METHODS {
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
   * get请求
   * @param url 请求 path
   * @param params  请求 query params
   * @param loading  请求 loading
   * @returns  Promise
   */
  async function get(url: string, params?: any, loading?: boolean) {
    const ret = await myAxios(
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
    return ret
  }

  function gets<T = any>(config: AxiosRequestConfig) {
    return myAxios(config, false, true).then(res => {
      return (res.data.data || res.data) as T
    })
  }

  /**
   * post 请求
   * @param url 请求 path
   * @param data 请求 body params
   * @param loading
   */
  function add(url: string, data: any, loading?: boolean) {
    return myAxios(
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

  function pot(url: string, loading?: boolean) {
    return myAxios(
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
   * put 请求
   * @param url 请求 path
   * @param data 请求 body params
   * @param loading
   */
  function update(url: string, data: any, loading?: boolean) {
    return myAxios(
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

  function upPost(url: string, data: any, loading?: boolean) {
    return myAxios(
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
  function del(url: string, data?: any, loading?: boolean) {
    return myAxios(
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

  return { del, upPost, update, pot, add, gets, get }
}
