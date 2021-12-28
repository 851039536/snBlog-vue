<script lang="ts" setup>
// ...
</script>
<template>
  <div>
    <s-header></s-header>
    <div class="photo">
      <div class="photo_title">
        <p>原来是你呀 / 总计 20</p>
      </div>
      <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div class="photo_img">
          <img src="https://cdn.share-man.com/mailImage/e8f1120dfaca01d78bc90f0c71e3736e.jpeg" />

          <div class="photo_text">
            <div>From 少年 To Jenny</div>
            <div>信件 / 永远值得等待</div>
            <div>2021-01-11</div>
          </div>
        </div>
        <div class="photo_img">
          <img src="../../assets/img/bb/1.jpg" />

          <div class="photo_text">
            <div>From 少年 To Jenny</div>
            <div>信件 / 永远年轻，永远热泪盈眶</div>
            <div>2021-04-27</div>
          </div>
        </div>
        <div class="photo_img">
          <img src="https://cdn.share-man.com/mailImage/751e475835955b416fc54978ca751bfb.jpeg" />

          <div class="photo_text">
            <div>From 少年 To Jenny</div>
            <div>信件 / Test</div>
            <div>2021-01-11</div>
          </div>
        </div>
        <div class="photo_img">
          <img src="https://cdn.share-man.com/mailImage/1fa79317d3ec1b08758e6318f8776c38.jpeg" />

          <div class="photo_text">
            <div>From 少年 To Jenny</div>
            <div>信件 / Test</div>
            <div>2021-01-11</div>
          </div>
        </div>
        <div class="photo_img">
          <img src="https://cdn.share-man.com/mailImage/73483879c650cc43d96038ce40938b0d.jpeg" />

          <div class="photo_text">
            <div>From 少年 To Jenny</div>
            <div>信件 / Test</div>
            <div>2021-01-11</div>
          </div>
        </div>
        <div class="photo_img">
          <img src="https://cdn.share-man.com/mailImage/d4646c86453cd634d067a784b1890f66.jpeg" />

          <div class="photo_text">
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
  @include initialize(94%, null, 4.5%, null, 3%, null, #ffffff);
  @apply shadow rounded-md;
  .photo_title {
    @include underline;
    margin-bottom: 6px;
    p {
      @apply px-1 py-2 m-2 text-lg font-medium;
    }
  }

  .photo_img {
    @apply relative m-3;
    @apply rounded-md shadow;

    img {
      @include w-h(100%, 300px);

      padding: 5px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    a {
      position: absolute;

      @include excursion(null, 3%, null, 3%);
    }

    .photo_text {
      color: #5f6c7b;

      @apply p-2 px-4 text-base cursor-pointer hover:text-red-300;
    }
  }
}
</style>
