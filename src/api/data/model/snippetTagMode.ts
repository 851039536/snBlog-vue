export interface ISnippetTag {
  id: number
  name: string
}

export const snippetTagForm: ISnippetTag = reactive({
  id: 0,
  name: ''
})

export const clearSnippetTag = () => {
  snippetTagForm.id = 0
  snippetTagForm.name = ''
}
// const state = reactive(clearArticle)
// const resetState = () => {
//   Object.assign(state, clearArticle())
// }
