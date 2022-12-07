export interface ISnippetLabel {
  id: number
  name: string
}

export const snippetLabelForm: ISnippetLabel = reactive({
  id: 0,
  name: ''
})

export const clearSnippetLabel = () => {
  snippetLabelForm.id = 0
  snippetLabelForm.name = ''
}
// const state = reactive(clearArticle)
// const resetState = () => {
//   Object.assign(state, clearArticle())
// }
