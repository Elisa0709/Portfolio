<script>
export default {
  name: "ProjectsComponent"
}
</script>

<template>
  <div class="d-flex justify-content-center align-items-center">
    <div id="projects" class="projectsContainer">
      <div class="container mb-5 d-flex justify-content-center align-items-center flex-column">
        <h1 class="display-5 lh-1 mb-0 h1-mobile mb-4 pt-5">Mes projets</h1>
        <div class="border-opacity-25 line"></div>
      </div>

      <div class="container">
        <div class="d-flex flex-wrap justify-content-between">
          <div class="box  p-3 m-2 project">
            <img src="/images/jdrProject.webp" alt="programme JDR">
            <div class="hover-overlay d-flex flex-column justify-content-center align-items-center">
              <h2>Jeu de rôle</h2>
              <p class="text-center pt-3 ps-5 pe-5 fs-5">Projet réalisé dans le cadre de l'apprentissage de Java.<br>Incarnez un guerrier ou un magicien, trouvez des armes et des potions, combattez les monstres et essayez de vous échapper ! </p>
              <a href="https://github.com/Elisa0709/Roll-playing-game" class="btn mt-4 text-white bgPurpleLight" target="_blank" rel="noopener noreferrer">
                Voir sur Github
              </a>
            </div>
          </div>

          <div class="box  p-3 m-2 project">
            <img src="/images/spirulineShop.webp" alt="Site spiruline">
            <div class="hover-overlay d-flex flex-column justify-content-center align-items-center">
              <h2>Boutique de spiruline</h2>
              <p class="text-center pt-3 ps-5 pe-5 fs-5">Projet réalisé dans le cadre de l'apprentissage du framework Vue 3. Site vitrine permettant de trouver des fournisseurs et revendeurs de spiruline via une API. Visualisation de l'emplacement de ces commerçant sur une carte grâce à l'API Leaflet.</p>
              <a href="https://github.com/Elisa0709/Spirulina_shop" class="btn mt-4 text-white bgPurpleLight" target="_blank" rel="noopener noreferrer">
                Voir sur Github
              </a>
              <a href="https://silver-torte-1ffe23.netlify.app/" class="btn mt-4 text-white bgPurpleLight" target="_blank" rel="noopener noreferrer">
                Voir le site
              </a>
            </div>
          </div>

          <div class="box  p-3 m-2 project">
            <img src="/images/chifoumi.webp" alt="">
            <div class="hover-overlay d-flex flex-column justify-content-center align-items-center">
              <h2>Jeu de rôle</h2>
              <p class="text-center pt-3 ps-5 pe-5">Projet réalisé dans le cadre de l'apprentissage du framework Vue 3.<br>Site vitrine permettant de trouver des fournisseurs et revendeurs de spiruline via une API. Visualisation de l'emplacement de ces commerçant sur une carte grâce à l'API Leaflet.</p>
              <a href="https://github.com/Elisa0709/Roll-playing-game" class="btn mt-4 text-white bgPurpleLight" target="_blank" rel="noopener noreferrer">
                Voir sur Github
              </a>
            </div>
          </div>

          <div class="box p-3 m-2 project">
            <img src="/images/jdrProject.webp" alt="">
            <div class="hover-overlay d-flex flex-column justify-content-center align-items-center">
              <h2>Jeu de rôle</h2>
              <p class="text-center pt-3 ps-5 pe-5">Projet réalisé dans le cadre de l'apprentissage de Java.<br>Incarnez un guerrier ou un magicien, trouvez des armes et des potions, combattez les monstres et essayez de vous échapper ! </p>
              <a href="https://github.com/Elisa0709/Roll-playing-game" class="btn mt-4 text-white bgPurpleLight" target="_blank" rel="noopener noreferrer">
                Voir sur Github
              </a>
            </div>
          </div>


        </div>
      </div>
    </div>


  </div>

  <!--  -->
  <!--  ajouter des badges pour identifiers les langages utilisés pour chaque proejts-->
  <!--  https://getbootstrap.com/docs/5.3/examples/badges/-->

</template>

<style scoped>
img{
  width:30vw;
}
.line {
  width: 10%;
  border-bottom: rgba(37, 8, 57, 0.74) solid 4px;
  border-radius: 50px;
}

.projectsContainer {
  width: 70vw;
}

.bgPurpleLight{
  background-color: rgb(124, 65, 168);
}
.bgBlue{
  background-color: #1666c0;
}



.project {
  position: relative;
  overflow: hidden;
}

.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(37, 8, 57, 0.74);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project:hover .hover-overlay {
  opacity: 1;
}

</style>