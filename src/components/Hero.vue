<template>
    <div class="my-8 px-2 bg-primary-900 rounded-xl py-16 shadow-lg">
        <h1 class="text-center text-default-200 text-5xl font-bold">{{ props.heading }}</h1>
    </div>
</template>

<script setup lang="ts">
    interface Props {
        heading: string;
    }

    const props = defineProps<Props>();
</script>
