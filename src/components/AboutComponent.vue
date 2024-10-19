<script>
export default {
  name: "AboutComponent",

  mounted() {
    const options = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(this.handleIntersect, options);

    if (window.innerWidth >= 768) {
      if (this.$refs.div1 && this.$refs.div2) {
        observer.observe(this.$refs.div1);
        observer.observe(this.$refs.div2);
      } else {
        console.error("Les divs ne sont pas trouvées !");
      }
    }
  },

  methods: {
    handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`Intersection détectée sur :`, entry.target);
          entry.target.classList.add('div-visible');
        } else {
          console.log("Hors de la vue :", entry.target);
        }
      });
    }
  }
};

</script>

<template>
  <div class="mt-5 mb-5">
    <h1 class="display-5 lh-1 mb-0 h1-mobile mb-4 text-center">Qui suis-je ?</h1>
    <div class="border-opacity-25 line"></div>

    <div class="container aboutContainer mx-auto mt-5">
      <div ref="div1" class="row div1">
        <div class="col-12 col-md-4">
          <img src="/images/profil.webp" class="d-block mx-lg-auto img-fluid image-center-mobile rounded-4 mobile-img"
               alt="Photo Elisa Leroy" width="80%" loading="lazy">
        </div>
        <div class="col-12 col-md-8 d-flex align-items-center">
          <p class="text-justify">J'ai entrepris, en avril 2024, une <span>reconversion professionnelle</span> dans
            le but de me former au titre de Concepteur, Développeur d'Applications au Campus Numérique in the Alps
            de Grenoble.<br> Apprendre auprès de ce centre de formation me permet d'acquérir de <span>solides
            compétences</span> et la <span>capacité à m'adapter à différentes technologies.</span>
          </p>
        </div>
      </div>

      <div ref="div2" class="row pt-4 div2">
        <div class="col-12 col-md-8 order-md-1 order-2 d-flex align-items-center">
          <p class="text-justify">Apprendre auprès du campus numérique me permet d'acquérir de solides compétences
            et la capacité à m'adapter à différentes technologies. Dans le but d'approfondir mon apprentissage et de
            mettre à profit mes compétences déjà acquises, je recherche un contrat d'apprentissage d'une durée de 12
            mois à partir du début d'année 2025.</p>
        </div>
        <div class="col-12 col-md-4 order-md-2 order-1">
          <img src="/images/logo_campusnum_fond-blanc-1024x1024.webp"
               class="d-block mx-lg-auto img-fluid image-center-mobile rounded-4 mobile-img"
               alt="Logo Campus Numérique" loading="lazy">
        </div>
      </div>
    </div>
  </div>







</template>

<style scoped>
h1, h2, p {
  font-family: "Titillium Web", sans-serif;
}

p {
  font-size: 150%;
  font-weight: 350;
}

span {
  font-weight: 500;
}

.text-justify {
  text-align: justify;
}
.line {
  width: 10%;
  border-bottom: rgba(37, 8, 57, 0.74) solid 4px;
  border-radius: 50px;
  margin: 0 auto;
}
.soft-skills {
  width: 100%;
  background-color: rgba(82, 53, 131, 0.25);
}

.aboutContainer {
  width: 65vw;
}

.div1, .div2 {
  opacity: 0;
  transform: translateX(100%);
  transition: transform 1s ease-out, opacity 1s ease-out;
}

.div2 {
  transform: translateX(-100%);
}

.div-visible {
  opacity: 1;
  transform: translateX(0);
}


@media (max-width: 768px) {
  .image-center-mobile {
    margin: auto;
  }

  .h1-mobile {
    font-size: 5vh;
    text-align: center;
    margin-top: 3%;

  }

  .text-justify {
    text-align: center;
  }

  p {
    font-size: 120%;
  }

  .mobile-img {
    margin-bottom: 20px;
  }

  .aboutContainer {
    width: 90vw;
  }
  .div1, .div2 {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

</style>