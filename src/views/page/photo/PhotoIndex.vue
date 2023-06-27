<script lang="ts" setup>
// ...
</script>
<template>
  <div>
    <div class="photo">
      <div class="photo-title">
        <p>原来是你呀 / 总计 20</p>
      </div>

      <div class="bigbox">
        <div class="box">
          <div class="bigfront">
            <img src="src/assets/img/bb/1.jpg" class="bigpic" />
          </div>
          <div class="bigback">
            <img src="src/assets/img/bb/1.jpg" class="bigpic" />
          </div>
          <div class="bigleft">
            <img src="src/assets/img/bb/1.jpg" class="bigpic" />
          </div>
          <div class="bigright">
            <img src="src/assets/img/bb/1.jpg" class="bigpic" />
          </div>
          <div class="bigtop">
            <img src="src/assets/img/bb/1.jpg" class="bigpic" />
          </div>
          <div class="bigbottom">
            <img src="src/assets/img/bb/1.jpg" class="bigpic" />
          </div>
          <span class="smallfront">
            <img src="src/assets/img/bb/1.jpg" class="smallpic" />
          </span>
          <span class="smallback">
            <img src="src/assets/img/bb/1.jpg" class="smallpic" />
          </span>
          <span class="smallleft">
            <img src="src/assets/img/bb/1.jpg" class="smallpic" />
          </span>
          <span class="smallright">
            <img src="src/assets/img/bb/1.jpg" class="smallpic" />
          </span>
          <span class="smalltop">
            <img src="src/assets/img/bb/1.jpg" class="smallpic" />
          </span>
          <span class="smallbottom">
            <img src="src/assets/img/bb/1.jpg" class="smallpic" />
          </span>
        </div>
      </div>
      <div class="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3">
        <div class="photo-img">
          <img src="https://cdn.share-man.com/mailImage/e8f1120dfaca01d78bc90f0c71e3736e.jpeg" alt="test" />

          <div class="photo-text">
            <div>From 少年 To Jenny</div>
            <div>信件 / 永远值得等待</div>
            <div>2021-01-11</div>
          </div>
        </div>
        <div class="photo-img">
          <!-- <img src="../../assets/img/bb/1.jpg" /> -->

          <div class="photo-text">
            <div>From 少年 To Jenny</div>
            <div>信件 / 永远年轻，永远热泪盈眶</div>
            <div>2021-04-27</div>
          </div>
        </div>
        <div class="photo-img">
          <img
            src="https://cdn.share-man.com/mailImage/751e475835955b416fc54978ca751bfb.jpeg"
            onerror="this.style.display='none'" />

          <div class="photo-text">
            <div>From 少年 To Jenny</div>
            <div>信件 / Test</div>
            <div>2021-01-11</div>
          </div>
        </div>
        <div class="photo-img">
          <img
            src="https://cdn.share-man.com/mailImage/1fa79317d3ec1b08758e6318f8776c38.jpeg"
            onerror="this.style.display='none'" />

          <div class="photo-text">
            <div>From 少年 To Jenny</div>
            <div>信件 / Test</div>
            <div>2021-01-11</div>
          </div>
        </div>
        <div class="photo-img">
          <img
            src="https://cdn.share-man.com/mailImage/73483879c650cc43d96038ce40938b0d.jpeg"
            onerror="this.style.display='none'" />

          <div class="photo-text">
            <div>From 少年 To Jenny</div>
            <div>信件 / Test</div>
            <div>2021-01-11</div>
          </div>
        </div>
        <div class="photo-img">
          <img src="https://cdn.share-man.com/mailImage/d4646c86453cd634d067a784b1890f66.jpeg" />

          <div class="photo-text">
            <div>From 少年 To Jenny</div>
            <div>信件 / 永远年轻，永远热泪盈眶</div>
            <div>2021-01-11</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.photo {
  @apply rounded-md shadow bg-white;

  .photo-title {
    @include underline;

    margin-bottom: 6px;

    p {
      @apply font-medium m-2 text-lg py-2 px-1;
    }
  }

  .photo-img {
    @apply m-3 relative;
    @apply rounded-md shadow;

    img {
      @include w-h(100%, 300px);

      padding: 5px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    a {
      position: absolute;

      // @include excursion(null, 3%, null, 3%);
    }

    .photo-text {
      color: #5f6c7b;

      @apply cursor-pointer text-base p-2 px-4 hover: text-red-300;
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
