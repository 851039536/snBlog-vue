import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'
import { VitePWA } from 'vite-plugin-pwa'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA(),
    Components({
      dts: true, // ts支持
      dirs: ['src/components', 'src/views'], // 自定义路径按需导入
      resolvers: [AntDesignVueResolver()] // antd直接使用组件,无需在任何地方导入组件
    }),
    WindiCSS(),
    eslintPlugin()
  ],
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.node', '.scss'],
    alias: {
      '@': resolve('./src'),
      '@vi': resolve('./src/views'),
      '@api': resolve('./src/api'),
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
      // less: {},
      scss: {
        // 避免出现: build时的 @charset 必须在第一行的警告
        charset: false,
        additionalData: '@import "./src/design/methodCss.scss";'
      }
    }
  },
  build: {
    terserOptions: {
      // 打包后移除console和注释
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
