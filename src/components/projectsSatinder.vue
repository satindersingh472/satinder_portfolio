<template>
  <div>
    <v-container fluid>
      <v-row justify="center">
        <h2 class="indigo--text text--darken-4 my-10 text-h2">Projects</h2>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="5" style="display:grid; justify-items:start;">
          <p class="text-h2 font-weight-bold" style="align-self:end;">
            MyRide
          </p>
          <p class="grey lighten-3 pa-5" style="align-self:center;">
            A website for posting and booking rides from one place to another. See upcoming rides, filter rides by city name,
            post rides in advance, user can act as a driver or passenger at different times, confirm and book rides easily. It is kind of a marketplace for traveling.
          </p>
          <p class="grey--text text--darken-2" >Technologies used: VueJs, Vuetify, Javascript, Python, Flask, Mariadb. </p>
          <v-row style="display:grid;place-items:center;grid-auto-flow:column;" align-content="start" >
            <v-btn class="grey ma-5" >Live website</v-btn>
            <v-btn class="grey ma-5 ">Github Repo</v-btn>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" >
          <v-img
            src="@/assets/mockup_myride.png"
            max-height="800"
            max-width="800"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
