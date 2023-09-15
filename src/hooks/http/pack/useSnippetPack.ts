import { useSnippetApi } from '@hooks/http'
import { message } from 'ant-design-vue'

const { up } = useSnippetApi()

export function useSnippetPack() {
  const upSnippet = async (snippet: any) => {
    const response = await up(snippet)
    if (response.data) {
      message.success('更新成功')
      return true
    }
    message.warning('更新失败')
    return false
  }

  return {
    upSnippet
  }
}
