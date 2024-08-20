<script setup>
// get props
const { id, ext, name, date, camera, location, alt } = defineProps(['id', 'ext', 'name', 'date', 'camera', 'location', 'alt']);
// const year = "2024"

// create google maps link and extract date
const googleMapsLink = computed(() => {
    return `https://www.google.com/maps?q=loc:${location.replace(/\s/g, '')}`;
});

const dateParts = computed(() => {
    // work out the date stuff
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = monthNames[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    // work out the ordinal
    if (day % 10 === 1 && day !== 11) {
        var ordinal = 'st';
    } else if (day % 10 === 2 && day !== 12) {
        var ordinal = 'nd';
    } else if (day % 10 === 3 && day !== 13) {
        var ordinal = 'rd';
    } else {
        var ordinal = 'th';
    }

    return {
        day,
        ordinal,
        month,
        year
    }
});

const isOpen = ref(false);
</script>

<template>
    <UCard v-if="id !== undefined && ext !== undefined" :id="id" class="m-1">
        <PhotoCardCardImage :id="id" :ext="ext" :alt="alt" :year="dateParts.year" :name="name" :isModal="false" />
        <div class="text-gray-400 mt-2 flex items-center justify-between">
            <div class="flex items-center">
                <UIcon name="i-bi-chat-right-quote" class="text-2xl" />
                <span class="ml-2">{{ name }} ({{ dateParts.year }})</span>
            </div>
            <UButton @click="isOpen = true" class="mt-1" variant="outline" icon="i-majesticons-open" :ui="{ rounded: 'rounded-full' }">View</UButton>
        </div>
    </UCard>

    <UModal v-model="isOpen" :ui="{ width: 'w-full sm:max-w-4xl' }">
        <div class="p-4">
            <!-- split down the middle, photo on the left info on the right -->
           <div class="flex flex-col sm:flex-row">
                <div class="w-max mb-2 sm:w-3/4 sm:mb-0">
                    <PhotoCardCardImage :id="id" :ext="ext" :alt="alt" :year="dateParts.year" :name="name" :isModal="true" />
                </div>
                <div class="w-fill sm:w-1/4 sm:pl-4 text-right">
                    <h2 class="text-xl font-bold truncate">{{ name }}</h2>
                    <p class="text-gray-400">{{ dateParts.year }}</p>
                    <span class="text-gray-400 mt-2 flex items-center justify-end">
                        <UIcon name="i-bi-clock" class="text-2xl" />
                        <span class="ml-2">{{ dateParts.day }}{{ dateParts.ordinal }} {{ dateParts.month }} {{ dateParts.year }}</span>
                    </span>
                    <span class="text-gray-400 mt-2 flex items-center justify-end">
                        <UIcon name="i-bi-camera" class="text-2xl" />
                        <span class="ml-2">{{ camera }}</span>
                    </span>
                    <span class="text-gray-400 mt-2 flex items-center justify-end">
                        <UIcon name="i-bx-map-pin" class="text-2xl" />
                        <a v-if="location !== 'Unknown'" :href="googleMapsLink" class="text-blue-400 hover:underline" target="_blank">
                            <span class="ml-2">{{ location }}</span>
                        </a>
                        <span v-else class="ml-2">Unknown</span>
                    </span>
                    <UButton @click="isOpen = false" class="mt-4" variant="outline" icon="i-majesticons-close" :ui="{ rounded: 'rounded-full' }">Close</UButton>
                </div>
            </div>
        </div>
    </UModal>
</template>