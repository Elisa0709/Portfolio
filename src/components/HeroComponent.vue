<script>
export default {
  name: "HeroComponent",
  methods: {
    scrollToId(id) {
      // Si l'élément avec l'ID 'test' est dans un autre composant monté, on peut y accéder directement avec document
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({behavior: 'smooth'});
      }
    }
  }
}

</script>

<template>
  <div class="video-container" id="hero">
    <!-- Vidéo de fond -->
    <video autoplay muted loop class="video-background">
      <source src="/video/heroVideo.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>

    <div class=" h-100 d-flex align-items-center">
      <div class="row w-100 justify-content-center">
        <div class="col-lg-1 col-md-0"></div>
        <div class="row h-100 justify-content-center align-items-center">
          <div class="d-flex flex-column justify-content-center text-center">
            <h1 class="text-white text-center">Elisa Leroy</h1>
            <h2 class="text-white text-center">Apprentissage</h2>
            <h3 class="text-white text-center mt-2">Concepteur Développeur d'Applications</h3>

            <div class="d-flex justify-content-center mt-4">
              <a href="https://github.com/Elisa0709" target="_blank" class="mx-2">
                <img src="/icons/iconGitHub.webp" width="54" alt="icon Github" class="icon">
              </a>
              <a href="https://www.linkedin.com/in/elisa-leroy-6b352a2a9/" target="_blank" class="mx-2">
                <img src="/icons/linkedin.webp" width="54" alt="icon LinkedIn" class="icon">
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
  <div class="row justify-content-center d-none d-sm-block pt-4 pb-4" id="navBarre">
    <div class="col-12 d-flex justify-content-center align-items-center">
      <div class=" d-flex justify-content-between ">
        <button @click = "scrollToId('about')" class=" mx-2 shadow-sm"><span class="fs-4">À propos</span></button>
        <button @click = "scrollToId('skills')" class=" mx-2 shadow-sm"><span class="fs-4">Compétences</span></button>
        <button @click = "scrollToId('projects')" class=" mx-2 shadow-sm"><span class="fs-4">Projets</span></button>
        <button @click = "scrollToId('training')" class=" mx-2 shadow-sm"><span class="fs-4">Formation</span></button>
        <button @click = "scrollToId('experiences')" class=" mx-2 shadow-sm"><span class="fs-4">Expériences</span></button>
        <button @click = "scrollToId('training')" class=" mx-2 shadow-sm"><span class="fs-4">Détails de la formation</span></button>

        <button @click = "scrollToId('contact')" class=" mx-2 shadow-sm"><span class="fs-4">Contact</span></button>
      </div>
    </div>
  </div>


</template>

<style scoped>
::selection {
  background-color: #250839;
  color: white;
}
h1, h2, p {
  margin: 0;
  font-family: "Titillium Web", sans-serif;
  text-align: left;
}

p {
  font-size: 1.5vw;
  font-weight: lighter;
}

h1 {
  font-size: 8vw;
  font-weight: lighter;
}

h2 {
  font-size: 3vw;
}

h2:hover {
  font-size: 3.5vw;
}

h3 {
  font-size: 2vw;
  text-align: left;
}

.video-container {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
}


button {
  border: none;
  background-color: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  padding: 10px 20px;
}

button:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.25);
  transform: translateY(-2px);
  background-color: rgba(82, 53, 131, 0.06);
}
button:active {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transform: translateY(4px);
  background-color: rgba(82, 53, 131, 0.25);

}

/* Smartphone */
@media (max-width: 768px) {

  .icon {
    width: 4.5vh;
  }


  h3 {
    font-size: 4vw;
    font-weight: lighter;
    margin-top: 7px;
  }

  h1 {
    font-size: 14vw;
    font-weight: lighter;
  }

  h2 {
    font-size: 6vw;
  }
  .video-container {
    position: relative;
    height: 50vh;
    width: 100vw;
    overflow: hidden;
  }
}


</style>