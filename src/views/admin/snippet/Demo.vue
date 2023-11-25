<script lang="tsx" setup>
import { defineComponent } from 'vue'

const Demo = defineComponent({
  props: {
    msg: String
  },
  setup(props) {
    return () => (
      <div>
        <div>msg is {props.msg}</div>
      </div>
    )
  }
})
</script>
<template>
  <div>
    <Demo msg="hello world" />
  </div>
</template>
