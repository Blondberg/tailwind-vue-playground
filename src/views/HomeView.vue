<script setup lang="ts">
import ProjectShowcase from "../components/ProjectShowcase.vue";
import Boxhovermenu from "@/components/Boxhovermenu.vue";
import Horisonalprojectshow from "@/components/Horisonalprojectshow.vue";
import LeftSideHover from '@/components/LeftSideHover.vue';
import ImageBrowserView from "./ImageBrowserView.vue";
</script>

<template>
  <!-- landing -->
  <div ref="landing" class="flex flex-col items-center justify-center h-screen gap-20 -translate-y-10 ">
    <!-- text container -->
    <div class="flex flex-col items-center justify-center text-white">
      <!-- header -->
      <div class="text-6xl">
        <span class="font-extralight font-inter tracking-[3.84px]">
          I am
        </span>
        <span class="font-normal font-pacifico tracking-[3.84px]">
          Blondberg
        </span>
      </div>
      <!-- sub text -->
      <div class="pt-5 text-base font-extralight font-inter">
        Freelance UX/UI-designer,
        Life-long learner,
        Tech-nerd,
        Student
      </div>
    </div>
    <div @click="handleScroll"
      class="absolute flex items-center justify-center border-2 border-[#754C79] rounded-full cursor-pointer bottom-20 w-fit h-fit animate-bounce">
      <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M42.5 54.0342L42.5 16.8755C42.5 15.0192 42.355 13.5005 40.4988 13.5005C38.6425 13.5005 38.5 15.0192 38.5 16.8755L38.5 54.0342H33C31.4812 54.0342 30.92 55.8567 32 56.903L39.3175 64.5C39.9925 65.1413 41.0388 65.1413 41.7138 64.5L48.9999 56.903C50.0799 55.8567 49.485 54.0342 48 54.0342H42.5Z"
          fill="white" />
      </svg>

    </div>
  </div>
  <ImageBrowserView id="projects" ref="projects" />
</template>

<script lang="ts">
import { ref } from 'vue'
export default {

  methods: {
    handleScroll() {

      const el = <HTMLElement>this.$refs.projects;
      const offsetElement = <HTMLElement>this.$refs.landing
      const offsetBox = offsetElement.getBoundingClientRect()
      const offset = offsetBox.height - 128

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        window.scrollTo({ top: offset, left: 0, behavior: 'smooth' });
      }
    }
  }
}
</script>