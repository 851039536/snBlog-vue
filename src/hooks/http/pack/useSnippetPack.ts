import { useApi } from '@api/useApi'
import { message } from 'ant-design-vue'

const { SnippetAPI } = useApi()

export function useSnippetPack() {
  const upSnippet = async (snippet: any) => {
    const response = await SnippetAPI.up(snippet)
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
