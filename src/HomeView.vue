<script setup>

import HeroComponent from "./components/HeroComponent.vue";
import SoftSkills from "./components/SoftSkills.vue";
import AboutComponent from "./components/AboutComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";
</script>



<template>
  <HeroComponent/>
  <AboutComponent/>
  <SkillsComponent/>
  <div class="div-bottom ">

  </div>
</template>



<style scoped>
.div-bottom{
  margin: 0;
  height:10vh;
  background-color: #0f0817;
}
</style>
