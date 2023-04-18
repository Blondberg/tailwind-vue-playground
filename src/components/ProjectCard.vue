<template lang="">
  <div class="group relative cursor-pointer overflow-hidden rounded-3xl">
    <div
      class="transition-all linear delay-75 duration-100 w-full bg-[#202020] opacity-70 group-hover:h-1/4 h-0 bottom-0 left-0 z-10 absolute"
    ></div>
    <img
      class="group-hover:scale-110 transition-all ease-in-out duration-300 h-full object-cover z-0"
      draggable="false"
      :src="source"
      alt=""
    />
  </div>
</template>
<script lang="ts">
export default {
  props: {
    source: {
      type: String,
      default: "",
    },
  },
};
</script>
