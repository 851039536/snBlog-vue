import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'
import checker from 'vite-plugin-checker'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    checker({
      typescript: true,
      eslint: {
        files: ['./src'],
        extensions: ['.ts']
      }
    }),
    VitePWA(),
    Components({
      dts: true, // ts支持
      dirs: ['src/components', 'src/views'], // 自定义路径按需导入
      resolvers: [AntDesignVueResolver()] // antd直接使用组件,无需在任何地方导入组件
    })
  ],
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.node', '.scss'],
    alias: {
      '@': resolve('./src'),
      '@vi': resolve('./src/views'),
      '@h': resolve('./src/hooks')
    }
  },
  base: '/', // 设置打包路径
  server: {
    port: 4001, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 更改主题在这里
          'primary-color': '#52c41a',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      },
      scss: {
        // 避免出现: build时的 @charset 必须在第一行的警告
        charset: false,
        additionalData: '@import "./src/design/methodCss.scss";'
      }
    }
  }
})
