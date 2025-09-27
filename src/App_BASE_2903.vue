<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- TODO: add this fade to background of nav bg-gradient-to-b from-neutral-800 to-neutral-800 -->
  <header :class="{ 'dark': darkMode }">
    <nav id="topnav" :class="{ 'py-5 drop-shadow-[0px_0px_1px_#454545]': !bigNavBar }"
      class="fixed top-0 z-50 flex items-center justify-between w-full px-16 py-16 transition-all duration-300 bg-dark font-inter">
      <!-- menu button -->
      <div class="grid grid-cols-2 gap-2 cursor-pointer h-fit w-fit justify-self-start group" @click="toggleSideBar">
        <div class="w-[7px] h-[7px] bg-white rounded-full col-span-1"></div>
        <div class="w-[7px] h-[7px] bg-white rounded-full col-span-1"></div>
        <div class="w-[7px] h-[7px] bg-white rounded-full col-span-1"></div>
        <div class="w-[7px] h-[7px] bg-white rounded-full col-span-1"></div>
      </div>
      <!-- Page title  -->
      <div class="relative flex items-center justify-center text-center">
        <div class="z-10 px-3 text-base font-light text-white uppercase bg-dark font-inter tracking-[5.7px]">Welcome</div>
        <!-- Line -->
        <div class=" absolute w-[200px] h-[0px] border border-[#754C79]"></div>
      </div>
      <!-- Lightbulb button -->
      <div class="w-[30px] h-[30px] relative cursor-pointer text-black dark:text-white" @click="toggleDark">
        <!-- Lightbulb SVG -->
        <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector"
            d="M15.0926 35.2164C15.0926 36.1387 15.8473 36.8933 16.7696 36.8933H23.4775C24.3998 36.8933 25.1544 36.1387 25.1544 35.2164V33.5394H15.0926V35.2164ZM20.1235 3.354C13.6504 3.354 8.38477 8.61968 8.38477 15.0928C8.38477 19.0839 10.3804 22.5888 13.4157 24.7186V28.5085C13.4157 29.4308 14.1703 30.1855 15.0926 30.1855H25.1544C26.0768 30.1855 26.8314 29.4308 26.8314 28.5085V24.7186C29.8667 22.5888 31.8623 19.0839 31.8623 15.0928C31.8623 8.61968 26.5966 3.354 20.1235 3.354ZM24.9029 21.9683L23.4775 22.9745V26.8315H16.7696V22.9745L15.3442 21.9683C13.0803 20.392 11.7387 17.8262 11.7387 15.0928C11.7387 10.4643 15.4951 6.70794 20.1235 6.70794C24.752 6.70794 28.5084 10.4643 28.5084 15.0928C28.5084 17.8262 27.1668 20.392 24.9029 21.9683Z"
            fill="currentColor" />
        </svg>

      </div>
      <!-- <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/imagebrowser">Projects</RouterLink> -->
    </nav>
  </header>
  <main :class="{ 'dark': darkMode }">
    <!-- side nav -->
    <div class="fixed min-w-[64px] items-center flex h-full z-30" :class="[sideBarOpen ? 'visible' : 'invisible']">
      <div class="gap-2 px-5 text-white uppercase font-inter text-md">
        <ul class="flex flex-col gap-2">
          <li class="p-2 rounded-lg shadow-sm shadow-white">
            <a href="#projects">Home</a>
          <li class="p-2 rounded-lg shadow-sm shadow-white">

            <a href="#projects">About</a>
          </li>
          <li class="p-2 rounded-lg shadow-sm shadow-white">
            <a href="#projects">Projects</a>
          </li>
          <li class="p-2 rounded-lg shadow-sm shadow-white">
            <a href="#projects">Contact</a>
          </li>

          </li>
        </ul>

      </div>
    </div>
    <!-- content -->
    <div class="content">
      <RouterView />
    </div>
  </main>
</template>


<script lang="ts">
export default {
  data() {
    return {
      bigNavBar: true,
      darkMode: true,
      sideBarOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },

  methods: {
    toggleSideBar() {
      this.sideBarOpen = !this.sideBarOpen
    },
    toggleDark() {
      this.darkMode = !this.darkMode;
    },
    onScroll() {
      const currentScrollPosition = document.documentElement.scrollTop
      this.bigNavBar = currentScrollPosition < 128 ? true : false
    }
  }
}
</script>