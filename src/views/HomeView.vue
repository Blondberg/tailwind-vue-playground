<script setup lang="ts">
import ProjectShowcase from "../components/ProjectShowcase.vue";
import Boxhovermenu from "@/components/Boxhovermenu.vue";
import Horisonalprojectshow from "@/components/Horisonalprojectshow.vue";
import LeftSideHover from "@/components/LeftSideHover.vue";
import ImageBrowserView from "./ImageBrowserView.vue";
import IconCircledDownArrow from "@/components/icons/IconCircledDownArrow.vue";
</script>

<template>
  <!-- landing -->
  <div
    ref="landing"
    class="flex flex-col items-center justify-center h-screen gap-20 -translate-y-10"
  >
    <!-- text container -->
    <div class="flex flex-col items-center justify-center text-white">
      <!-- header -->
      <div class="text-6xl">
        <span class="font-extralight font-inter tracking-[3.84px]"> I am </span>
        <span class="font-normal font-pacifico tracking-[3.84px]">
          Blondberg
        </span>
      </div>
      <!-- sub text -->
      <div class="pt-5 text-base font-extralight font-inter">
        Freelance UX/UI-designer, Life-long learner, Tech-nerd, Student
      </div>
    </div>
    <div
      @click="handleScroll"
      class="absolute flex items-center justify-center border-2 border-[#754C79] rounded-full cursor-pointer bottom-20 w-fit h-fit animate-bounce"
    >
      <IconCircledDownArrow />
    </div>
  </div>
  <ImageBrowserView id="projects" ref="projects" />
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  methods: {
    handleScroll() {
      const el = <HTMLElement>this.$refs.projects;
      const offsetElement = <HTMLElement>this.$refs.landing;
      const offsetBox = offsetElement.getBoundingClientRect();
      const offset = offsetBox.height - 50;

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        window.scrollTo({ top: offset, left: 0, behavior: "smooth" });
      }
    },
  },
};
</script>
