export interface SnippetLabel {
  id: number
  name: string
}

export const snippetLabelForm: SnippetLabel = reactive({
  id: 0,
  name: ''
})

export const clearSnippetLabel = () => {
  snippetLabelForm.id = 0
  snippetLabelForm.name = ''
}
