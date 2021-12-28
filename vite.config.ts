import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'
import { VitePWA } from 'vite-plugin-pwa'
import WindiCSS from 'vite-plugin-windicss'
import viteCompression from 'vite-plugin-compression'
import { injectHtml } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import styleImport, { AndDesignVueResolve } from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA(),

    tsconfigPaths(),
    injectHtml({
      injectData: {
        title: '少年的博客!'
      }
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        {
          axios: [
            ['default', 'axios'] // import { default as axios } from 'axios',
          ]
        }
      ],
      // 可以在这自定义自己的东西，比如接口api的引入，工具函数等等
      // see https://github.com/antfu/unplugin-auto-import/pull/23/
      resolvers: [
        /* ... */
      ]
    }),
    Components({
      dts: true, // ts支持
      dirs: ['src/components', 'src/views'], // 自定义路径按需导入
      resolvers: [AntDesignVueResolver()] // antd直接使用组件,无需在任何地方导入组件
    }),
    styleImport({
      resolves: [AndDesignVueResolve()]
    }),
    WindiCSS(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),
    eslintPlugin({
      cache: false // 关闭缓存
    })
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
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 避免出现: build时的 @charset 必须在第一行的警告
        charset: true,
        additionalData: '@import "./src/design/methodCss.scss";'
      },
      less: {
        javascriptEnabled: true
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
    },
    // 拆分打包的配置方法
    assetsDir: 'static/img/',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
