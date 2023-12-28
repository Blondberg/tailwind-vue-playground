<script setup lang="ts">
</script>
<template>
    <header>
        <div class="p-10 text-4xl text-white font-inconsolata">Projects</div>
    </header>
    <main class="">
        <div class="gap-4 mx-10 columns-2 md:columns-3">
            <ScrollTransitionElement v-for="(project, index) in projects" :key="index">
                <ImageItem :source="project.source" :title="project.title" :tags="project.tags" />
            </ScrollTransitionElement>
        </div>

    </main>
</template>

<script lang="ts">
import ImageItem from '@/components/imagebrowser/ImageItem.vue'
import ScrollTransitionElement from '@/components/imagebrowser/ScrollTransitionElement.vue';
export default {
    components: {
        ImageItem,
        ScrollTransitionElement
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
                        "https://images.unsplash.com/photo-1681773321684-0f897aace764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                },
                {
                    title: "Discord Music Bot",
                    tags: ["Python", "Discord", "Music", "Bot"],
                    source:
                        "https://images.unsplash.com/photo-1681671408340-118a341a6297?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
                },
                {
                    title: "Project 3",
                    source:
                        "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    title: "Project 3",
                    source:
                        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    title: "Project 3",
                    source:
                        "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    title: "Project 3",
                    source:
                        "https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    title: "Project 3",
                    source:
                        "https://images.unsplash.com/photo-1470049384172-927891aad5e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
                },
                {
                    title: "Project 3",
                    source:
                        "https://images.unsplash.com/photo-1444201716572-c60ec66d0494?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
            ],
        };
    },
};
</script>

<style>
.demo {
    max-width: 600px;
    border: 2px solid #2c3e50;
    padding: 2rem;
    margin: 2rem auto;
    background-color: #42b983;
}
</style>