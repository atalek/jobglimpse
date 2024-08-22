<script setup lang="ts">
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
  <div class="fixed bottom-0 -right-5 p-10 z-[10]">
    <button
      aria-label="go to top button"
      @click="goTop"
      class="rounded-full bg-black text-white dark:bg-white hover:bg-slate-600 dark:hover:bg-slate-300 dark:text-black px-3 sm:px-4 aspect-square flex place-items-center"
      :class="{ hidden: y < 20 }">
      <Icon name="fa-solid:arrow-up" />
    </button>
  </div>
</template>

<style scoped></style>
