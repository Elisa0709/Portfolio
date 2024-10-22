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
          <div class="box shadow-sm p-3 m-2 project mobile-display">
            <img src="/images/jdrProject.webp" alt="programme JDR">
            <div class="hover-overlay d-flex flex-column justify-content-center align-items-center">
              <h2>Jeu de rôle</h2>
              <p class="text-center pt-3 ps-5 pe-5 fs-5">Projet réalisé dans le cadre de l'apprentissage de Java.<br>Incarnez
                un guerrier ou un magicien, trouvez des armes et des potions, combattez les monstres et essayez de vous
                échapper ! </p>
              <a href="https://github.com/Elisa0709/Roll-playing-game" class="btn mt-4 text-white bgPurpleLight"
                 target="_blank" rel="noopener noreferrer">
                Voir sur Github
              </a>
            </div>
            <div class="d-flex justify-content-between align-items-center mobile-button">
              <h3 class="fw-light mt-3 mobile-button">Jeu de rôle<br> <span class="fst-italic fs-5">Java</span></h3>
              <a class=" mt-1 ms-4 mobile-button" href="https://github.com/Elisa0709/Roll-playing-game/" target="_blank"><img width="48" height="48" src="https://img.icons8.com/material-outlined/48/github.png" alt="logo github"/></a>
            </div>

          </div>

          <div class="box shadow-sm p-3 m-2 project">
            <img src="/images/portfolio.webp" alt="image e-boutique">
            <div class="hover-overlay d-flex flex-column justify-content-center align-items-center">
              <h2>Portfolio</h2>
              <p class="text-center pt-3 ps-5 pe-5 fs-5">Projet personnel réalisé avec le framework VueJS 3. Utilisation de JavaScript, HTML, CSS et Bootstrap.</p>
              <a href="https://github.com/Elisa0709/Portfolio" class="btn mt-4 text-white bgPurpleLight"
                 target="_blank">
                Voir sur Github
              </a>
            </div>
            <div class="d-flex justify-content-between align-items-center mobile-button">
              <h3 class="fw-light mt-3 mobile-button">Portfolio<br> <span class="fst-italic fs-5">VueJS</span></h3>
              <a class=" mt-1 ms-4 mobile-button" href="https://github.com/Elisa0709/Portfolio" target="_blank"><img width="48" height="48" src="https://img.icons8.com/material-outlined/48/github.png" alt="logo github"/></a>
            </div>
          </div>

          <div class="box shadow-sm p-3 m-2 project">
            <img src="/images/spirulineShop.webp" alt="Site spiruline">
            <div class="hover-overlay d-flex flex-column justify-content-center align-items-center">
              <h2>Spiruline shop</h2>
              <p class="text-center pt-3 ps-5 pe-5 fs-5">Projet réalisé dans le cadre de l'apprentissage du framework
                Vue 3. Site vitrine permettant de trouver des fournisseurs et revendeurs de spiruline via une API.
                Visualisation de l'emplacement de ces commerçant sur une carte grâce à l'API Leaflet.</p>
              <a href="https://github.com/Elisa0709/Spirulina_shop" class="btn mt-4 text-white bgPurpleLight"
                 target="_blank">
                Voir sur Github
              </a>
              <a href="https://silver-torte-1ffe23.netlify.app/" class="btn mt-4 text-white bgPurpleLight"
                 target="_blank">
                Voir le site
              </a>
            </div>
            <div class="d-flex justify-content-between align-items-center mobile-button">
              <h3 class="fw-light mt-3 mobile-button">Spiruline shop<br> <span class="fst-italic fs-5">VueJS</span></h3>
              <a class=" mt-1 ms-4 mobile-button" href="https://github.com/Elisa0709/Chifoumi" target="_blank"><img width="48" height="48" src="https://img.icons8.com/material-outlined/48/github.png" alt="logo github"/></a>
            </div>
          </div>
          <div class="box shadow-sm p-3 m-2 project">
            <img src="/images/chifoumi.webp" alt="site pierre feuille ciseaux">
            <div class="hover-overlay d-flex flex-column justify-content-center align-items-center">
              <h2>Pierre Feuille Ciseaux</h2>
              <p class="text-center pt-3 ps-5 pe-5 fs-5">Projet réalisé dans le cadre de l'apprentissage de JQuery.</p>
              <a href="https://github.com/Elisa0709/Chifoumi" class="btn mt-4 text-white bgPurpleLight" target="_blank"
              >
                Voir sur Github
              </a>
              <a href="https://elisaleroy-chifoumi.netlify.app/" class="btn mt-4 text-white bgPurpleLight"
                 target="_blank"
              >
                Voir le site
              </a>
            </div>
            <div class="d-flex justify-content-between align-items-center mobile-button">
              <h3 class="fw-light mt-3 mobile-button">Pierre Feuille Ciseaux<br> <span class="fst-italic fs-5">JS & JQuery</span></h3>
              <a class=" mt-1 ms-4 mobile-button" href="https://github.com/Elisa0709/Chifoumi" target="_blank"><img width="48" height="48" src="https://img.icons8.com/material-outlined/48/github.png" alt="logo github"/></a>
            </div>
          </div>

          <div class="box shadow-sm p-3 m-2 project">
            <img src="/images/fruitShop.webp" alt="image e-boutique">
            <div class="hover-overlay d-flex flex-column justify-content-center align-items-center">
              <h2>E-boutique de fruits</h2>
              <p class="text-center fs-5 pt-3 ps-5 pe-5">Projet réalisé dans le cadre de PHP et Laravel.<br> Utilisation des formulaires et de la session, connexion avec une base de donnée MySql créée avec phpMyAdmin.  </p>
              <a href="https://github.com/Elisa0709/Fruits-shop" class="btn mt-4 text-white bgPurpleLight"
                 target="_blank" rel="noopener noreferrer">
                Voir sur Github
              </a>
            </div>
            <div class="d-flex justify-content-between align-items-center mobile-button">
              <h3 class="fw-light mt-3 mobile-button">E-boutique de fruits <br> <span class="fst-italic fs-5">PHP & Laravel</span></h3>
              <a class=" mt-1 ms-4 mobile-button" href="https://github.com/Elisa0709/Fruits-shop" target="_blank"><img width="48" height="48" src="https://img.icons8.com/material-outlined/48/github.png" alt="logo github"/></a>
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
::selection {
  background-color: #250839;
  color: white;
}
img {
  width: 30vw;
}
.line {
  width: 10%;
  border-bottom: rgba(37, 8, 57, 0.74) solid 4px;
  border-radius: 50px;
}
.projectsContainer {
  width: 70vw;
}
.bgPurpleLight {
  background-color: rgb(124, 65, 168);
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
.mobile-button {
  display: none; /* Affiche le bouton uniquement sur mobile */
}

@media (max-width: 768px) {
  .project {
    width: 100%;
    margin: 10px 0;
  }
  img {
    width: 100%;
  }
  .projectsContainer {
    width: 95vw;
  }
  .line {
    width: 30%;
  }
  .hover-overlay {
    opacity: 0 !important;
    pointer-events: none;
  }

  .mobile-button {
    display: block; /* Affiche le bouton uniquement sur mobile */
  }

}

</style>