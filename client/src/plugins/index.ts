/*
 * @Author: David
 * @Date: 2021-04-15 17:32:40
 * @LastEditTime: 2021-09-13 17:21:43
 * @LastEditors: David
 * @Description: 对所有对plugin 抛出
 * @FilePath: /client/src/plugins/index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */

import { router } from './router'
import { store, key } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './socket'
import utils from './utils'
import { App } from 'vue'

// const plugins = [router, { store, key }]

export default {
  install(vue: App) {
    // plugins.forEach((plugin) => {
    //   let pluginProperties = Object.keys(plugin)
    //   console.log(pluginProperties, plugin)
    // })
    vue.config.globalProperties.$utils = utils
    vue.use(router)
    vue.use(store, key)
    vue.use(ElementPlus)
  },
}
