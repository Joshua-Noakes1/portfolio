<script setup>
const pageRoute = useRoute();
const { to, title, isMobile, needSpace } = defineProps(['to', 'title', 'isMobile', 'needSpace']);
const emit = defineEmits(['closeSidebar']);

// show the right classes depending on where the link is
const linkClasses = computed(() => {
    return [
        // destop
        { 'mr-4': needSpace },
        { 'hidden': !isMobile },
        { 'md:block': !isMobile },
        // mobile
        { 'block': isMobile },
        { 'mb-4': isMobile },

    ]
});

// tell the sidebar to close in the parent navbar
const closeSidebar = () => {
    if (isMobile) emit('closeSidebar', true);
}
</script>

<template>
    <NuxtLink :to="to" :class="linkClasses" @click="closeSidebar()">
        <h2 class="font-semibold text-slate-400 hover:text-slate-200 transition-colors duration-400" :class="{ 'text-slate-200': pageRoute.path === to }">{{ title }}</h2>
    </NuxtLink>
</template>