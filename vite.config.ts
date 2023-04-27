import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite' // 针对 Vue 的按需组件自动导入
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'
// import { VitePWA } from 'vite-plugin-pwa'
// import WindiCSS from 'vite-plugin-windicss'
import viteCompression from 'vite-plugin-compression' // 打包压缩
import { injectHtml } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import styleImport, { AndDesignVueResolve } from 'vite-plugin-style-import'
import { ViteTips } from 'vite-plugin-tips'
import svgLoader from 'vite-svg-loader'
// Unocss 插件
import Unocss from 'unocss/vite'
// Unocss 默认预设
import presetUno from '@unocss/preset-uno'
// Unocss 属性模式预设
import presetAttributify from '@unocss/preset-attributify'
// Unocss 指令转换插件
import transformerDirective from '@unocss/transformer-directives'
// import presetRemToPx from '@unocss/preset-rem-to-px'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetIcons from '@unocss/preset-icons'
import { visualizer } from 'rollup-plugin-visualizer'
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true //主要是这个开启，ref
    }),
    svgLoader(),
    ViteTips(), // 服务器状态提示
    // VitePWA(),
    tsconfigPaths(),
    injectHtml({
      injectData: {
        title: 'SN BLOG'
      }
    }),
    visualizer({
      open: true, //注意这里要设置为true，否则无效
      gzipSize: true,
      brotliSize: true
    }),
    // 新增一个 Unocss 插件配置
    Unocss({
      // 预设
      presets: [
        presetUno(),
        presetAttributify(),
        // presetRemToPx(),
        presetIcons(),
        presetWebFonts({
          provider: 'fontshare', // default provider
          fonts: {
            // these will extend the default theme
            sans: 'Roboto',
            mono: ['Fira Code', 'Fira Mono:400,700'],
            // custom ones
            lobster: 'Lobster',
            lato: [
              {
                name: 'Lato',
                weights: ['400', '700'],
                italic: true
              },
              {
                name: 'sans-serif',
                provider: 'none'
              }
            ]
          }
        })
      ],
      // 指令转换插件
      transformers: [transformerDirective()],
      // 自定义规则
      rules: [
        [
          /^text-(.*)$/,
          ([, c], { theme }) => {
            if (theme.colors[c]) return { color: theme.colors[c] }
          }
        ]
      ],
      // 快速创建可复用的组件和工具类。
      shortcuts: {
        's-side': 'h-[92%] top-[8.4%] right-[11%] w-[17%] fixed',
        's-hw': 'h-full w-full'
      },
      theme: {
        colors: {
          veryCool: '#0000ff', // class="text-very-cool"
          brand: {
            primary: '#1f6ae3' //class="bg-brand-primary"
          }
        }
      }
    }),
    AutoImport({
      // 自动导入vue3的hooks
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
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
      // 针对 Vue 的按需组件自动导入
      dts: true, // ts支持
      dirs: ['src/components', 'src/views'], // 自定义路径按需导入
      resolvers: [AntDesignVueResolver()] // antd直接使用组件,无需在任何地方导入组件
    }),
    styleImport({
      resolves: [AndDesignVueResolve()]
    }),
    // WindiCSS(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true, // 是否在控制台输出压缩结果
      disable: false, // 是否禁用
      threshold: 10240, // 体积大于 threshold 才会被压缩,单位 b
      algorithm: 'gzip', // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
      ext: '.gz' // 生成的压缩包后缀
    }),
    eslintPlugin({
      cache: false, // 关闭缓存
      include: ['src/**/*.vue', 'src/**/*.ts'] // 检查的文件
    })
  ],
  resolve: {
    // 配置别名
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.node', '.scss'],
    alias: {
      '@': resolve('./src'),
      '@comp': resolve('./src/components'),
      '@vi': resolve('./src/views'),
      '@api': resolve('./src/api'),
      '@h': resolve('./src/hooks'),
      '@assets': resolve('./src/assets')
    }
  },
  base: '/', // 设置打包路径
  server: {
    // 本地运行配置，及反向代理配置
    port: 4001, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    cors: true // 允许跨域,默认启用并允许任何源
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8088/',
    //     changeOrigin: true,
    //     rewrite: path => {
    //       return path.replace(/^\/api/, '')
    //     }
    //   }
    // }
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: true, // 避免出现: build时的 @charset 必须在第一行的警告
        additionalData: '@import "./src/design/common.scss";' // 添加公共样式
      },
      less: {
        javascriptEnabled: true
      }
    }
  },
  build: {
    target: 'es2015', // 支持es6文件
    // 打包配置
    minify: 'terser', // esbuild  terser
    terserOptions: {
      compress: {
        // 打包后移除console和注释
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
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks: {
          // 拆分代码，这个就是分包，配置完后自动按需加载
          vue: ['vue', 'vue-router']
        }
      }
    }
  }
})
