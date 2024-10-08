<script>
export default {
  name: "AboutComponent"
}
</script>

<template>
  <div class="bgGrey">
    <div class="container col-xxl-8 px-4 py-5 ">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <h1 class="display-5  text-white lh-1 mb-0 ">Qui suis-je ?</h1>
        <div class="col-10 col-sm-8 col-lg-4 image-centree-mobile">
          <!--        ////////////////changer la photo/////////////////////////-->
          <img src="#" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-8">
          <!--        ////////////////changer le texte/////////////////////////-->
          <p class="text-white text-justify fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur dolor earum, eius enim explicabo, incidunt inventore laborum molestiae nam nihil nostrum praesentium quas repudiandae saepe suscipit tempora vel voluptate! Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <div class="rounded-4 p-2 mt-3 me-2 d-flex justify-content-center align-items-center soft-skills">
              <p class="text-center mb-0 fw-bold">Investie</p>
            </div>
            <div class="rounded-4 p-2 mt-3 me-2 d-flex justify-content-center align-items-center soft-skills">
              <p class="text-center mb-0 fw-bold">Rigoureuse</p>
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

.bgGrey{
  background-color: #0f0817;
}
.text-justify{
  text-align: justify;
}
.soft-skills {
  width: 100%;
  background-color: rgba(253, 231, 238, 0.74);
}
@media (max-width: 575.98px) {
  .image-centree-mobile {
    margin: auto;
  }
}
</style>