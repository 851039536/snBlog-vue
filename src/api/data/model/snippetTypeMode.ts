export interface ISnippetType {
  id: number
  name: string
}

export const snippetTypeForm: ISnippetType = reactive({
  id: 0,
  name: ''
})

export const clearSnippetType = () => {
  snippetTypeForm.id = 0
  snippetTypeForm.name = ''
}
// const state = reactive(clearArticle)
// const resetState = () => {
//   Object.assign(state, clearArticle())
// }
