<script lang="ts">
export default {
    props: {
        source: String,
        title: String,
        tags: Array
    },
};
</script>


<template>
    <div class="object-cover mb-4 overflow-hidden group">
        <div
            class="relative z-10 flex flex-col w-full h-auto p-1 px-3 bg-white drop-shadow info-text font-inconsolata whitespace-nowrap">
            <div class="text-sm">{{ title }}</div>
            <div class="uppercase">
                <span class="text-[#393939] text-xs justify-self-end font-light mx-[2px]" v-for="tag in tags">#{{ tag
                }}</span>
            </div>
        </div>
        <img class="relative z-0 h-auto max-w-full overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-105"
            :src="source" alt="" />
    </div>
</template>

