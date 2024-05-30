import qs from 'qs'
import { message } from 'ant-design-vue'
import router from '@/router/index'
import { uiSettings } from '@store/modules/uiSettings'
import { useStorage } from '@hooks/useStorage'
import { removePending, addPending } from './pending'
import { useUserInfo } from '@hooks/useUserInfo'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import axiosRetry from 'axios-retry'
const { removeUserStorage } = useUserInfo()
const { storage } = useStorage()
let ui: any = ref()

export function useAxios() {
  // 允许跨域
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
  function myAxios(axiosConfig: any, customOptions: any, load: any = false): Promise<AxiosResponse> {
    const service = axios.create({
      baseURL: import.meta.env.VITE_API_DOMAIN,
      withCredentials: false,
      timeout: 10 * 1000, // 请求超时时间
      headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    })

    // 是否开启/取消重复请求
    const cancel = {
      cancel_request: false,
      ...customOptions
    }

    // 是否开启loading
    const loadings = {
      loading: load.loading
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
    // 这里可以设置token: config!.headers!.Authorization = token
    service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 请求之前发送loading
        if (loadings.loading) {
          ui.value.loading = true
        }
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

        return config
      },
      error => {
        message.error(error.data.error.message)
        return Promise.reject(error.data.error.message)
      }
    )
    // 响应拦截器
    service.interceptors.response.use(
      (ret: AxiosResponse<any>) => {
        //挂载 不然报错
        ui.value = uiSettings()
        // 在请求结束后，移除本次请求
        removePending(ret)
        if (loadings.loading) {
          setTimeout(function () {
            ui.value.loading = false
          }, 300)
        }
        // 对响应数据进行处理，例如检查统一的字段（如 statusCode)
        if (ret.status === 200 || ret.data.statusCode === 200) {
          return Promise.resolve(ret)
        }
        return Promise.reject(ret)
      },
      error => {
        ui.value.loading = false

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
    const service = axios.create({
      // 设置统一的请求前缀
      // baseURL: 'https://tenapi.cn/',
      withCredentials: false, // 默认的
      timeout: 10 * 1000, // 请求超时时间
      headers: { 'Content-Type': 'application/json;charset=UTF-8' }
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
        if (loading.loading) {
          ui.value.loading = true
        }
        const { method, data } = config
        removePending(config)
        cancel.cancel_request && addPending(config)

        if (['post', 'put', 'delete'].includes(method as string)) {
          config.data = qs.parse(data)
        }

        return config
      },
      error => {
        message.error(error.data.error.message)
        return Promise.reject(error.data.error.message)
      }
    )
    service.interceptors.response.use(
      (ret: AxiosResponse<any>) => {
        ui.value = uiSettings()
        removePending(ret)
        if (loading.loading) {
          setTimeout(function () {
            ui.value.loading = false
          }, 500)
        }
        if (ret.status === 200 || ret.data.statusCode === 200) {
          return Promise.resolve(ret)
        }
        return Promise.reject(ret)
      },
      error => {
        ui.value.loading = false

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
