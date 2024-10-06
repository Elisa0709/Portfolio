<script>
export default {
name: "HeroComponent"
}
</script>

<template>
  <div class="video-container">
    <!-- Vidéo de fond -->
    <video autoplay muted loop class="video-background">
      <source src="/video/heroVideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Texte au-dessus de la vidéo -->
    <div class="content-overlay">
      <h1>Bienvenue sur mon site</h1>
      <h2>Un site magnifique avec une vidéo en fond</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at
        felis neque.
      </p>
    </div>
  </div>
</template>

<style scoped>

/* Le conteneur de la vidéo doit prendre toute la largeur et hauteur de la page */
.video-container {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden; /* Empêche la vidéo de dépasser */
}

/* La vidéo doit couvrir toute la surface du conteneur sans dépasser */
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover; /* Couvre toute la zone sans déformer la vidéo */
  z-index: -1; /* Place la vidéo derrière le contenu */
}

/* Centrage du contenu sur la vidéo */
.content-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

/* Styles pour les éléments textuels */
h1, h2, p {
  margin: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5); /* Fond semi-transparent */
  border-radius: 5px;
}
</style>