<script lang="ts" setup>
const observer = ref()
const root = ref(null)
const emits = defineEmits(['intersect'])

onMounted(() => {
  observer.value = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      emits('intersect')
    }
  })

  observer.value.observe(root.value)
})
</script>

<template>
  <div
    class="h-3"
    ref="root"></div>
</template>
