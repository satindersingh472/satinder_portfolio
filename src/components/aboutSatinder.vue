<template>
  <div>
    <v-container fluid>
      <v-row justify="center" class="my-10" no-gutters>
        <v-col
          class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 indigo--text text--darken-4"
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
      <v-row justify="center" align="center">
        <v-col cols="12" md="2" class="d-flex justify-center">
          <v-avatar size="200">
            <v-img src="@/assets/satinder_profile.jpeg"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="12" md="4" class="d-flex">
          <p class="text-body-1">
            A passionate full stack web developer with an enthusiasm and desire
            of learning, Creating responsive web applications, API(s), Databases.
            I have the ability to teach myself a technology that is needed for
            the task.
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <a
          class="text-decoration-none"
          href="https://github.com/satindersingh472"
          target="blank"
        >
        <v-icon class="ma-5 purple--text text--darken-3" x-large >mdi-github</v-icon>
          <!-- <v-btn color="white--text purple darken-3 ma-5 text-h6">
            view my github
          </v-btn> -->
        </a>
        <a
          class="text-decoration-none"
          href="https://www.linkedin.com/in/satinder-singh-650137188/"
          target="blank"
        >
                <v-icon class="ma-5 blue--text text--darken-3" x-large >mdi-linkedin</v-icon>

        <!-- <v-btn class="ma-5 white--text blue darken-3 text-h6" >View my linkedin</v-btn> -->
        </a>
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
