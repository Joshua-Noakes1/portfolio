<script setup>
const isSidebarOpen = ref(false);
const navBarLinks = [
    { to: '/about', title: 'About Me' },
    { to: '/photos', title: 'Photography' },
    { to: '/blog', title: 'Blog' }
];

const closeSidebar = () => {
    isSidebarOpen.value = false;
}
</script>

<template>
    <div class="absolute top-0 left-0 w-full">
        <UContainer>
            <UCard class="mt-5">
                <template #header>
                    <div class="flex justify-between select-none">
                        <NuxtLink to="/">
                            <h1 class="font-semibold">Joshua Noakes</h1>
                        </NuxtLink>
                        <span class="flex justify-evenly">
                            <UIcon name="i-solar-hamburger-menu-linear" class="md:hidden text-slate-400 hover:text-slate-200 w-6 h-6" @click="isSidebarOpen = true" />

                            <!-- Links -->
                            <span v-for="(link, index) in navBarLinks" :key="index">
                                <NavBarLink :to="link.to" :title="link.title" :needSpace="index !== navBarLinks.length - 1" />
                            </span>
                        </span>
                    </div>
                </template>
            </UCard>

            <!-- Slideover for mobile / vertical devices -->
            <USlideover v-model="isSidebarOpen">
                <UCard class="flex flex-col flex-1 select-none" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                    <template #header>
                        <UButton color="gray" variant="ghost" class="-my-1 float-end" @click="isSidebarOpen = false">
                            <UIcon name="i-heroicons-x-mark-20-solid" class="w-5 h-5" />
                        </UButton>
                    </template>

                    <div class="p-4">
                        <NavBarLink v-for="(link, index) in navBarLinks" :key="index" :to="link.to" :title="link.title" :isMobile="true" @closeSidebar="closeSidebar()" />
                    </div>

                    <template #footer>
                        <p class="text-slate-400">Hiya - Made with <span class="hover:text-pink-200 transition-colors duration-400">Love
                                <UIcon name="i-mdi-cards-heart" class="ml-1 align-middle" />
                            </span>
                        </p>
                    </template>
                </UCard>
            </USlideover>
        </UContainer>
    </div>
</template>