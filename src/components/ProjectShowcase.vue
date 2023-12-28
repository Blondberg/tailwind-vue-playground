<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
</script>
<template>
  <!-- Project showcase -->
  <div class="container grid grid-cols-[repeat(auto-fill,_minmax(300px,0px))] gap-4 justify-center mx-auto">
    <ProjectCard v-for="project in projects" :source="project.source" />
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      projects: [
        {
          source:
            "https://images.unsplash.com/photo-1681518628446-8cbd07d134f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          source:
            "https://images.unsplash.com/photo-1681773321684-0f897aace764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        },
        {
          source:
            "https://images.unsplash.com/photo-1681671408340-118a341a6297?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
        },
        {
          source:
            "https://images.unsplash.com/photo-1681518628446-8cbd07d134f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          source:
            "https://images.unsplash.com/photo-1681773321684-0f897aace764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        },
        {
          source:
            "https://images.unsplash.com/photo-1681671408340-118a341a6297?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
        },
        {
          source:
            "https://images.unsplash.com/photo-1681518628446-8cbd07d134f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          source:
            "https://images.unsplash.com/photo-1681773321684-0f897aace764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        },
        {
          title: "Project 3",
          source:
            "https://images.unsplash.com/photo-1681671408340-118a341a6297?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
        },
      ],
    };
  },
};
</script>
