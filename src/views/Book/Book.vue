<!--
 * @Author: 书单
 * @Date: 2020-12-26 14:05:13
 * @LastEditTime: 2021-10-13 15:05:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\Book\Index.vue
-->
<script lang="ts" setup>
import BookBar from './components/BookBar.vue'
import BookFilm from './components/BookFilm.vue'
</script>
<template>
  <div class="book">
    <blog-sidebar></blog-sidebar>
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
@import './index.scss';
</style>
