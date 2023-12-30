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
    <div
        class="relative z-20 flex flex-col p-2 mb-4 transition-all duration-300 border-white objelast:ct-cover item-container group hover:-translate-y-2">
        <span></span>
        <div
            class="relative z-10 flex flex-col w-full h-auto px-3 py-1 bg-white drop-shadow info-text font-inconsolata whitespace-nowrap">
            <div class="text-sm">
                {{ title }}
            </div>
            <div class="uppercase">
                <span class="text-[#393939] text-xs justify-self-end font-light mx-[2px]" v-for="tag in tags">#{{ tag
                }}
                </span>
            </div>
        </div>
        <div class="w-full overflow-hidden">
            <img draggable="false"
                class="relative z-0 h-auto max-w-full transition-all duration-300 ease-in-out group-hover:scale-105"
                :src="source" alt="" />
        </div>
    </div>
</template>


<style scoped>
.item-container::before,
.item-container::after {
    position: absolute;
    content: "";
    height: 1px;
    width: 0;
    background: #fff;
    transition: all 0.1s linear;

    transition-delay: .1s;
}

.item-container:hover::before,
.item-container:hover::after {
    width: 100%;
    transition-delay: 0s;
}

.item-container::before {
    right: 0;
    top: 0;
}

.item-container::after {
    left: 0;
    bottom: 0;
}

.item-container span::before,
.item-container span::after {
    position: absolute;
    content: "";
    height: 0;
    width: 1px;
    background: #fff;
    transition: all 0.1s linear;
    transition-delay: 0s;
}

.item-container:hover span::before,
.item-container:hover span::after {
    height: 100%;
    transition-delay: .1s;
}


.item-container span::before,
.item-container span::after {
    transition-delay: 0s;
}

.item-container span::before {
    left: 0;
    top: 0;
}

.item-container span::after {
    right: 0;
    bottom: 0;
}
</style>