<script>
export default {
  name: "MenuComponent",
  methods: {
    scrollToId(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({behavior: 'smooth'});
      }
    }
  }
}
</script>

<template>
<div class="container mobile-menu mt-3">
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Menu
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <div class=" d-flex flex-column align-items-center ">
            <button @click = "scrollToId('about')" type="button" class="btn btn-light mb-2 w-100">À propos</button>
            <button @click = "scrollToId('skills')" type="button" class="btn btn-light mb-2 w-100">Compétences</button>
            <button @click = "scrollToId('projects')" type="button" class="btn btn-light mb-2 w-100">Projets</button>
            <button @click = "scrollToId('training')" class="btn btn-light mb-2 w-100">Formation</button>
            <button @click = "scrollToId('experiences')" class="btn btn-light mb-2 w-100">Expériences</button>
            <button @click = "scrollToId()" type="button" class="btn btn-light mb-2 w-100">Contact</button>
          </div>
        </div>
      </div>
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
.mobile-menu{
  display: none;
}

@media (max-width: 768px) {
  .mobile-menu {
    display: block;
  }
}



</style>