import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite' // 针对 Vue 的按需组件自动导入
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'
// import { VitePWA } from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression' // 打包压缩
import { injectHtml } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import styleImport, { AndDesignVueResolve } from 'vite-plugin-style-import'
import { ViteTips } from 'vite-plugin-tips'
import svgLoader from 'vite-svg-loader'
// Unocss 插件
import Unocss from 'unocss/vite'
import { visualizer } from 'rollup-plugin-visualizer'
export default defineConfig({
  //配置需要使用的插件列表
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
    Unocss(),
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
  //静态资源服务的文件夹
  publicDir: 'public',
  base: '/',
  //静态资源处理
  assetsInclude: '',
  //控制台输出的级别 info 、warn、error、silent
  logLevel: 'info',
  // 设为false 可以避免 vite 清屏而错过在终端中打印某些关键信息
  clearScreen: true,

  resolve: {
    // 导入时想要省略的扩展名列表
    // 不建议使用 .vue 影响IDE和类型支持
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.node', '.scss'],
    // 情景导出 package.json 配置中的exports字段
    conditions: [],
    // 配置别名
    alias: {
      '@': resolve('./src'),
      '@comp': resolve('./src/components'),
      '@vi': resolve('./src/views'),
      '@api': resolve('./src/api'),
      '@h': resolve('./src/hooks'),
      '@assets': resolve('./src/assets')
    }
  },

  // 本地运行配置，及反向代理配置
  server: {
    https: false, //是否启用 http 2
    host: 'localhost',
    port: 4001, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域,默认启用并允许任何源
    strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
    // force: true, //是否强制依赖预构建
    hmr: false, //禁用或配置 HMR 连接
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8088/',
    //     changeOrigin: true,
    //     rewrite: path => {
    //       return path.replace(/^\/api/, '')
    //     }
    //   }
    // }
    //传递给 chokidar 的文件系统监听器选项。
    watch: {
      //Vite 服务器默认会忽略对 .git/ 和 node_modules/ 目录的监听
      // ignored: ['!**/node_modules/your-package-name/**']
    }
  },
  //强制预构建插件包
  optimizeDeps: {
    force: true, // true 可以强制依赖预构建，而忽略之前已经缓存过的、已经优化过的依赖。
    //检测需要预构建的依赖项
    entries: [],
    // 默认情况下，不在 node_modules 中的，链接的包不会预构建
    include: ['axios', 'pinia', 'ant-design-vue', '@kangc/v-md-editor'],
    //排除 被监听的包必须被排除在优化之外，以便它能出现在依赖关系图中并触发热更新。
    exclude: ['xxx']
  },
  // 传递给 chockidar 的文件系统监视器选项

  css: {
    // 配置 css modules 的行为
    modules: {},
    //指定传递给 css 预处理器的选项
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
  json: {
    //是否支持从 .json 文件中进行按名导入
    namedExports: true,
    //若设置为 true 导入的json会被转为 export default JSON.parse("..") 会比转译成对象字面量性能更好
    stringify: false
  },
  //打包配置
  build: {
    //浏览器兼容性  "esnext"|"modules" 默认为 'esnext'
    target: 'esnext', // 支持es6文件
    //指定输出路径 默认为 'dist'
    outDir: 'dist',
    //  // boolean | 'terser' | 'esbuild'
    minify: 'terser', //terser 构建后文件体积更小
    //生成静态资源的存放路径 默认为 ''
    assetsDir: 'assets',
    //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
    assetsInlineLimit: 8 * 1024, //如果静态资源体积 >= 4KB，则提取成单独的文件 如果静态资源体积 < 4KB，则作为 base64 格式的字符串内联
    //启用/禁用 CSS 代码拆分
    cssCodeSplit: true,
    //构建后是否生成 source map 文件 默认为 false
    sourcemap: false,
    //@rollup/plugin-commonjs 插件的选项
    commonjsOptions: {},
    // //传递给 Terser 的更多 minify 选项。
    terserOptions: {
      compress: {
        // 打包后移除console和注释
        drop_console: true,
        drop_debugger: true
      }
    },
    //设置为 false 来禁用将构建后的文件写入磁盘
    write: true,
    //当设置为 true，构建后将会生成 manifest.json 文件
    manifest: false,
    //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    emptyOutDir: true,
    //chunk 大小警告的限制
    chunkSizeWarningLimit: 500,
    // 拆分打包的配置方法
    //自定义底层的 Rollup 打包配置
    rollupOptions: {
      input: 'index.html', // 构建入口文件，默认为 'index.html'
      // 输出选项
      output: {
        format: 'esm', // 输出格式，默认为 'esm'
        chunkFileNames: 'static/js/[name]-[hash].js', // 代码分块文件名称，默认为 'chunk-[hash].js'
        entryFileNames: 'static/js/[name]-[hash].js', //入口文件名称，默认为 '[name].[hash].js'
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]', // 静态资源文件名称，默认为 '[name].[hash].[ext]'
        inlineDynamicImports: false, // 是否内联动态导入，默认为 false
        manualChunks: id => {
          // console.log('[ id ]-138', id)
          if (id.includes('node_modules')) {
            return 'vendor' //代码分割为第三方包
          }
          // if (id.includes('views/modules')) {
          //   return 'views-modules' //代码分割为业务视图
          // }
          // if (id.includes('views/common')) {
          //   return 'views-common' //代码分割为common页面登录页
          // }
        }
      }
    }
  }
})
