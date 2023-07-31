export interface ISnippet {
  id: number
  name: string
  text: string
  typeId: number
  tagId: number
  userId: number | string
  labelId: number
}

export const snippetForm: ISnippet = reactive({
  id: 0,
  name: '',
  text: '',
  typeId: 1,
  tagId: 1,
  userId: 0,
  labelId: 0
})

export const clearSnippet = () => {
  snippetForm.id = 0
  snippetForm.name = ''
  snippetForm.text = ''
  snippetForm.typeId = 0
  snippetForm.userId = 0
  snippetForm.tagId = 0
  snippetForm.labelId = 0
}
