<script lang="ts" setup>
const y = ref(0)
onMounted(() => {
  const updateScroll = () => {
    y.value = window.scrollY
  }

  window.addEventListener('scroll', updateScroll)
  window.addEventListener('resize', updateScroll)
})

function goTop() {
  document.body.scrollIntoView()
}
</script>

<template>
  <header class="max-w-7xl mx-auto">
    <nav
      class="flex flex-col md:flex-row items-center justify-between mx-auto px-2">
      <NuxtLink to="/" class="flex text-5xl md:text-4xl font-bold mb-8 md:mb-0"
        >JobGlimpse</NuxtLink
      >
      <NuxtLink
        to="/create"
        class="font-inter rounded-lg hidden md:block bg-black px-8 py-2 text-center text-white hover:bg-gray-800"
        >Post a job</NuxtLink
      >
    </nav>

    <div class="fixed bottom-0 right-0 p-10 z-[10]">
      <button
        @click="goTop"
        class="rounded-full bg-black text-white px-3 sm:px-4 hover:bg-slate-600 cursor-pointer aspect-square grid place-items-center mr-8"
        :class="{ hidden: y < 20 }">
        <Icon name="fa-solid:arrow-up" />
      </button>
    </div>
  </header>
</template>
