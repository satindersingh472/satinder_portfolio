<template>
  <div>
    <v-row justify="end">
      <v-col cols="12" md="5" style="display: grid; justify-items: start;">
        <p class="text-h2 font-weight-bold" style="align-self: end;">
          Foodie
        </p>
        <p class="grey lighten-3 pa-5 text-h6" style="align-self: center;">
      Foodie is a full stack project as a food ordering platform where restaurants can make their account and post their menu, while 
      consumers can create an account and discover all the restaurants available on the platform and order food from a particular restaurant. 
        </p>
        <p class="grey--text text--darken-3 ma-5 text-h6">
          <span class="indigo--text text--darken-4">Technologies used:</span>
          VueJs, Python, Flask, Mariadb, Dbeaver, Git and Github.
        </p>
        <div align-content="start">
          <a
            href="https://www.foodieproject.ml"
            target="blank"
            class="text-decoration-none"
          >
            <v-btn class="ma-5" elevation="5">Live website</v-btn>
          </a>
          <a href="https://www.github.com/satindersingh472/foodie_api" target="blank" class="text-decoration-none" >
            <v-btn class="ma-5" elevation="5">Github Repo</v-btn>
          </a>
          <router-link to="/foodie" class="text-decoration-none">
            <v-btn class="ma-5" elevation="5">Case study</v-btn>
          </router-link>
        </div>
      </v-col>
      <v-col cols="12" md="6" style="display: grid; place-items: center;">
        <v-img
          src="@/assets/menu_foodie.png"
          max-height="500"
          max-width="600"
          width="100%"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
