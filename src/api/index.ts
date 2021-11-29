/*
 * @Author: your name
 * @Date: 2021-05-10 14:41:22
 * @LastEditTime: 2021-11-18 14:27:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\index.ts
 */
import request from '@/utils/http/axios'
import { article } from './http/article'
import { labels } from './http/labels'
import { sort } from './http/sort'
import { usertalk } from './http/usertalk'
import { setBlog } from './http/setBlog'
import { leave } from './http/leave'
import { navigation } from './http/navigation'
import { one } from './http/one'
import { video } from './http/video'
import { user } from './http/user'
import { listContent } from './http/listContent'
import { interfaces } from './http/interfaces'

/**
 * @description: 空函数查token权限
 * @param {*}
 * @return {*}
 */
async function TOKEN() {
  return request({
    url: '/api/AngleSharp/TOKEN',
    method: 'get'
  })
}

export { article, labels, sort, usertalk, setBlog, leave, navigation, one, video, user, listContent, TOKEN, interfaces }
