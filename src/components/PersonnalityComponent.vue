<script>
export default {
  name: "PersonnalityComponent"
}
</script>

<template>
  <div class="bgPurple pt-4 pb-4 ">
    <div class="row justify-content-center pt-2 mb-2 sentence">
      <div class="ms-4  me-4 ">
      <p class="fst-italic text-center text-white fs-4">Forte de mes expériences, je possède de nombreuses qualités. Aussi à l'aise en équipe qu'en autonomie, je
        m'efforce de cultiver la bienveillance, la communication et l'esprit d'équipe tout en appliquant une
        méthodologie rigoureuse et organisée.</p>
    </div>
    </div>
  </div>
</template>

<style scoped>
::selection {
  background-color: #250839;
  color: white;
}
h1, h2, h3, h4, p {
  font-family: "Titillium Web", sans-serif;
}
.sentence{
  margin-left:6vw;
  margin-right:6vw;
}
.bgPurple{
  background-color: rgba(37, 8, 57, 0.74);
}
</style>