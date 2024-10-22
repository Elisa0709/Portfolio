<script>
export default {
  name: "ExperiencesComponent"
}
</script>

<template>
  <div class="container" id="experiences">
    <div class="container d-flex justify-content-center align-items-center flex-column">
      <h1 class="display-5 lh-1 mb-0 h1-mobile mb-4 pt-5">Mes expériences</h1>
      <div class="border-opacity-25 line"></div>
    </div>
    <div class="d-flex justify-content-center align-items-center ">
      <img src="/images/experiences.webp"
           alt="Vous pouvez retrouver la liste de mes expériences professionnelles dans la rubrique contact de ce site."
      width="70%">
    </div>
  </div>
</template>

<style scoped>
.line {
  width: 10%;
  border-bottom: rgba(37, 8, 57, 0.74) solid 4px;
  border-radius: 50px;
}
@media (max-width: 768px) {
  img{
    width: 100%;
  }
  .line {
    width: 30%;
  }
}

</style>