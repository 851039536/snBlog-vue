// uno.config.ts
import {
  defineConfig,
  presetAttributify, // Unocss 属性模式预设
  presetIcons,
  presetTypography,
  presetUno, // Unocss 默认预设
  presetWebFonts, //网页字体预设
  transformerDirectives, // Unocss 指令转换插件
  transformerVariantGroup, //unocss-preset-scrollbar变体
  presetWind //  Tailwind / Windi CSS 紧凑预设
} from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar' //滚动条
export default defineConfig({
  shortcuts: [
    // ...
  ],
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
    })
  ],
  //静态规则
  rules: [['m-1', { margin: '0.25rem' }]],
  // 指令转换插件
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
