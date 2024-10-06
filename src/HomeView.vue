<script setup>

import HeroComponent from "./components/HeroComponent.vue";
</script>



<template>
<HeroComponent/>
</template>



<style scoped>
/* S'assure que HomeView prend toute la taille de la page */
.home-view {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
