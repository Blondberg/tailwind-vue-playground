<template>
    <div ref="target">
        <transition :name="animationType">
            <div v-appear="animate" class="animated-component">
                <slot />
            </div>
        </transition>

    </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
export default {

    props: {
        animationType: {
            type: String,
            required: false,
            default: 'fade'
        }
    },
    setup() {
        const target = ref();
        const animate = ref(false);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if ((entry.isIntersecting)) {
                    animate.value = true
                }
            },
            {
                threshold: 0.3
            }
        )
        onMounted(() => {
            observer.observe(target.value)
        })

        return {
            animate, target
        }
    }
}
</script>

<style scoped>
.animated-component.fade-enter-from,
.animated-component.zoom-enter-from {
    transition: none;
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1000ms ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Zoom animation */
.zoom-enter-active,
.zoom-leave-active {
    transition: transform 1000ms ease;
}

.zoom-enter-from,
.zoom-leave-to {
    transform: scale(0.9);
}
</style>