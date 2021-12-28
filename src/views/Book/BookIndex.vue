<script lang="ts" setup></script>
<template>
  <div class="book">
    <l-sidebar></l-sidebar>
    <s-header></s-header>
    <index-sidebar></index-sidebar>
    <div class="book_main">
      <BookBar></BookBar>
      <BookFilm></BookFilm>
      <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div class="book_film_text">
          <div class="book_img">
            <img src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp" />
          </div>
          <div class="book_film_title">小说家</div>
          <div class="book_film_type">
            <div>类型</div>
            <div>评分:7.2</div>
            <div>主演 xxx xxx xxx</div>
            <div>2020-10-10 xxx</div>
          </div>
        </div>

        <div class="book_film_text">
          <div class="book_img">
            <img src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp" />
          </div>
          <div class="book_film_title">小说家</div>
          <div class="book_film_type">
            <div>类型</div>
            <div>评分:7.2</div>
            <div>主演 xxx xxx xxx</div>
            <div>2020-10-10 xxx</div>
          </div>
        </div>

        <div class="book_film_text">
          <div class="book_img">
            <img src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp" />
          </div>
          <div class="book_film_title">小说家</div>
          <div class="book_film_type">
            <div>类型</div>
            <div>评分:7.2</div>
            <div>主演 xxx xxx xxx</div>
            <div>2020-10-10 xxx</div>
          </div>
        </div>

        <div class="book_film_text">
          <div class="book_img">
            <img src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp" />
          </div>
          <div class="book_film_title">小说家</div>
          <div class="book_film_type">
            <div>类型</div>
            <div>评分:7.2</div>
            <div>主演 xxx xxx xxx</div>
            <div>2020-10-10 xxx</div>
          </div>
        </div>

        <div class="book_film_text">
          <div class="book_img">
            <img src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp" />
          </div>
          <div class="book_film_title">小说家</div>
          <div class="book_film_type">
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

  @include w-h(100%, 100%);

  .book_main {
    @include initialize($w, 89%, 4.5%, null, $ml, null, #ffffff);

    @apply shadow-sm rounded-sm overflow-auto;

    .book_bar {
      @include underline;

      @apply mb-2;

      p {
        @apply px-1 py-2 m-2;
        @apply text-base font-medium;
      }
    }

    .book_film {
      width: 99%;

      @apply py-2 m-auto shadow rounded-sm;

      span {
        @apply px-3 text-base;
      }
    }

    .book_film_text {
      @apply m-1 mt-2 p-1 shadow-xl rounded-sm;

      @include w-h(95%, 370px);

      .book_img {
        @include w-h(100%, 220px);

        img {
          @include w-h(100%, 100%);

          @apply rounded-sm;
        }
      }

      .book_film_title {
        background-color: wheat;

        @apply text-lg text-center p-1;
      }

      .book_film_type {
        @apply p-1 px-3 text-sm text-gray-400;

        div {
          @apply m-1;
        }
      }
    }
  }
}

// @screen xp {
//   .book .book_text {
//     width: 100%;

//     @apply ml-2;
//   }

//   .book .book_text .book_film_text .book_img {
//     height: 380px;
//   }

//   .book .book_text .book_film_text {
//     height: 540px;
//   }
// }
</style>
