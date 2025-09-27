<script setup lang="ts">
</script>
<template>
  <header>
    <div class="p-10 text-4xl text-white font-inconsolata">Projects</div>
  </header>
  <main>
    <div class="gap-2 transition-all duration-500 columns-2 md:columns-3">
      <ScrollTransitionElement
        v-for="(project, index) in projects"
        :key="index"
      >
        <ImageItem
          :source="project.source"
          :title="project.title"
          :tags="project.tags"
        />
      </ScrollTransitionElement>
    </div>
  </main>
</template>

<script lang="ts">
import ImageItem from "@/components/imagebrowser/ImageItem.vue";
import ScrollTransitionElement from "@/components/imagebrowser/ScrollTransitionElement.vue";
export default {
  components: {
    ImageItem,
    ScrollTransitionElement,
  },
  data() {
    return {
      projects: [
        {
          title: "Sudoku solver",
          tags: ["Python", "Backtracking"],
          source:
            "https://images.unsplash.com/photo-1676653323490-6bf1dcd695f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "MCTS for connect4",
          tags: ["AI", "MCTS", "Python"],
          source:
            "https://images.unsplash.com/photo-1495592822108-9e6261896da8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Discord Music Bot",
          tags: ["Python", "Discord", "Music", "Bot"],
          source:
            "https://images.unsplash.com/photo-1681671408340-118a341a6297?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
        },
      ],
    };
  },
};
</script>
