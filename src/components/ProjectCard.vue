<template lang="">
  <div
    class="group relative cursor-pointer overflow-hidden rounded-3xl border-2 border-black"
  >
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
