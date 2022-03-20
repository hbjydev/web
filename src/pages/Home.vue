<template>
    <Page>
        <Hero heading="Hey, I'm Hayden." />
        <h1 v-for="i in 50">Hello, world.</h1>
    </Page>
</template>

<script setup lang="ts">
import Hero from '../components/Hero.vue';
import Page from '../components/Page.vue';
</script>
