<script>
export default {
name: "TrainingComponent"
}
</script>

<template>

  <div class="bgPurple pt-4 pb-4 mt-4" id="training">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center mb-4 flex-column">
        <h2 class="display-5 lh-1 mb-0 h1-mobile mb-4 mt-3 text-white">Détails de la formation</h2>
        <div class="border-opacity-25 line"></div>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-center align-items-center pt-2 mb-2 sentence">
        <div class="text-center mb-3 mb-md-0">
          <p class="fst-italic text-white fs-4">Titre professionnel RNCP 6 <br>Concepteur Développeur d'Applications
            <br> 04/2024 - 02/2026</p>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-center">
          <a href="/pdf/Programme_concepteur_développeur_avancé.pdf" target="_blank" class="btn btn-light m-3">Programme de la formation</a>
          <a href="/pdf/Référentiel_Activités_Compétences_Evaluation_TP_CDA.pdf" download target="_blank" class="btn btn-light m-3">Référentiel du diplôme</a>
        </div>
      </div>
    </div>
    <div class="pt-2 mb-2">
      <p class="text-white fs-5 text-center">Concevoir et développer une application sécurisée organisée en
        couches</p>
      <p class="text-white fs-5 text-center">Architecture, gestion de projets, méthode Agile</p>
      <p class="text-white fs-5 text-center">Préparer le déploiement d’une application sécurisée</p>
    </div>
  </div>


</template>

<style scoped>
.line {
  width: 10%;
  border-bottom: rgba(255, 255, 255, 0.74) solid 4px;
  border-radius: 50px;
}
.sentence{
  margin-left:6vw;
  margin-right:6vw;
}

h1, h2, h3, h4, p {
  font-family: "Titillium Web", sans-serif;
}

.bgPurple {
  background-color: rgba(37, 8, 57, 0.74);
}
@media (max-width: 768px) {

  .line {
    width: 30%;
  }
}

</style>