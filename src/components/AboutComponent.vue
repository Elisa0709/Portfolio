<script>
export default {
  name: "AboutComponent"
}
</script>

<template>
  <div class="bgGrey">
    <div class="container col-xxl-8 px-4 py-5 ">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-4 image-center-mobile">
          <!--        ////////////////changer la photo/////////////////////////-->
          <img src="/images/profil.webp" class="d-block mx-lg-auto img-fluid image-center-mobile"
               alt="Photo Elisa Leroy" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-8">

          <h1 class="display-5 lh-1 mb-0 h1-mobile mb-4 ">Qui suis-je ?</h1>
          <p class="text-justify">J'ai entrepris, en avril 2024, une reconversion professionnelle dans
            le but de me former au titre de Concepteur, Développeur d'Applications au Campus Numérique in the Alps de
            Grenoble.<br>
            Apprendre auprès de ce centre de formation me permet d'acquérir de solides compétences et la capacité à
            m'adapter à différentes technologies.
            Dans le but d'approfondir mon apprentissage et de mettre à profit mes compétences déjà acquises, je
            recherche un contrat d'apprentissage d'une durée de 12 mois à partir du début d'année 2025. À raison de 2
            semaines au campus puis 2 semaines en entreprise, ce rythme évoluera en augmentant le temps passé en
            entreprise.<br>
            Forte de mes expériences, je possède de nombreuses qualités. Aussi à l'aise en équipe qu'en autonomie, je
            m'efforce de cultiver la communication, la bienveillance et l'esprit d'équipe tout en appliquant une
            méthodologie rigoureuse et organisée.<br>
            Je serais ravie de vous démontrer ma motivation et mon sérieux lors d'un entretien.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <div class="rounded-4 p-2 mt-3 me-2 d-flex justify-content-center align-items-center soft-skills">
              <p class="text-center mb-0 fw-bold">Investie</p>
            </div>
            <div class="rounded-4 p-2 mt-3 me-2 d-flex justify-content-center align-items-center soft-skills">
              <p class="text-center mb-0 fw-bold">Polyvalente</p>
            </div>
            <div class="rounded-4 p-2 mt-3 me-2 d-flex justify-content-center align-items-center soft-skills">
              <p class="text-center mb-0 fw-bold">Bienveillante</p>
            </div>
            <div class="rounded-4 p-2 mt-3 me-2 d-flex justify-content-center align-items-center soft-skills">
              <p class="text-center mb-0 fw-bold">Esprit d'équipe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1, h2, p {
  font-family: "Titillium Web", sans-serif;
}
p{
 font-size: 110%;
}
.text-justify {
  text-align: justify;
}

.soft-skills {
  width: 100%;
  background-color: rgba(82, 53, 131, 0.25);
}

@media (max-width: 768px) {
  .image-center-mobile {
    margin: auto;
  }

  .h1-mobile {
    font-size: 5vh;
    text-align: center;
    margin-top: 3%;

  }
}

</style>