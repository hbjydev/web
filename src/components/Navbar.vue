<template>
    <div
        class="hidden md:flex md:fixed w-full bg-default-900 h-16 border-b border-default-900 items-center justify-center z-50 transition-shadow duration-300 ease-in-out"
        :class="{ 'shadow-xl': hasScrolled }"
    >
        <div class="w-full px-6 justify-between flex items-center">
            <span class="font-bold text-white text-lg">Hayden</span>
            <div class="flex items-center gap-2">
                <a class="py-2 px-3 text-sm rounded hover:bg-primary-900 hover:text-primary-300 text-default-300" :href="item.link" v-for="(item, idx) in menuItems" :v-key="idx">
                    {{ item.label }}
                </a>
            </div>
        </div>
    </div>

    <div
        class="fixed md:hidden w-full bg-default-900 h-16 border-b border-default-900 flex items-center justify-center z-50 transition-shadow duration-300 ease-in-out"
        :class="{ 'shadow-xl': hasScrolled }"
    >
        <div class="w-full px-6 justify-between flex items-center">
            <span class="font-bold text-white text-lg">Hayden</span>
            <div class="flex items-center justify-center">
                <button @click="open = !open">
                    <!-- TODO: Replace with icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path v-if="open" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div
        class="flex md:hidden flex-col px-2 py-4 fixed top-16 bg-default-900 z-50 w-full shadow-xl"
        v-if="open"
    >
        <a :href="item.link" v-for="(item, idx) in menuItems" :key="idx">
            <div class="px-4 py-2 hover:bg-primary-900 hover:text-primary-300 rounded-lg">
                {{ item.label }}
            </div>
        </a>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);
const hasScrolled = ref(false);

const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Posts', link: '/posts' },
    { label: 'Projects', link: '/projects' },
    { label: 'GitHub', link: 'https://github.com/hbjydev' },
    { label: 'Twitter', link: 'https://twitter.com/hbjydev' },
];

window.addEventListener('scroll', () => {
    hasScrolled.value = window.scrollY > 0;
});
</script>
