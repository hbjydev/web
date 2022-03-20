<template>
    <div class="max-w-screen-xl mx-auto w-full px-6 flex-grow flex flex-col" :class="{ 'pt-8': !noTopPadding }">
        <div class="flex flex-col" v-if="title">
            <h1 class="text-default-200 text-4xl font-bold mb-4">{{ title }}</h1>
            <p class="font-serif italic mb-8 text-default-200 leading-none">{{ subtitle }}</p>
        </div>

        <div class="flex-grow flex flex-col">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title?: string;
    subtitle?: string;
    noTopPadding?: boolean;
}

const { noTopPadding = false, title, subtitle } = defineProps<Props>();
</script>
