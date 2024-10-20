<script setup>

import HeroComponent from "./components/HeroComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";
import ProjectsComponent from "./components/ProjectsComponent.vue";
import UpComponent from "./components/UpComponent.vue";
import MenuComponent from "./components/MenuComponent.vue";
import SoftSkills from "./components/SoftSkills.vue";
import PersonnalityComponent from "./components/PersonnalityComponent.vue";
</script>



<template>
<!--  enlever le hoover du titre en affichage smartphone -->
  <HeroComponent/>
  <MenuComponent/>
  <UpComponent/>
  <AboutComponent/>
  <SoftSkills/>
  <SkillsComponent/>
  <PersonnalityComponent/>
  <ProjectsComponent/>
  <div class="div-bottom ">

  </div>
</template>



<style scoped>
.div-bottom{
  margin: 0;
  height:10vh;
}
</style>
