<template>
    <Page>
        <div class="flex-grow flex flex-col justify-center gap-4">
            <h1 class="text-4xl font-bold text-default-200">{{ code }}</h1>
            <p class="text-xl">{{ messages[code] }}</p>
        </div>
    </Page>
</template>

<script setup lang="ts">
import Page from '../components/Page.vue';
const { code } = defineProps<{code: string}>();

const messages = {
    '404': 'Uh-oh, looks like you found a page that doesn\'t exist!',
} as { [key: string]: string };
</script>
