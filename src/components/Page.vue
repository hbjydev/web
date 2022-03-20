<template>
    <div class="pt-8 max-w-screen-xl mx-auto w-full">
        <div class="flex flex-col" v-if="props.title">
            <h1 class="text-default-200 text-4xl font-bold mb-4">{{ props.title }}</h1>
            <p class="font-serif italic mb-8 text-default-200 leading-none">{{ props.subtitle }}</p>
        </div>

        <div>
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title?: string;
    subtitle?: string;
}

const props = defineProps<Props>();
</script>
