<script setup>
import HomeView from './HomeView.vue'
</script>

<template>
  <HomeView/>
</template>

<style>
/* Suppression des marges par défaut pour que l'app prenne toute la taille de l'écran */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden; /* Empêche le débordement horizontal */
}

h1{
  font-size: 9vw;
}
h2{
  font-size: 3vw;
}
p{
  font-size: 2vw;
}

#app {
  height: 100%;
  width: 100%;
}
</style>
