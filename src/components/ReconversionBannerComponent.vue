<script>
export default {
  name: "ReconversionBannerComponent"
}
</script>

<template>
  <div class="bgPurple pt-4 pb-4 mt-4">
    <div class="row justify-content-center pt-2 mb-2 sentence">
      <div class="ms-4  me-4 ">
        <p class="fst-italic text-center text-white fs-4">Les personnes en reconversion professionnelle démontrent une forte capacité à surmonter des défis en changeant de carrière, ce qui témoigne de leur résilience
          et de leur détermination, des qualités précieuses dans un environnement de travail dynamique.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
::selection {
  background-color: #250839;
  color: white;
}
.sentence{
  margin-left:6vw;
  margin-right:6vw;
}

h1, h2, h3, h4, p {
  font-family: "Titillium Web", sans-serif;
}

.bgPurple {
  background-color: rgba(37, 8, 57, 0.74);
}
</style>