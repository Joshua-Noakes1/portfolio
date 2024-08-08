<script setup>
useSeoMeta({
    title: "Photography - Joshua Noakes",
    description: "I'm a self-taught developer, homelabber and photographer.",
    url: "https://www.joshuanoakes.co.uk/photos"
});

const test = ref(false);
</script>

<template>
    <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pl-4 pr-4">
        <UCard class="m-1">
            <USkeleton v-if="!test" class="h-60" />
            <CldImage v-if="test" src="jypd6x5xfkaplzuw0wur" class="h-60 rounded" alt="My Awesome Image" />
            <span class="text-gray-400 mt-2 flex items-center">
                <UIcon name="i-bi-chat-right-quote" class="text-2xl" />
                <span class="ml-2">Sierra County, CA (2024)</span>
            </span>
            <!-- <UButton @click="test = !test" class="mt-2">Toggle</UButton> -->
            <UButton class="float-right mb-2" :ui="{ rounded: 'rounded-full' }" icon="i-material-symbols-light-outbound-outline" variant="outline" :trailing="true"> View </UButton>

            <!-- <template #footer>
                <UButton class="float-right mb-2 -mt-2" :ui="{ rounded: 'rounded-full' }" icon="i-material-symbols-light-outbound-outline" variant="outline" />
            </template> -->
        </UCard>
        <!-- <UCard class="m-1">
            <template #header>
                <USkeleton class="h-8 w-[250px]" />
            </template>

            <USkeleton class="h-32 w-[250px]" />

            <template #footer>
                <USkeleton class="h-8 w-[250px]" />
            </template>
        </UCard> -->
    </div>
</template>