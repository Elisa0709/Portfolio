<script>
export default {
  name: "ErrorView"
}
</script>


<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div>
      <p class="display-4 text-center">Erreur 404</p>
      <p class="text-center h4">La page que vous recherchez n'existe pas.</p>
      <div class="justify-content-center align-items-center d-flex">
      <router-link to="/" class="text-white text-decoration-none px-4 py-3 bg-secondary d-inline-block mt-2 rounded">
        Return to Home
      </router-link>
      </div>
    </div>
  </div>
</template>


<style scoped>
h1, h2, p {
  font-family: "Titillium Web", sans-serif;
}
</style>
