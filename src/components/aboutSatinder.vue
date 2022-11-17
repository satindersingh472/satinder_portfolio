<template>
  <div>
    <v-container class="grey lighten-5" fluid>
      <v-row justify="center" class="my-10" no-gutters>
        <v-col
          class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 indigo--text text--darken-4"
          align-self="center"
        >
          <v-row justify="center">
            <p>Welcome, I am Satinder Singh</p>
          </v-row>
          <v-row align="center" justify="center">
            <p class="field">A Full Stack Web Developer</p>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" >
        <v-col cols="12" md="2" class="d-flex justify-center"  >
          <v-avatar  size="200" >
            <v-img  src="@/assets/satinder_profile.jpeg"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="12" md="4" class="d-flex" >
          <p class="text-h4" >A passionate full stack web developer with an enthusiasm and desire of learning, Creating responsive web applications, API(s),Databases</p>
        </v-col>
      </v-row>
      <v-row justify="center" >
        <a class="text-decoration-none" href="https://github.com/satindersingh472" target="blank">
        <v-icon  large class="ma-5 purple--text text--darken-3">mdi-github</v-icon></a>
      <a class="text-decoration-none" href="https://www.linkedin.com/in/satinder-singh-650137188/" target="blank"><v-icon large class="ma-5 blue--text text--darken-3" >mdi-linkedin</v-icon></a>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="scss" scoped></style>
