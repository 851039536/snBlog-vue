export interface SnippetVersion {
  id: number
  name: string
  text: string
  snippetId: number
  count: number
  timeCreate: string
}

export const snippetVersion: SnippetVersion = reactive({
  id: 0,
  name: '',
  text: '',
  snippetId: 0,
  count: 0,
  timeCreate: '2021-11-13T03:18:19.821Z'
})

export const removeSnippetVersion = () => {
  snippetVersion.id = 0
  snippetVersion.name = ''
  snippetVersion.text = ''
  snippetVersion.count = 0
  snippetVersion.snippetId = 0
  snippetVersion.timeCreate = '2021-11-13T03:18:19.821Z'
}
