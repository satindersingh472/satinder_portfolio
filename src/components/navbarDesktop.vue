<template>
  <div>
    <v-app-bar app  elevate-on-scroll class="grey lighten-3" >
      <v-app-bar-title  >
        <router-link to="/" class="text-decoration-none text-h4 ma-6">
        <h2 class="indigo--text text--darken-3 ">S</h2>
        </router-link>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-col>
        <v-row justify="center" >
      <router-link class="text-decoration-none indigo--text text--darken-3 text-h5 mx-10" to="/projects_satinder">Projects</router-link>
      <router-link class="text-decoration-none indigo--text text--darken-3 text-h5 mx-10" to="/contact">Contact</router-link>
      <a class="text-decoration-none indigo--text text--darken-3 text-h5 mx-10" href="https://www.github.com/satindersingh472">Github</a>
        </v-row>
      </v-col>
    </v-app-bar>

  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
h2 {
  font-family: 'Rancho', sans-serif;
}
</style>
