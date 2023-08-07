<script lang="ts" setup>
import { useUiSetStore } from '@store/modules/uiSettings'
import { usePhotoGalleryApi } from '@hooksHttp/index'
import { identity } from '.'
const { getPaging } = usePhotoGalleryApi()
const ui = useUiSetStore()
const retData = ref()

function QImageUrl(name: string) {
  return new URL(`http://rxzvlzwfh.hn-bkt.clouddn.com/blog/article/${name}`)
}
onMounted(async () => {
  ui.uiRightVisible = false

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

      <!-- <div class="bigbox">
        <div class="box">
          <div class="bigfront">
            <img src="src/assets/img/bb/1.jpg" class="bigpic" alt="" />
          </div>
          <div class="bigback">
            <img src="src/assets/img/bb/1.jpg" class="bigpic" alt="" />
          </div>
          <div class="bigleft">
            <img src="src/assets/img/bb/1.jpg" class="bigpic" alt="" />
          </div>
          <div class="bigright">
            <img src="src/assets/img/bb/1.jpg" class="bigpic" alt="" />
          </div>
          <div class="bigtop">
            <img src="src/assets/img/bb/1.jpg" class="bigpic" alt="" />
          </div>
          <div class="bigbottom">
            <img src="src/assets/img/bb/1.jpg" class="bigpic" alt="" />
          </div>
          <span class="smallfront">
            <img src="src/assets/img/bb/1.jpg" class="smallpic" alt="" />
          </span>
          <span class="smallback">
            <img src="src/assets/img/bb/1.jpg" class="smallpic" alt="" />
          </span>
          <span class="smallleft">
            <img src="src/assets/img/bb/1.jpg" class="smallpic" alt="" />
          </span>
          <span class="smallright">
            <img src="src/assets/img/bb/1.jpg" class="smallpic" alt="" />
          </span>
          <span class="smalltop">
            <img src="src/assets/img/bb/1.jpg" class="smallpic" alt="" />
          </span>
          <span class="smallbottom">
            <img src="src/assets/img/bb/1.jpg" class="smallpic" alt="" />
          </span>
        </div>
      </div> -->
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

.bigbox {
  position: relative;
  width: 10px;
  height: 10px;
  margin: 200px 400px;
}

.box {
  width: 500px;
  height: 300px;
  margin: 0 auto;
  transform: rotateX(-30deg) rotateY(-80deg);
  transform-style: preserve-3d;
  animation: mystyle 20s infinite;
  animation-timing-function: linear;
}

@keyframes mystyle {
  from {
    transform: rotateX(-180deg) rotateY(-180deg);
  }

  to {
    transform: rotateX(180deg) rotateY(180deg);
  }
}

.box div {
  position: absolute;
  width: 200px;
  height: 200px;
  opacity: 0.8;
  transition: all 0.4s;
}

.bigpic {
  width: 200px;
  height: 200px;
}

.box .bigfront {
  transform: rotateY(0deg) translateZ(100px);
}

.box .bigback {
  transform: translateZ(-100px) rotateY(180deg);
}

.box .bigleft {
  transform: rotateY(90deg) translateZ(100px);
}

.box .bigright {
  transform: rotateY(-90deg) translateZ(100px);
}

.box .bigtop {
  transform: rotateX(90deg) translateZ(100px);
}

.box .bigbottom {
  transform: rotateX(-90deg) translateZ(100px);
}

.box span {
  position: absolute;
  top: 25px;
  left: 25px;
  display: block;
  width: 140px;
  height: 140px;
}

.box .smallpic {
  width: 140px;
  height: 140px;
}

.box .smallleft {
  transform: rotateY(90deg) translateZ(70px);
}

.box .smallright {
  transform: rotateY(-90deg) translateZ(70px);
}

.box .smalltop {
  transform: rotateX(90deg) translateZ(70px);
}

.box .smallbottom {
  transform: rotateX(-90deg) translateZ(70px);
}

.box .smallfront {
  transform: rotateY(0deg) translateZ(70px);
}

.box .smallback {
  transform: translateZ(-70px) rotateY(180deg);
}

.box:hover .bigleft {
  transform: rotateY(90deg) translateZ(300px);
}

.box:hover .bigright {
  transform: rotateY(-90deg) translateZ(300px);
}

.box:hover .bigtop {
  transform: rotateX(90deg) translateZ(300px);
}

.box:hover .bigbottom {
  transform: rotateX(-90deg) translateZ(300px);
}

.box:hover .bigfront {
  transform: rotateY(0deg) translateZ(300px);
}

.box:hover .bigback {
  transform: translateZ(-300px) rotateY(180deg);
}
</style>
