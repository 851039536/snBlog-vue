// uno.config.ts
import {
  defineConfig,
  presetAttributify, //属性模式预设
  presetIcons,
  presetTypography,
  presetUno, //默认预设
  transformerDirectives, //指令转换插件
  transformerVariantGroup //变体
} from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar' //滚动条
import presetChinese from 'unocss-preset-chinese'
export default defineConfig({
  shortcuts: {
    'wh-full': 'w-full h-full'
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetScrollbar({
      // config
    }),
    presetChinese({
      chineseType: 'simplified' // 指定文本为简体中文
    })
  ],
  // 指令转换插件
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
