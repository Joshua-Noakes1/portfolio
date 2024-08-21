<script setup>
// get props
const { id, ext, name, date, camera, location, alt, desc } = defineProps(['id', 'ext', 'name', 'date', 'camera', 'location', 'alt', 'desc']);

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

// workout the size needed to fit the title text in the card
const workoutTitleSize = computed(() => {
    console.log(name.length);
    if (name.length > 35) {
        return 'text-sm'
    } else if (name.length > 25) {
        return 'text-md'
    } else if (name.length > 15) {
        return 'text-lg'
    } else {
        return 'text-xl'
    }
});

const isOpen = ref(false);
</script>

<template>
    <UCard v-if="id !== undefined && ext !== undefined" :id="id" :ui="{ body: { padding: 'sm:p-4'} }" class="ml-2 mt-2">
        <PhotoCardImage :id="id" :ext="ext" :alt="alt" :year="dateParts.year" :name="name" :isModal="false" />
        <div class="text-gray-400 mt-2 flex items-center justify-between">
            <div class="flex items-center">
                <UIcon name="i-bx-map-pin" class="text-2xl" />
                <span class="ml-2">{{ name }} ({{ dateParts.year }})</span>
            </div>
            <UButton @click="isOpen = true" class="mt-1" variant="outline" icon="i-majesticons-open" :ui="{ rounded: 'rounded-full' }">View</UButton>
        </div>
    </UCard>

    <UModal v-model="isOpen" :ui="{ width: 'w-full sm:max-w-4xl', container: 'items-center'}">
        <div class="p-4">
            <!-- split down the middle, photo on the left info on the right -->
            <div class="flex flex-col sm:flex-row">
                <div :class="[{'mb-2': desc !== undefined}, {'sm:mb-6': desc !== undefined}, {'mb-2': desc == undefined}, {'sm:mb-0': desc == undefined}, 'sm:w-3/4']">
                    <PhotoCardImage :id="id" :ext="ext" :alt="alt" :year="dateParts.year" :name="name" :isModal="true" />
                    <p class="text-sm text-gray-500 mt-2 text-center sm:text-left">{{ desc }}</p>
                </div>
                <div class="w-fill sm:w-1/4 sm:pl-4 text-center sm:text-right">
                    <h2 :class="[workoutTitleSize, 'font-bold', 'truncate']">{{ name }}</h2>
                    <p class="text-gray-400">{{ dateParts.year }}</p>
                    <span class="text-gray-400 mt-2 flex items-center justify-center sm:justify-end">
                        <UIcon name="i-bi-clock" class="text-2xl" />
                        <span class="ml-2">{{ dateParts.day }}{{ dateParts.ordinal }} {{ dateParts.month }} {{ dateParts.year }}</span>
                    </span>
                    <span class="text-gray-400 mt-2 flex items-center justify-center sm:justify-end">
                        <UIcon name="i-bi-camera" class="text-2xl" />
                        <span class="ml-2">{{ camera }}</span>
                    </span>
                    <span class="text-gray-400 mt-2 flex items-center justify-center sm:justify-end">
                        <UIcon name="i-bx-map-pin" class="text-2xl" />
                        <a v-if="location !== 'Unknown'" :href="googleMapsLink" class="text-blue-400" target="_blank">
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