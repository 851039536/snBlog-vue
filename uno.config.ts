// uno.config.ts
import {
  defineConfig,
  presetAttributify, //属性模式预设
  presetIcons,
  presetTypography,
  presetUno, //默认预设
  presetWebFonts, //网页字体预设
  transformerDirectives, //指令转换插件
  transformerVariantGroup, //变体
  presetWind //  Tailwind  紧凑预设
} from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar' //滚动条
import presetChinese from 'unocss-preset-chinese'
import { presetOnu } from 'onu-ui'
export default defineConfig({
  shortcuts: {
    'wh-full': 'w-full h-full'
  },
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    }),
    presetWind(),
    presetScrollbar({
      // config
    }),
    presetChinese({
      chineseType: 'simplified' // 指定文本为简体中文
    }),
    presetOnu()
  ],
  //静态规则
  rules: [['m-1', { margin: '0.25rem' }]],
  // 指令转换插件
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
