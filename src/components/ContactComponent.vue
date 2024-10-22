<script>
export default {
  name: "ContactComponent"
}
</script>

<template>
<div class="container d-flex justify-content-center align-items-center flex-column bgPurple rounded-4 pb-5" id="contact">
  <div class="mb-5 container d-flex justify-content-center align-items-center flex-column">
    <h1 class="display-5 lh-1 mb-0 h1-mobile mb-4 pt-5 ">Me contacter</h1>
    <div class="border-opacity-25 line"></div>
  </div>

  <div class="d-flex justify-content-between align-items-center mt-3">
    <div class="me-5 ms-5 d-flex justify-content-between align-items-center flex-column">
      <a href="tel:0768408713" class="text-decoration-none">
        <img class="me-5 ms-5" src="/icons/telephonePurple.png" alt="icon téléphone"/>
      </a>
      <p class="text-center mt-2 fs-5">07 68 40 87 13</p>
    </div>
    <div class="me-5 ms-5 d-flex justify-content-between align-items-center flex-column">
      <a href="mailto:elisa.leroy0709@gmail.com" class="text-decoration-none">
        <img class="me-5 ms-5" src="/icons/mailPurple.png" alt="icon mail"/>
      </a>
      <p class="text-center mt-2 fs-5">elisa.leroy0709@gmail.com</p>

    </div>
    <div class="me-5 ms-5 d-flex justify-content-between align-items-center flex-column">
      <a href="https://www.linkedin.com/in/elisa-leroy-6b352a2a9/" target="_blank"><img class="me-5 ms-5" src="/icons/linkedinPurple.png" alt="logo linkedin"/></a>
      <p class="text-center mt-2 fs-5">Elisa Leroy</p>
    </div>
  </div>

</div>
</template>

<style scoped>
.line {
  width: 10%;
  border-bottom:  rgba(37, 8, 57, 0.74) solid 4px;
  border-radius: 50px;
}

@media (max-width: 768px) {

  .line {
    width: 30%;
  }
  .d-flex {
    flex-direction: column;
    align-items: center;
  }

  .me-5, .ms-5 {
    margin: 0;
  }

  .me-5 {
    margin-bottom: 20px;
  }
}

</style>