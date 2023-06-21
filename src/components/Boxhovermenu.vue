<template lang="">
  <div class="w-full absolute top-1/2 -translate-y-1/2">
    <nav
      class="w-1/2 text-yellow-500 font-inconsolata text-2xl flex flex-col items-end"
    >
      <div
        id="project-hover"
        class="border-2 border-yellow-200 absolute transition-all duration-300 delay-100 linear opacity-0"
      ></div>
      <div
        v-for="project in projects"
        class="z-10 project-item cursor-pointer hover:[text-shadow:_1px_1px_0_rgb(191,73,227,0.70)] py-1 px-2 transition-all duration-100 linear"
      >
        {{ project.title }}
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      projects: [
        {
          title: "Sudoku solver",
        },
        {
          title: "Image gallery",
        },
        {
          title: "Discord music bot",
        },
      ],
    };
  },
  mounted() {
    const hoverbox: HTMLElement | null =
      document.getElementById("project-hover");
    let projectItems = document.querySelectorAll(".project-item");
    if (hoverbox) {
      projectItems.forEach((item) => {
        item.addEventListener("mouseover", (event) => {
          console.log(event.target);
          hoverbox.style.opacity = "1";
          hoverbox.style.left = (<HTMLElement>item).offsetLeft + "px";
          hoverbox.style.top = (<HTMLElement>item).offsetTop + "px";
          hoverbox.style.width = (<HTMLElement>item).offsetWidth + "px";
          hoverbox.style.height = (<HTMLElement>item).offsetHeight + "px";
        });
      });
    }
  },
};
</script>
