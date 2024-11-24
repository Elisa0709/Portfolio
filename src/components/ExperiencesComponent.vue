<script>
export default {
  name: "ExperiencesComponent"
}
</script>

<template>
  <!--  <div class="container" id="experiences">-->
  <!--    <div class="container d-flex justify-content-center align-items-center flex-column">-->
  <!--      <h1 class="display-5 lh-1 mb-0 h1-mobile mb-4 pt-5">Mes expériences</h1>-->
  <!--      <div class="border-opacity-25 line"></div>-->
  <!--    </div>-->
  <!--    <div class="d-flex justify-content-center align-items-center ">-->
  <!--      <img src="/images/experiences.webp"-->
  <!--           alt="Vous pouvez retrouver la liste de mes expériences professionnelles dans la rubrique contact de ce site."-->
  <!--      width="70%">-->
  <!--    </div>-->
  <!--  </div>-->
  <div class="container mb-5 d-flex justify-content-center align-items-center flex-column mt-4">
    <h2 class="display-5 lh-1 mb-0 h1-mobile mb-4 pt-5" id="experiences">Mes expériences</h2>
    <div class="border-opacity-25 line"></div>
  </div>

  <div class="d-flex mobile ms-5 me-5 mb-5 ">
    <div class="d-flex experience-div justify-content-center flex-column shadow-sm rounded-5 p-4 m-2">
      <h3 class="h4">Reconversion professionnelle</h3>
      <p class="">Avril 2024 - aujourd'hui</p>
      <p class="h5 ">Le campus numérique in the Alps - Grenoble</p>
      <p>Titre de concepteur développeur d'applications</p>
<!--      <div class="d-flex justify-content-center align-items-center">-->
<!--        <img width="48" height="48" src="/icons/bottom_arrow.png" alt="chevron-down"/>-->
<!--      </div>-->
    </div>
    <div class="d-flex experience-div justify-content-center flex-column shadow-sm rounded-5 m-2 p-4">
      <h3 class="h4 ">Responsable administrative</h3>
      <p class="">2020 - 2023</p>
      <p class="h5 ">Association Ordi'Toutage - Grenoble</p>
      <p>Création, organisation et animation de cours d'informatique ; gestion de l'association et des financements/partenariats</p>
<!--      <div class="d-flex justify-content-center align-items-center">-->
<!--        <img width="48" height="48" src="/icons/bottom_arrow.png" alt="chevron-down"/>-->
<!--      </div>-->
    </div>
    <div class="d-flex experience-div justify-content-center flex-column shadow-sm rounded-5 p-4 m-2">
      <h3 class="h4">Community manager - service civique</h3>
      <p class="">2020</p>
      <p class="h5 ">Association AAAMI - Échirolles</p>
      <p>communication (site internet, réseaux sociaux), mise en relation des partenaires avec les événements, organisation d’événements</p>
<!--      <div class="d-flex justify-content-center align-items-center">-->
<!--        <img width="48" height="48" src="/icons/bottom_arrow.png" alt="chevron-down"/>-->
<!--      </div>-->
    </div>
  </div>



</template>

<style scoped>
h2, h3, p {
  font-family: "Titillium Web", sans-serif;
}
.line {
  width: 10%;
  border-bottom: rgba(37, 8, 57, 0.74) solid 4px;
  border-radius: 50px;
}
.experience-div{
  width: 100%;
}


@media (max-width: 768px) {

  .line {
    width: 30%;
  }





  .mobile {
    flex-direction: column !important;  /* Empêche l'affichage côte à côte et les place en colonne */
    width: 90% !important;  /* S'assure que chaque div prend toute la largeur */
    margin-bottom: 20px;  /* Espacement entre les divs */
    margin-left: auto !important;
    margin-right: auto !important;
  }
}

</style>