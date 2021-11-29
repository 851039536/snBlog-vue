import {
  Button,
  Pagination,
  PageHeader,
  Select,
  Table,
  Layout,
  Menu,
  Form,
  Input,
  Spin,
  BackTop,
  Modal,
  message,
  Space,
  Breadcrumb,
  Popconfirm,
  Avatar,
  Skeleton
} from 'ant-design-vue'

const plugins = [
  Button,
  Pagination,
  PageHeader,
  Select,
  Table,
  Layout,
  Menu,
  Form,
  Input,
  Spin,
  BackTop,
  Modal,
  message,
  Space,
  Breadcrumb,
  Popconfirm,
  Avatar,
  Skeleton
]

export const setupAntd = (res: any) => {
  res.config.globalProperties.$mes = message
  plugins.forEach((plugin) => {
    res.use(plugin)
  })
}
