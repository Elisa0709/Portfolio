<script>
export default {
  name: "upComponent",
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
  <button class="fixed-icon" @click = "scrollToId('navBarre')">
    <img src="/icons/upIcon.webp" alt="circled-chevron-up"/>
  </button>

</template>

<style scoped>
::selection {
  background-color: #250839;
  color: white;
}
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
.fixed-icon{
  display:none;
}
}
</style>