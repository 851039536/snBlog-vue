import { AxiosRequestConfig } from 'axios'
import { useAxios } from '@hooksHttp/axios/useAxios'

const { thirdAxios } = useAxios()
export function useThirdRequest() {
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
   * get request
   * @param url request path
   * @param params  request query params
   * @param loading  request loading
   * @returns  Promise
   */
  function get(url: string, params?: any, loading?: boolean) {
    return thirdAxios(
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
  }

  function gets<T = any>(config: AxiosRequestConfig): Promise<T> {
    return thirdAxios(config, false, true).then(res => {
      return (res.data.data || res.data) as T
    })
  }

  /**
   * post request
   * @param url request path
   * @param data request body params
   * @param loading
   */
  function add(url: string, data: any, loading?: boolean) {
    return thirdAxios(
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
    return thirdAxios(
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
  function update(url: string, data: any, loading?: boolean) {
    return thirdAxios(
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
    return thirdAxios(
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
    return thirdAxios(
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
