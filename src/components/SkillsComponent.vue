<script>
export default {
  name: "SkillsComponent",
  data() {
    return {
      // Définir les données du composant ici
    };
  },

}
</script>

<template>
  <div class="bgPurple" id="skills">
    <div class="container mb-5 d-flex justify-content-center align-items-center flex-column">
      <h1 class="display-5 lh-1 mb-0 h1-mobile mb-4 text-white pt-5">Compétences</h1>
      <div class="border-opacity-25 line"></div>
    </div>

    <div class="container ">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row g-0 mb-4 content-section active">
              <div class="col-12 col-md-2">
                <div class="emptyDiv"></div> <!-- Div vide -->
              </div>
              <div class="col-6 col-md-2">
                <div class="bgGrey text-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 48 48">
                    <path fill="#d43a02"
                          d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999	c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"></path>
                    <path fill="#d43a02"
                          d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743	s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"></path>
                    <linearGradient id="P9ujQJgz7XN9Qbny9S64Ha_Pd2x9GWu9ovX_gr1" x1="22.677" x2="30.737" y1="21.174"
                                    y2="43.318" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#5c65d6"></stop>
                      <stop offset=".999" stop-color="#464eb0"></stop>
                    </linearGradient>
                    <path fill="url(#P9ujQJgz7XN9Qbny9S64Ha_Pd2x9GWu9ovX_gr1)"
                          d="M32.084,25.055c1.754-0.394,3.233,0.723,3.233,2.01c0,2.901-4.021,5.643-4.021,5.643 s6.225-0.742,6.225-5.505C37.521,24.053,34.464,23.266,32.084,25.055z M29.129,27.395c0,0,1.941-1.383,2.458-1.902 c-4.763,1.011-15.638,1.147-15.638,0.269c0-0.809,3.507-1.638,3.507-1.638s-7.773-0.112-7.773,2.181 C11.683,28.695,21.858,28.866,29.129,27.395z"></path>
                    <linearGradient id="P9ujQJgz7XN9Qbny9S64Hb_Pd2x9GWu9ovX_gr2" x1="19.498" x2="27.296" y1="22.77"
                                    y2="44.196" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#5c65d6"></stop>
                      <stop offset=".999" stop-color="#464eb0"></stop>
                    </linearGradient>
                    <path fill="url(#P9ujQJgz7XN9Qbny9S64Hb_Pd2x9GWu9ovX_gr2)"
                          d="M27.935,29.571 c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"></path>
                    <linearGradient id="P9ujQJgz7XN9Qbny9S64Hc_Pd2x9GWu9ovX_gr3" x1="18.698" x2="26.59" y1="23.455"
                                    y2="45.14" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#5c65d6"></stop>
                      <stop offset=".999" stop-color="#464eb0"></stop>
                    </linearGradient>
                    <path fill="url(#P9ujQJgz7XN9Qbny9S64Hc_Pd2x9GWu9ovX_gr3)"
                          d="M18.686,32.739 c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"></path>
                    <linearGradient id="P9ujQJgz7XN9Qbny9S64Hd_Pd2x9GWu9ovX_gr4" x1="18.03" x2="25.861" y1="24.198"
                                    y2="45.712" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#5c65d6"></stop>
                      <stop offset=".999" stop-color="#464eb0"></stop>
                    </linearGradient>
                    <path fill="url(#P9ujQJgz7XN9Qbny9S64Hd_Pd2x9GWu9ovX_gr4)"
                          d="M36.281,36.632 c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839 C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"></path>
                    <linearGradient id="P9ujQJgz7XN9Qbny9S64He_Pd2x9GWu9ovX_gr5" x1="20.725" x2="28.228" y1="24.582"
                                    y2="45.197" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#5c65d6"></stop>
                      <stop offset=".999" stop-color="#464eb0"></stop>
                    </linearGradient>
                    <path fill="url(#P9ujQJgz7XN9Qbny9S64He_Pd2x9GWu9ovX_gr5)"
                          d="M39,38.604 c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"></path>
                  </svg>
                  <h4 class="card-title">Java</h4>
                </div>
              </div>
              <div class="col-6 col-md-2">
                <div class="bgGrey text-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="90" height="90" viewBox="0 0 48 48">
                    <path fill="#8bc34a"
                          d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"></path>
                    <path fill="#fff"
                          d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"></path>
                  </svg>
                  <h4 class="card-title">Spring</h4>
                </div>
              </div>
              <div class="col-6 col-md-2">
                <div class="bgGrey text-center mb-2">
                  <img width="96" height="96"
                       src="https://img.icons8.com/external-those-icons-flat-those-icons/96/external-PHP-programming-and-development-those-icons-flat-those-icons.png"
                       alt="icon PHP"/>                <h4 class="card-title">PHP</h4>
                </div>
              </div>
              <div class="col-6 col-md-2">
                <div class="bgGrey text-center mb-2">
                  <img width="96" height="96" src="/images/iconLaravel.webp" alt="icon laravel"/>
                  <h4 class="card-title">Laravel</h4>
                </div>
              </div>
              <div class="col-12 col-md-2">
                <div class="emptyDiv mb-2"></div> <!-- Div vide -->
              </div>
            </div>
          </div>


          <div class="carousel-item">
            <div class="row g-0 mb-4 content-section">
              <div class="col-12 col-md-2">
                <div class="emptyDiv"></div> <!-- Div vide -->
              </div>
              <div class="col-6 col-md-2">
                <div class="bgGrey text-center mb-2">
                  <img width="96" height="96" src="https://img.icons8.com/color/96/javascript--v1.png"
                       alt="icon javascript"/>
                  <h4 class="card-title">JavaScript</h4>
                </div>
              </div>
              <div class="col-6 col-md-2">
                <div class="bgGrey text-center mb-2">
                  <img width="96" height="96" src="https://img.icons8.com/color/96/vue-js.png" alt="icon vue-js"/>
                  <h4 class="card-title">Vue JS</h4>
                </div>
              </div>
              <div class="col-6 col-md-2 mb-2">
                <div class="bgGrey text-center">
                  <img width="96" height="96"
                       src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-color-tal-revivo.png"
                       alt="icon JQuery"/>
                  <h4 class="card-title">JQuery</h4>
                </div>
              </div>
              <div class="col-6 col-md-2 mb-2">
                <div class="bgGrey text-center">
                  <img width="96" height="96" src="https://img.icons8.com/color/96/html-5--v1.png" alt="icon html 5"/>
                  <h4 class="card-title">HTML</h4>
                </div>
              </div>
              <div class="col-12 col-md-2">
                <div class="emptyDiv mb-2"></div> <!-- Div vide -->
              </div>
            </div>
          </div>


          <div class="carousel-item">
            <div class="row g-0 content-section">
              <div class="col-12 col-md-2">
                <div class="emptyDiv"></div> <!-- Div vide -->
              </div>
              <div class="col-6 col-md-2">
                <div class="bgGrey text-center">
                  <img width="96" height="96" src="https://img.icons8.com/fluency/96/css3.png" alt="icon css3"/>
                  <h4 class="card-title">HTML</h4>
                </div>
              </div>
              <div class="col-6 col-md-2">
                <div class="bgGrey text-center">
                  <img width="96" height="96" src="https://img.icons8.com/fluency/96/bootstrap.png"
                       alt="icon bootstrap"/>
                  <h4 class="card-title">Bootstrap</h4>
                </div>
              </div>
              <div class="col-6 col-md-2 mt-3">
                <div class="bgGrey text-center">
                  <img width="90" height="90"
                       src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/external-SQL-development-files-those-icons-lineal-color-those-icons.png"
                       alt="icon SQL"/>
                  <h4 class="card-title">SQL</h4>
                </div>
              </div>
              <div class="col-6 col-md-2">
                <div class="bgGrey text-center">

                </div>
              </div>
              <div class="col-12 col-md-2  ">
                <div class="emptyDiv"></div> <!-- Div vide -->
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div><h2 class="text-center fs-3 mb-5 text-white">Langages et Frameworks</h2></div>
      <div class="container d-flex justify-content-center align-items-center flex-column">
      <div class="border-opacity-25 light-line"></div>
      </div>

    </div>
    <div class="container">
      <div class="row mt-5 g-0">
        <div class="col-12 col-md-2 bg-">
          <div class="emptyDiv"></div>
        </div>
        <div class="col-6 col-md-2">
          <div class="bgGrey text-center">
            <img width="96" height="96" src="https://img.icons8.com/color/96/git.png" alt="icon git"/>
            <h4 class="card-title">Git</h4>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="bgGrey text-center">
            <img width="96" height="96" src="/images/iconGitHub.webp" alt="github"/>
            <h4 class="card-title">Github</h4>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="bgGrey text-center">
            <img width="96" height="96" src="https://img.icons8.com/color/96/visual-studio-code-2019.png"
                 alt="visual-studio-code-2019"/>
            <h4 class="card-title">VS Code</h4>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="bgGrey text-center">
            <img width="96" height="96" src="/images/iconJetBrains.webp" alt="visual-studio-code-2019"/>
            <h4 class="card-title">suite Jet Brains</h4>
          </div>
        </div>
        <div class="col-12 col-md-2 " id="test">
          <div class="emptyDiv"></div> <!-- Div vide -->
        </div>
      </div>
      <div><h2 class="fs-3 text-center text-white  mb-5 mt-5 ">Gestionnaires de code & software </h2></div>
    </div>
    <div class="container d-flex justify-content-center align-items-center flex-column">
      <div class="border-opacity-25 light-line"></div>
    </div>
  </div>



</template>

<style scoped>
h1, h2, h3, h4, p {
  font-family: "Titillium Web", sans-serif;
}

h4 {
  font-weight: lighter;
  color: white;
}

.bgPurple {
  background-color: rgba(37, 8, 57, 0.74);
}

.line {
  width: 10%;
  border-bottom: white solid 4px;
  border-radius: 50px;
}


@media (max-width: 768px) {
  img {
    width: 80px;
    height: 80px;
  }
}
</style>