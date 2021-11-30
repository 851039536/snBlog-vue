interface one {
  id: number
  title: string
  text: string
  img: string
  typeId: number
  read: number
  give: number
  userId: number
  commentId: number
  timeCreate: any
  timeModified: any
}

interface oneType {
  id: number
  title: number
}

export type { one, oneType }
