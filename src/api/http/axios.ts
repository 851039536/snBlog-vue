// import axios from 'axios'
import qs from 'qs'
import { message } from 'ant-design-vue'
import router from '@/router/index'
import { loadingVisible } from '@/utils/common/IdentityData'
import { storage } from '../../utils/storage/storage'
import { removePending, addPending } from './pending'
import { removeUserStorage } from '@/utils/user/UserInfo'

const obj = reactive({
  urls: import.meta.env.VITE_API_DOMAIN
})
// 全局配置
axios.defaults.withCredentials = false
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 允许跨域
axios.defaults.headers.post['Access-Control-Allow-Origin-Type'] = '*'

function myAxios(axiosConfig: any, customOptions: any) {
  const service = axios.create({
    baseURL: obj.urls, // 设置统一的请求前缀
    timeout: 8000 // 设置统一的超时时长
  })

  // 是否开启取消重复请求
  const qiXiao = {
    qiXiao_cancel: false, // 是否开启取消重复请求, 默认为 false
    ...customOptions
  }
  // 请求拦截器
  service.interceptors.request.use(
    (req: any) => {
      removePending(req) // 在请求开始前，对之前的请求做检查取消操作
      // if (qiXiao.qiXiao_cancel) {
      //   addPending(req) // 将当前请求添加到 pending 中
      // }

      // eslint-disable-next-line no-unused-expressions
      qiXiao.qiXiao_cancel && addPending(req)
      if (['post', 'put', 'delete'].includes(req.method)) {
        req.data = qs.parse(req.data) //序列化
      }
      // 若是有做鉴权token , 就给头部带上token
      if (storage.get('token')) {
        req.headers.Authorization = storage.get('token') as string
      }
      // 请求之前发送loading
      loadingVisible.value = true

      return req
    },
    error => {
      message.error(error.data.error.message)
      return Promise.reject(error.data.error.message)
    }
  )
  // 响应拦截器
  service.interceptors.response.use(
    res => {
      removePending(res) // 在请求结束后，移除本次请求
      // 请求之后关闭loading
      // aspShow.value = false
      setTimeout(function () {
        loadingVisible.value = false
      }, 400)
      if (res.status === 200 || res.status === 204) {
        return Promise.resolve(res)
      }
      return Promise.reject(res)
    },
    (error: any) => {
      // console.log('%c [ error ]', 'font-size:13px; background:pink; color:#bf2c9f;', error)

      loadingVisible.value = false
      if (error.response.status) {
        switch (error.response.status) {
          case 400:
            message.error(`发出的请求有错误，服务器没有进行新建或修改数据的操作==>${error.response.status}`)
            break
          case 401: // 重定向
            message.error(`token:登录失效==>${error.response.status}:${'token'}`)
            removeUserStorage()
            router.replace({
              path: '/Login'
            })
            break
          case 403:
            message.error(`用户得到授权，但是访问是被禁止的==>${error.response.status}`)
            break
          case 404:
            message.error(`网络请求不存在==>${error.response.status}`)
            break
          case 406:
            message.error(`请求的格式不可得==>${error.response.status}`)
            break
          case 410:
            message.error(`请求的资源被永久删除，且不会再得到的==>${error.response.status}`)
            break
          case 422:
            message.error(`当创建一个对象时，发生一个验证错误==>${error.response.status}`)
            break
          case 500:
            message.error(`服务器发生错误，请检查服务器==>${error.response.status}`)
            break
          case 502:
            message.error(`网关错误==>${error.response.status}`)
            break
          case 503:
            message.error(`服务不可用，服务器暂时过载或维护==>${error.response.status}`)
            break
          case 504:
            message.error(`网关超时==>${error.response.status}`)
            break
          default:
            loadingVisible.value = false
            message.error(`其他错误错误==>${error.response.status}`)
        }
        return Promise.reject(error.response)
      }
      // store('changeNetwork', false)

      return true
    }
  )
  return service(axiosConfig)
}
export default myAxios
