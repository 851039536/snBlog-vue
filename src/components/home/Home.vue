<script lang="ts" setup>
import { Routers } from '@/hooks/routers'
</script>

<template>
  <div id="blogHome" class="animate__animated animate__fadeIn">
    <div class="home_main">
      <div class="centeredPrompt">
        <div class="centeredPrompt__item centeredPromptIcon">
          <div class="icon fa fa-smile-o"></div>
        </div>
        <div class="centeredPrompt__item centeredPromptLabel">满天星辰</div>
        <div class="centeredPrompt__item centeredPromptDetails">一位热爱生活、xxxxxx开发者。</div>
        <div class="centeredPrompt__item button">
          <button class="btn btn-link" @click="Routers('/Blogs/BlogsColumn')">Go</button>
        </div>
        <div class="centeredPrompt__item button">
          <p>
            SN © 2021.Rights Reserved.
            <a href="https://beian.miit.gov.cn/">粤ICP备19130826号-1</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';

.centeredPrompt {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: 10px;
}

.centeredPrompt__item + .centeredPrompt__item {
  margin-top: 5px;
}

.centeredPromptIcon {
  font-size: 60px;
  line-height: 0;
}

.centeredPromptLabel {
  color: #86969c;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
}
.centeredPromptDetails {
  margin-bottom: 10px;
  color: #86969c;
  font-size: 16px;
  text-align: center;
}

.icon {
  color: #bcd2da;
}
</style>
