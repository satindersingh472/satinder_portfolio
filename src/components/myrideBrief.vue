<template>
  <div>
    <v-row justify="end">
      <v-col cols="12" md="5" style="display: grid; justify-items: start;">
        <p class="text-h2 font-weight-bold" style="align-self: end;">
          MyRide
        </p>
        <p class="grey lighten-3 pa-5 text-h6" style="align-self: center;">
        Myride is a full stack website project for posting and booking rides from one place to another. See
          upcoming rides, filter rides by city name, post rides in advance, user
          can act as a driver or passenger at different times, confirm and book
          rides easily. It is kind of a marketplace for traveling.
        </p>
        <p class="grey--text text--darken-3 ma-5 text-h6">
          <span class="indigo--text text--darken-4">Technologies used:</span>
          VueJs, Vuetify, Python, Flask, Mariadb, Dbeaver, Git and Github.
        </p>
        <div align-content="start">
          <a
            href="https://www.myride.ml"
            target="blank"
            class="text-decoration-none"
          >
            <v-btn class="ma-5" elevation="5">Live website</v-btn>
          </a>
          <a href="https://www.github.com/satindersingh472/myride_api" class="text-decoration-none" >
            <v-btn class="ma-5" elevation="5">Github Repo</v-btn>
          </a>
          <router-link to="/myride/#" class="text-decoration-none">
            <v-btn class="ma-5" elevation="5">Case study</v-btn>
          </router-link>
        </div>
      </v-col>
      <v-col cols="12" md="6" style="display: grid; place-items: center;">
        <v-img
          src="@/assets/my_booked_rides.png"
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
