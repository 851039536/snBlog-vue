<script lang="ts" setup>
import { uiSettings } from '@store/modules/uiSettings'
import { usePhotoGalleryApi } from '@hooksHttp/index'
import { identity } from '.'
const { getPaging } = usePhotoGalleryApi()
const ui = uiSettings()
const retData = ref()

function QImageUrl(name: string) {
  return new URL(`http://kai.snblogs.cn/blog/article/${name}`)
}
onMounted(async () => {
  ui.rightSidebar = false

  const ret = await getPaging(0, '', 1, 10, 'id', true, false)
  retData.value = ret.data.data
})
</script>
<template>
  <div>
    <div class="photo">
      <div class="photo-title">
        <p>图册 / 总计 20</p>
      </div>
      <div class="photo-tab flex cursor-pointer bg-emerald-50">
        <div px-1 py-2px text-base font-medium m-1 class="hover:text-blue-500" @click="identity = true">创建</div>
        <div px-1 py-2px text-base font-medium m-1 class="hover:text-blue-500">加密</div>
      </div>

      <div class="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3">
        <div v-for="(item, index) in retData" :key="index" class="photo-img">
          <img v-lazy="QImageUrl(item.img)" alt="" />
          <div class="photo-text">
            <div class="hover:text-blue-500">{{ item.name }}</div>
            <div>{{ item.type.name }} / {{ item.tag }}</div>
            <div>{{ item.timeCreate }}</div>
          </div>
        </div>
      </div>
    </div>

    <PhotoAdd></PhotoAdd>
  </div>
</template>

<style lang="scss" scoped>
.photo {
  @apply rounded shadow bg-white h-[92vh];

  .photo-title {
    @include underline;

    p {
      @apply font-medium m-1 text-lg py-2 px-1;
    }
  }

  .photo-img {
    @apply m-3 relative;
    @apply rounded-md shadow;

    img {
      @apply w-full h-198px;

      padding: 5px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    a {
      position: absolute;
    }

    .photo-text {
      color: #5f6c7b;

      @apply cursor-pointer py-2 px-10px;
    }
  }
}
</style>
