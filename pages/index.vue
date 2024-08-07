<script setup>
useSeoMeta({
    title: "Joshua Noakes",
    description: "I'm a self-taught developer, homelabber and photographer.",
    url: "https://www.joshuanoakes.co.uk"
});

const iconColors = ref(['text-white', 'transition-colors', 'duration-800', 'w-7', 'h-7',]);
</script>

<template>
    <div class="h-screen flex flex-col items-center justify-center bg-fixed bg-cover cursor-default text-center">
        <h1 class="text-4xl font-bold text-white">Hiya, I'm Joshua</h1>
        <p class="text-white mt-2 ml-1 md:ml-0">I'm a self-taught developer, homelabber and photographer.</p>
        <div class="flex justify-between mt-2">
            <div class="flex justify-around items-center mr-5">
                <UButton variant="link" to="mailto:me@joshuanoakes.co.uk" target="_blank">
                    <UIcon name="i-material-symbols-mail" :class="['hover:text-slate-900', ...iconColors]" />
                </UButton>
                <UButton variant="link" to="https://github.com/Joshua-Noakes1" target="_blank">
                    <UIcon name="i-mdi-github" :class="['hover:text-slate-900', ...iconColors]" />
                </UButton>
                <UButton variant="link" to="https://linkedin.com/in/joshua-noakes1" target="_blank">
                    <UIcon name="i-mdi-linkedin" :class="['hover:text-blue-600', ...iconColors]" />
                </UButton>
            </div>
        </div>
    </div>
</template>