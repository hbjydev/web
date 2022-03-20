<script setup lang="ts">
import Navbar from "./Navbar.vue";
</script>

<template>
  <div class="flex-grow bg-default-800 text-default-400 antialiased">
    <Navbar />
    <main class="mt-16 h-full flex flex-col px-6">
      <slot />
    </main>
  </div>
</template>
