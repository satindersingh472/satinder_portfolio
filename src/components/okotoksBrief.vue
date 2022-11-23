<template>
  <div>
    <v-row justify="end" class="my-10" >
      <v-col cols="12" md="5" style="display: grid; justify-items: start;">
        <p class="text-h2 font-weight-bold" style="align-self: end;">
          Okotoks Pizza
        </p>
        <p class="grey lighten-3 pa-5 text-h6" style="align-self: center;">
          Okotoks Pizza is a front-end project. It is a website for a pizza
          business. It is developed with HTML and CSS and media queries are used
          to make website responsive for different screen sizes.
        </p>
        <p class="grey--text text--darken-3 ma-5 text-h6">
          <span class="indigo--text text--darken-4">Technologies used:</span>
        HTML, CSS, Scss.
        </p>
               <div align-content="start">
          <a
            href="https://www.okotokspizza.ml"
            target="blank"
            class="text-decoration-none"
          >
            <v-btn class="ma-5" elevation="5">Live website</v-btn>
          </a>
          <a href="https://github.com/satindersingh472/okotoksPizza_lab" target="blank" class="text-decoration-none" >
            <v-btn class="ma-5" elevation="5">Github Repo</v-btn>
          </a>
          <!-- <router-link to="/foodie" class="text-decoration-none">
            <v-btn class="ma-5" elevation="5">Case study</v-btn>
          </router-link> -->
        </div>
      </v-col>
      <v-col
        cols="12"
        md="6"
        style="display: grid; place-items: center;"
      >
      <v-img src="@/assets/okotoks_homepage.png" contain width="100%" max-height="500" max-width="500" ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
