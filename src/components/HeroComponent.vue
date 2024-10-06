<script>
export default {
  name: "HeroComponent"
}
</script>

<template>
  <div class="video-container">
    <!-- Vidéo de fond -->
    <video autoplay muted loop class="video-background">
      <source src="/video/heroVideo.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>

    <!-- Texte au-dessus de la vidéo -->
    <div class="content-overlay">
      <h1>Elisa Leroy</h1>
      <h2>Apprentissage</h2>
      <h3>
        Concepteur Développeur d'Applications
      </h3>
      <div class="container mt-5 d-flex justify-content-center">
        <div class="container  px-0">
          <a href="https://github.com/Elisa0709" target="_blank" class="mx-2 "><img src="/icons/github.webp" alt="icon Github" class="icon"></a>
          <a href="https://www.linkedin.com/in/elisa-leroy-6b352a2a9/" target="_blank" class="mx-2"><img src="/icons/linkedin.webp" alt="icon Github" class="icon"></a>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
h1, h2, p {
  margin: 0;
  padding: 10px;
  border-radius: 5px;
  font-family: "Titillium Web", sans-serif;
}
p {
  font-size: 1.5vw;
  font-weight: lighter;
}
h1 {
  font-size: 9vw;
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
}
.video-container {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden; /* Empêche la vidéo de dépasser */
}
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover; /* Couvre toute la zone sans déformer la vidéo */
  z-index: -1; /* Place la vidéo derrière le contenu */
}
.content-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

/* Smartphone */
@media (max-width: 768px) {
  .icon {
    width: 3vh; /* Taille des icônes pour les appareils mobiles */
  }
}



</style>