<template>
    <div class="pt-8 max-w-screen-xl mx-auto w-full">
        <h1 class="text-default-200 text-4xl font-bold mb-4">Projects</h1>
        <p class="font-serif italic mb-8 text-default-200 leading-none">They're made of stuff. And I've done {{ projects.length }} somewhat noticed ones.</p>

        <div v-if="projects.length > 0" :v-key="idx" v-for="(project, idx) in projects">
            <a class="mb-6 flex flex-col md:flex-row gap-2 md:gap-8" :href="project.html_url" target="_blank">
                <div class="md:flex-1 flex flex-col gap-4">
                    <h1 class="text-2xl font-bold">{{ project.name }}</h1>
                </div>
                <div class="md:flex-[2] flex flex-col">
                    <p class="font-serif leading-loose text-sm">{{ project.description }}</p>
                    <div :id="`project-${idx}-stats`" class="flex justify-between items-center h-8">
                        <div class="flex h-8 items-center gap-1 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            {{ project.stargazers_count }}
                        </div>
                        <div class="flex h-8 items-center gap-1 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {{ project.open_issues_count }}
                        </div>
                        <div class="flex h-8 items-center gap-1 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-default-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            {{ project.watchers_count }}
                        </div>
                    </div>
                </div>
            </a>
            <hr v-if="idx != projects.length - 1" class="border-t-2 border-t-default-600 mb-6" />
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Repo {
    name: string;
    license: {
        name: string
    };
    description: string;
    html_url: string;
    stargazers_count: number;
    watchers_count: number;
    open_issues_count: number;
}

const projects = ref<Repo[]>([]);

async function fetchData() {
    const res = await fetch('https://api.github.com/users/hbjydev/repos?sort=pushed&per_page=10');
    const data: Repo[] = await res.json();
    projects.value = data.filter(v => v.stargazers_count >= 1);
}

fetchData();
</script>
