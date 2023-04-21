/**
 * 文章接口
 * 定义了名为 `IArticleTag` 的接口，这个接口有3个属性：`id`、`name` 和 `description`。每个属性都指定了其对应的类型（数字类型和字符串类型）。
 */
export interface IArticleTag {
  id: number
  name: string
  description: string
}

/**
 * 文章属性
 * vue3 特有的 `reactive()` 方法将一个新的对象赋给一个常量 `articleTagForm`。该对象是以 `IArticleTag` 接口的形式定义的，并具有相同的属性名及默认值。由于使用 `reactive()` 方法并返回一个响应式对象，因此更改该对象的属性时，如在其他部分的组件中使用该对象或在.vue文件中绑定对象中的属性，这些修改将始终保持同步可见
 */
export const articleTagForm: IArticleTag = reactive({
  id: 0,
  name: '',
  description: ''
})

// export const clearArticleTag = (): void => {
//   articleTagForm.id = 0
//   articleTagForm.name = ''
//   articleTagForm.description = ''
// }

/**
 * 定义箭头函数 clearArticleTag()，将 articleTagForm 变量的3个属性设置为空字符串或零，从而帮助我们清除引用的对象中存储的数据。
 */
export const clearArticleTag = (): void => {
  Object.assign(articleTagForm, { id: 0, name: '', description: '' })
}
