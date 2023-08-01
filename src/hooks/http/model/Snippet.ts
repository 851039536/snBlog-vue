export interface Snippet {
  id: number
  name: string
  text: string
  typeId: number
  tagId: number
  userId: number
  labelId: number
  label?: Label
  tag?: Label
  type?: Label
  user?: User
}

export interface Label {
  id: number
  name: string
}

export interface User {
  id: number
  name: string
  nickname: string
}

export const snippet: Snippet = reactive({
  id: 0,
  name: '',
  text: '',
  typeId: 1,
  tagId: 1,
  userId: 0,
  labelId: 0
})

export const removeSnippet = () => {
  snippet.id = 0
  snippet.name = ''
  snippet.text = ''
  snippet.typeId = 0
  snippet.userId = 0
  snippet.tagId = 0
  snippet.labelId = 0
}
