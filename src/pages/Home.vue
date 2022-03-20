<template>
    <div class="bg-default-900 h-96 flex flex-col justify-center">
        <div class="max-w-screen-xl flex flex-col gap-2 md:gap-4 lg:gap-6 w-full mx-auto px-6">
            <h1 class="text-primary-500 text-3xl md:text-5xl lg:text-6xl font-bold">Hi, I'm Hayden.</h1>
            <p class="text-gray-200 text-lg md:text-xl max-w-[300px] md:max-w-[500px]">A software engineer and systems administrator from Sheffield, UK.</p>
        </div>
    </div>
    <Page no-top-padding>
        <h1 v-for="i in 50">Hello, world.</h1>
    </Page>
</template>

<script setup lang="ts">
import Hero from '../components/Hero.vue';
import Page from '../components/Page.vue';
</script>
