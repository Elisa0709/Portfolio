<script>
export default {
  name: "upComponent",
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
  <button class="fixed-icon" @click = "scrollToId('navBarre')">
    <img src="/icons/upIcon.webp" alt="circled-chevron-up"/>
  </button>

</template>

<style scoped>
.fixed-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: none;
  border: none;
  z-index: 1000;
}
img{
  width:70px;
  height:70px;
}

@media (max-width: 768px) {
  .fixed-icon {
    position: fixed;
    bottom: 7px;
    right: 7px;
    background: none;
    border: none;
    z-index: 1000;
  }
  img{
    width:50px;
    height:50px;
  }

}
</style>