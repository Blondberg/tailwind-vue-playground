<template>
  <div class="absolute bg-black left-1/2 top-1/2">
    <div id="menu-opener" class="relative">
      <div
        v-for="(dot, index) in dots"
        class="absolute top-0 left-0 h-5 w-11 dot"
        :key="index"
      >
        <div
          class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full opacity-100"
        ></div>
        <span class="absolute leading-4 text-white opacity-0">{{
          dot.text
        }}</span>
      </div>

      <div class="w-5 h-5 cursor-pointer" @click="animateMenu">
        <div
          class="absolute w-5 h-5 border-[1px] transition-all duration-200 ease-in-out rounded-full hover:scale-150 border-red-50"
          id="menu-button"
        ></div>
        <!-- <CloseIcon class="w-4 h-4" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from "@/components/icons/CloseIcon.vue";
import anime from "animejs";
export default {
  components: {
    CloseIcon,
  },
  data() {
    return {
      dots: [{ text: "Home" }, { text: "Home" }],
      menuOpen: false,
      displayMenuAnim: null,
      hideMenuAnim: null,
    };
  },
  methods: {
    animateMenu() {
      if (!this.menuOpen) {
        console.log("open");
        anime
          .timeline({ loop: false, autoplay: false })
          .add({
            targets: "#menu-opener .dot",
            left: ["0px", "200px"],
            top: (el, i) => [0, 50 * i + "px"],
            duration: 500,
            delay: anime.stagger(200),
            easing: "easeInOutExpo",
          })
          .add(
            {
              targets: "#menu-opener .dot div",
              duration: 500,
              easing: "easeInOutExpo",
              borderRadius: ["100%", "0"],
              scaleX: [1, 0.1],
              delay: anime.stagger(200),
            },
            "-=600",
          )
          .add({
            targets: "#menu-opener .dot div",
            duration: 500,
            easing: "easeInOutExpo",
            left: [0, "100%"],
            opacity: [1, 0],
            delay: anime.stagger(200),
          })
          .add(
            {
              targets: "#menu-opener .dot span",
              opacity: [0, 1],
              duration: 500,
              easing: "linear",
              delay: anime.stagger(200),
            },
            "-=400",
          )
          .play();
      } else {
        console.log("close");
      }
      this.menuOpen = !this.menuOpen;
    },
  },
  mounted() {},
};
</script>

<style>
body {
  background: black;
}
</style>
