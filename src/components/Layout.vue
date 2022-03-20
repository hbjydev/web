<script setup lang="ts">
import Navbar from "./Navbar.vue";
</script>

<template>
  <div class="flex-grow bg-default-800 text-default-400 antialiased flex flex-col">
    <Navbar />
    <main class="mt-16 flex flex-col flex-grow">
      <slot />
    </main>
  </div>
</template>
