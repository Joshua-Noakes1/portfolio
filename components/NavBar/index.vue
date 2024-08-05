<template>
    <UContainer>
        <UCard class="mt-5">
            <template #header>
                <div class="flex justify-between">
                    <NuxtLink to="/">
                        <h1 class="font-semibold">Joshua</h1>
                    </NuxtLink>
                    <span>
                        <UButton class="md:visible invisible" to="https://res.cloudinary.com/tigersoot/image/upload/v1722800242/cv.pdf" target="_blank">
                            <Icon name="grommet-icons:github" size="20px" />
                        </UButton>
                        <!-- <UButton class="ml-1" :title="`Current Colour Prefrence: ${$colorMode.preference.toString().charAt(0).toUpperCase()}${$colorMode.preference.toString().slice(1).toLowerCase()}`" @click="switchColour()">
                            <Icon :name="`heroicons:${$colorMode.preference === 'system' ? 'computer-desktop-20-solid' : $colorMode.value === 'dark' ? 'moon' : 'sun'}`" size="20px" />
                        </UButton>
                        <UButton v-if="isLoggedIn" class="ml-1" @click="signUserOut()" target="_blank" title="Log Out">
                            <Icon name="solar:square-arrow-right-broken" size="20px" />
                        </UButton> -->
                    </span>
                </div>
            </template>
        </UCard>
    </UContainer>
</template>