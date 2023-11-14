export interface SnippetTag {
  id: number
  name: string
}

export const snippetTag: SnippetTag = reactive({
  id: 0,
  name: ''
})

export const removeSnippetTag = () => {
  snippetTag.id = 0
  snippetTag.name = ''
}
