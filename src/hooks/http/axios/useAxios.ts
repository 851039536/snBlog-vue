import qs from 'qs'
import { message } from 'ant-design-vue'
import router from '@/router/index'
import { useUiSetStore } from '@store/modules/uiSettings'
import { useStorage } from '@hooks/useStorage'
import { removePending, addPending } from './pending'
import { useUserInfo } from '@hooks/useUserInfo'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import axiosRetry from 'axios-retry'
const { removeUserStorage } = useUserInfo()
const { storage } = useStorage()
let uiSettings: any = ref()

export function useAxios() {
  // 全局配置
  const myAxiosUrl = import.meta.env.VITE_API_DOMAIN
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
  // 允许跨域
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
  function myAxios(axiosConfig: any, customOptions: any, loadings: any): Promise<AxiosResponse> {
    const { timeout = 8000 } = customOptions
    const service = axios.create({
      // 设置统一的请求前缀
      baseURL: myAxiosUrl,
      withCredentials: false,
      // 设置统一的超时时长
      timeout
    })

    // 是否开启/取消重复请求
    const cancel = {
      cancel_request: false,
      ...customOptions
    }

    // 是否开启loading
    const loading = {
      loading: loadings.loading
    }

    // 失败后，自动重新请求
    axiosRetry(service, {
      retries: 3, // 设置自动发送请求次数
      retryDelay: () => {
        return 300
      }, // 重新请求的间隔
      shouldResetTimeout: true //  重置超时时间
    })

    // 请求拦截器
    service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const { method, data, headers } = config
        removePending(config)
        cancel.cancel_request && addPending(config)

        if (['post', 'put', 'delete'].includes(method as string)) {
          config.data = qs.parse(data) //序列化
        }
        // 若是有做鉴权token , 就给头部带上token
        if (storage.get('token')) {
          if (headers) {
            headers.Authorization = storage.get('token') as string
          }
        }
        // 请求之前发送loading
        if (loading.loading) {
          uiSettings.uiLoadingVisible = true
        }
        return config
      },
      error => {
        message.error(error.data.error.message)
        return Promise.reject(error.data.error.message)
      }
    )
    // 响应拦截器
    service.interceptors.response.use(
      (res: AxiosResponse<any>) => {
        //挂载 不然报错
        uiSettings = useUiSetStore()
        // 在请求结束后，移除本次请求
        removePending(res)
        // 请求之后关闭loading
        if (loading.loading) {
          setTimeout(function () {
            uiSettings.uiLoadingVisible = false
          }, 500)
        }
        // 对响应数据进行处理，例如检查统一的字段（如 statusCode)
        if (res.status === 200 || res.data.statusCode === 200) {
          return Promise.resolve(res)
        }
        return Promise.reject(res)
      },
      error => {
        uiSettings.uiLoadingVisible = false

        const statusTextMap: Record<number, string> = {
          400: '发出的请求有错误，服务器没有进行新建或修改数据的操作',
          401: '登录失效，请重新登录',
          403: '用户得到授权，但是访问是被禁止的',
          404: '网络请求不存在',
          406: '请求的格式不可得',
          410: '请求的资源被永久删除，且不会再得到的',
          422: '当创建一个对象时，发生一个验证错误',
          500: '服务器发生错误，请检查服务器',
          502: '网关错误',
          503: '服务不可用，服务器暂时过载或维护',
          504: '网关超时'
        }

        if (error.response && error.response.status) {
          const statusText = statusTextMap[error.response.status] ?? '其他错误'
          message.error(`${statusText}(${error.response.status})`)
          if (error.response.status === 401) {
            removeUserStorage()
            router.replace({
              path: '/Login'
            })
          }
          return Promise.reject(error)
        }

        return Promise.reject(new Error('网络请求失败，请稍后重试'))
      }
    )
    return service(axiosConfig)
  }

  // 调用第三方
  // const thirdAxiosUrl = import.meta.env.VITE_API_DOMAIN
  function thirdAxios(axiosConfig: any, customOptions: any, loadings: any): Promise<AxiosResponse> {
    const { timeout = 8000 } = customOptions
    const service = axios.create({
      // 设置统一的请求前缀
      // baseURL: 'https://tenapi.cn/',
      withCredentials: false, // 默认的
      timeout // 设置统一的超时时长
    })

    const cancel = {
      cancel_request: false,
      ...customOptions
    }

    const loading = {
      loading: loadings.loading
    }
    axiosRetry(service, {
      retries: 3,
      retryDelay: () => {
        return 300
      },
      shouldResetTimeout: true
    })

    service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const { method, data } = config
        removePending(config)
        cancel.cancel_request && addPending(config)

        if (['post', 'put', 'delete'].includes(method as string)) {
          config.data = qs.parse(data)
        }
        if (loading.loading) {
          uiSettings.uiLoadingVisible = true
        }
        return config
      },
      error => {
        message.error(error.data.error.message)
        return Promise.reject(error.data.error.message)
      }
    )
    service.interceptors.response.use(
      (res: AxiosResponse<any>) => {
        uiSettings = useUiSetStore()
        removePending(res)
        if (loading.loading) {
          setTimeout(function () {
            uiSettings.uiLoadingVisible = false
          }, 500)
        }
        if (res.status === 200 || res.data.statusCode === 200) {
          return Promise.resolve(res)
        }
        return Promise.reject(res)
      },
      error => {
        uiSettings.uiLoadingVisible = false

        const statusTextMap: Record<number, string> = {
          400: '发出的请求有错误，服务器没有进行新建或修改数据的操作',
          401: '登录失效，请重新登录',
          403: '用户得到授权，但是访问是被禁止的',
          404: '网络请求不存在',
          406: '请求的格式不可得',
          410: '请求的资源被永久删除，且不会再得到的',
          422: '当创建一个对象时，发生一个验证错误',
          500: '服务器发生错误，请检查服务器',
          502: '网关错误',
          503: '服务不可用，服务器暂时过载或维护',
          504: '网关超时'
        }

        if (error.response && error.response.status) {
          const statusText = statusTextMap[error.response.status] ?? '其他错误'
          message.error(`${statusText}(${error.response.status})`)
          if (error.response.status === 401) {
            removeUserStorage()
            router.replace({
              path: '/Login'
            })
          }
          return Promise.reject(error)
        }

        return Promise.reject(new Error('网络请求失败，请稍后重试'))
      }
    )
    return service(axiosConfig)
  }
  return { myAxios, thirdAxios }
}
