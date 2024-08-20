<script setup>
const { id, ext, alt, year, name, isModal } = defineProps(['id', 'ext', 'alt', 'year', 'name', 'isModal']);
const altTitleText = alt || `An Image taken in ${year} at / in ${name}`;
</script>

<template>
    <NuxtImg provider="cloudinary" :src="`/${id}.${ext}`" :class="[{ 'h-60': !isModal }, { 'object-cover': !isModal }, { 'h-full': isModal }, 'w-full', 'rounded']" loading="lazy" placeholder :alt="altTitleText" :title="altTitleText" />
</template>