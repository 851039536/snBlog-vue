<script lang="ts" setup></script>
<template>
  <div class="book">
    <l-sidebar></l-sidebar>
    <s-header></s-header>
    <index-sidebar></index-sidebar>
    <div class="book_main">
      <BookBar></BookBar>
      <BookFilm></BookFilm>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
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
  @apply s-hw fixed;
  .book_main {
    @apply h-[90%] mt-[4.5%] ml-[26%] w-[47%];
    @apply rounded shadow overflow-auto;

    .book_film_text {
      @apply rounded m-1 shadow-xl mt-2 p-1;
      @include w-h(95%, 370px);

      .book_img {
        @include w-h(100%, 220px);
        img {
          @include w-h(100%, 100%);

          @apply rounded-sm;
        }
      }

      .book_film_title {
        @apply bg-amber-50 text-lg text-center p-1;
      }

      .book_film_type {
        @apply text-sm p-1 px-3 text-gray-500;
        div {
          @apply m-1;
        }
      }
    }
  }
}

@screen <xp {
  .book {
    .book_main {
      @apply h-[88%] mt-[6.3%];
    }
  }
}
</style>
