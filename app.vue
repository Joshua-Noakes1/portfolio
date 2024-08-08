<script setup>
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
onMounted(() => {
  // vantajs
  CLOUDS({
    el: "#vantajs",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 5.00, // fixes peformance issues
    scaleMobile: 2.00, // ^^
    THREE: THREE
  });
});
</script>

<template>
  <div>
    <NavBar />
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
  <div id="vantajs" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -100;" />
</template>

<style>
body {
  overflow: hidden;
}
</style>