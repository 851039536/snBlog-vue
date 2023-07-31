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
            <img src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp" alt="" />
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
            <img src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp" alt="" />
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
            <img src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp" alt="" />
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
            <img src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp" alt="" />
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
            <img src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp" alt="" />
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
  .book-main {
    @apply w-full;
    @apply rounded shadow;

    .book-film-text {
      @apply w-[95%] h-370px rounded m-1 shadow-xl mt-2 p-1;

      .book-img {
        @apply w-full h-220px;

        img {
          @apply rounded-sm w-full h-full;
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
</style>
