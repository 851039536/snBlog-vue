export const Demo = defineComponent({
  name: 'TsxDemo',
  props: {
    msg: {
      type: String,
      required: true,
      default: 'hello'
    }
  },
  setup(props) {
    return () => {
      return (
        <div>
          <div> {props.msg}</div>
        </div>
      )
    }
  }
})
