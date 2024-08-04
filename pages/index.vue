<script setup>
import * as THREE from 'three';

onMounted(async () => {
    if (import.meta.browser) {
        window.THREE = THREE;
        const { default: CLOUDS } = await import("vanta/dist/vanta.clouds.min");
        CLOUDS({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            THREE: window.THREE
        });
    }
})
</script>

<template>
    <div>
        <h1>:3</h1>
        <div id="vanta" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -100;"></div>
    </div>
</template>