<script setup>
useSeoMeta({
    title: 'Joshua Noakes',
    url: 'https://www.joshuanoakes.co.uk'
});
</script>

<template>
    <div class="h-screen flex flex-col items-center justify-center bg-fixed bg-cover hover-normal-mouse">
        <h1 class="text-4xl font-bold text-white">Hiya, I'm Joshua</h1>
        <p class="text-white mt-2 text-center">I'm a self-taught developer, homelabber and photographer.</p>
        <div class="flex justify-between mt-2">
            <div class="flex justify-around items-center mr-5">
                <UButton variant="link" to="mailto:me@joshuanoakes.co.uk" target="_blank">
                    <UIcon name="i-material-symbols-mail" class="text-white hover:text-slate-900 transition-colors duration-800 w-7 h-7" to="mailto:me@joshuanoakes.co.uk" target="_blank" />
                </UButton>
                <UButton variant="link" to="https://github.com/Joshua-Noakes1" target="_blank">
                    <UIcon name="i-mdi-github" class="text-white hover:text-slate-900 transition-colors duration-800 w-7 h-7" />
                </UButton>
                <UButton variant="link" to="https://linkedin.com/in/joshua-noakes1" target="_blank">
                    <UIcon name="i-mdi-linkedin" class="text-white hover:text-blue-600 transition-colors duration-800 w-7 h-7" />
                </UButton>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .hover-normal-mouse:hover {
        cursor: default;
    }
</style>