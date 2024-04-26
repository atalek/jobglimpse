<script setup lang="ts"></script>

<template>
  <div class="divide-y-2">
    <LoadingTile
      :numberOfPills="6"
      :promoted="true" />
    <LoadingTile
      :numberOfPills="3"
      :promoted="true" />
    <LoadingTile :numberOfPills="2" />
    <LoadingTile :numberOfPills="4" />
    <LoadingTile :numberOfPills="5" />
    <LoadingTile :numberOfPills="3" />
  </div>
</template>

<style scoped></style>
