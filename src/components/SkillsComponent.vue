<script>
export default {
  name: "SkillsComponent",
  data() {
    return {

    };
  },

}
</script>

<template>
  <div class="skillsContainer m-auto flex-column" id="skills">

    <div class="container mb-5 d-flex justify-content-center align-items-center flex-column">
      <h2 class="display-5 lh-1 mb-0 h1-mobile mb-4  pt-5">Compétences</h2>
      <div class="border-opacity-25 line"></div>
      <p class="pt-4 fs-4 fst-italic sousTitre">Listes des compétences acquises à l'issue de la formation.</p>

    </div>

    <div class="container m-auto line1 d-flex justify-content-center flex-column mb-5 pb-4 shadow-sm rounded-5">
      <h3 class="text-center">Backend</h3>
      <div class="d-flex flex-wrap justify-content-center">
        <div class="box  p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png" alt="logo Java"/>
          <h4 class="text-center">Java</h4>
        </div>
        <div class="box  p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/color/96/spring-logo.png" alt="logo Spring"/>
          <h4 class="text-center">Spring</h4>
        </div>
        <div class="box  p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/officel/160/php-logo.png" alt="logo php"/>
          <h4 class="text-center">PHP</h4>
        </div>
        <div class="box  p-3 m-2">
          <img width="96" height="96" src="/icons/iconLaravel.webp" alt="php-logo"/>
          <h4 class="text-center">Laravel</h4>
        </div>
      </div>
    </div>



    <div class="container m-auto line1 d-flex justify-content-center flex-column mb-5 pb-4 shadow-sm rounded-5">
      <h3 class="text-center mt-3">Frontend</h3>
      <div class="d-flex flex-wrap justify-content-center">
        <div class="box p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/color/96/javascript--v1.png" alt="logo JavaScript"/>
          <h4 class="text-center">JavaScript</h4>
        </div>
        <div class="box p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/color/96/vue-js.png" alt="logo Vue.js"/>
          <h4 class="text-center">Vue JS</h4>
        </div>
        <div class="box p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-angular-a-typescript-based-open-source-web-application-framework-logo-shadow-tal-revivo.png" alt="logo angular"/>
          <h4 class="text-center">Angular</h4>
        </div>
        <div class="box p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-color-tal-revivo.png" alt="logo Jquery"/>
          <h4 class="text-center">Jquery</h4>
        </div>
        <div class="box p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/color/96/html-5--v1.png" alt="logo HTML5"/>
          <h4 class="text-center">HTML</h4>
        </div>
        <div class="box p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/fluency/96/css3.png" alt="logo CSS3"/>
          <h4 class="text-center">CSS</h4>
        </div>
        <div class="box p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/fluency/96/bootstrap.png" alt="logo Bootstrap"/>
          <h4 class="text-center">Bootstrap</h4>
        </div>
      </div>
    </div>


    <div class="container m-auto line1 d-flex justify-content-center flex-column mb-5 pb-4 shadow-sm rounded-5">
      <h3 class="text-center mt-3">Autres</h3>
      <div class="d-flex flex-wrap justify-content-center">
        <div class="box d-flex justify-content-center flex-column align-items-center p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/ios/100/sql.png" alt="logo sql"/>
          <h4 class="text-center">SQL</h4>
        </div>
        <div class="box d-flex justify-content-center flex-column align-items-center p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/color/96/git.png" alt="logo git"/>
          <h4 class="text-center">Git</h4>
        </div>
        <div class="box d-flex justify-content-center flex-column align-items-center p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/material-outlined/96/github.png" alt="logo github"/>
          <h4 class="text-center">Github</h4>
        </div>
        <div class="box d-flex justify-content-center flex-column align-items-center p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/fluency/96/docker.png" alt="logo docker"/>
          <h4 class="text-center">Docker</h4>
        </div>



        <div class="box d-flex justify-content-center flex-column align-items-center p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/ios-filled/100/lock-2.png" alt="logo cadenas"/>
          <h4 class="text-center">Sécurité</h4>
        </div>
        <div class="box d-flex justify-content-center flex-column align-items-center p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/ios/100/drafting-compass2.png" alt="logo compas"/>
          <h4 class="text-center">Architecture</h4>
        </div>
        <div class="box d-flex justify-content-center flex-column align-items-center p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/fluency/96/management.png" alt="logo management"/>
          <h4 class="text-center">Gestion de projet</h4>
        </div>
        <div class="box d-flex justify-content-center flex-column align-items-center p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/fluency/96/thin-client.png" alt="logo réseaux"/>
          <h4 class="text-center">Déploiement</h4>
        </div>
        <div class="box d-flex justify-content-center flex-column align-items-center p-3 m-2">
          <img width="96" height="96" src="https://img.icons8.com/fluency/96/sprint-iteration.png" alt="logo sprint-iteration"/>
          <h4 class="text-center">Agile</h4>
        </div>
      </div>
    </div>

  </div>


</template>

<style scoped>
h1, h2, h3, h4, p {
  font-family: "Titillium Web", sans-serif;
}

h3{
  color: rgba(37, 8, 57, 0.74);
}

.skillsContainer {
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1, h2, h3, h4, p {
  font-family: "Titillium Web", sans-serif;
}
::selection {
  background-color: #250839;
  color: white;
}
.line {
  width: 10%;
  border-bottom: rgba(37, 8, 57, 0.74) solid 4px;
  border-radius: 50px;
}


@media (max-width: 768px) {
  img {
    width: 80px;
    height: 80px;
  }
  .sousTitre{
    text-align: center;
  }
  .skillsContainer {
    width: 100%;
    display: flex;
  }
  .line {
    width: 30%; /* Augmente la largeur de la ligne sous le titre pour plus de visibilité sur mobile */
  }
}
</style>