<script lang="ts" setup></script>
<template>
  <div class="book">
    <index-sidebar></index-sidebar>
    <div class="book-main">
      <BookBar></BookBar>
      <BookFilm></BookFilm>
      <div class="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3">
        <div class="book-film-text">
          <div class="book-img">
            <img src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp" />
          </div>
          <div class="book-film-title">小说家</div>
          <div class="book-film-type">
            <div>类型</div>
            <div>评分:7.2</div>
            <div>主演 xxx xxx xxx</div>
            <div>2020-10-10 xxx</div>
          </div>
        </div>

        <div class="book-film-text">
          <div class="book-img">
            <img src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp" />
          </div>
          <div class="book-film-title">小说家</div>
          <div class="book-film-type">
            <div>类型</div>
            <div>评分:7.2</div>
            <div>主演 xxx xxx xxx</div>
            <div>2020-10-10 xxx</div>
          </div>
        </div>

        <div class="book-film-text">
          <div class="book-img">
            <img src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp" />
          </div>
          <div class="book-film-title">小说家</div>
          <div class="book-film-type">
            <div>类型</div>
            <div>评分:7.2</div>
            <div>主演 xxx xxx xxx</div>
            <div>2020-10-10 xxx</div>
          </div>
        </div>

        <div class="book-film-text">
          <div class="book-img">
            <img src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp" />
          </div>
          <div class="book-film-title">小说家</div>
          <div class="book-film-type">
            <div>类型</div>
            <div>评分:7.2</div>
            <div>主演 xxx xxx xxx</div>
            <div>2020-10-10 xxx</div>
          </div>
        </div>

        <div class="book-film-text">
          <div class="book-img">
            <img src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp" />
          </div>
          <div class="book-film-title">小说家</div>
          <div class="book-film-type">
            <div>类型</div>
            <div>评分:7.2</div>
            <div>主演 xxx xxx xxx</div>
            <div>2020-10-10 xxx</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.book {
  @apply fixed;

  .book-main {
    // @apply h-[90%] mt-[4.5%] ml-[22%] w-[47%];
    @apply rounded shadow overflow-auto;

    .book-film-text {
      @apply rounded m-1 shadow-xl mt-2 p-1;
      @include w-h(95%, 370px);

      .book-img {
        @include w-h(100%, 220px);

        img {
          @include w-h(100%, 100%);
          @apply rounded-sm;
        }
      }

      .book-film-title {
        @apply bg-amber-50 text-lg text-center p-1;
      }

      .book-film-type {
        @apply text-sm p-1 px-3 text-gray-500;

        div {
          @apply m-1;
        }
      }
    }
  }
}

// @screen <xp {
//   .book {
//     .book-main {
//       @apply h-[88%] mt-[6.3%];
//     }
//   }
// }
</style>
