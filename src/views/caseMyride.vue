<template>
  <div>
    <v-container>
      <v-row justify="center">
        <p class="text-h4 text-md-h3 ma-5 indigo--text text--darken-4">
          Case Study MyRide.ml
        </p>
      </v-row>
      <v-row justify="center" class="my-10">
        <p class="text-h5 text-md-h4 text-left pa-5">
          My Ride is a platform for travelling at a low cost because people
          usually travel from one town to another. This application is
          connecting riders with passengers. Drivers can post rides in advance
          and confirm bookings beforehand. The customer can pay cash or
          email-transfer the money (that rider and passenger agreed upon) to the
          driver.
        </p>
      </v-row>
      <v-row justify="center">
        <p class="text-h5 indigo--text text--darken-4">Technologies used</p>
      </v-row>
      <v-row class="ma-10" justify="center">
        <v-col cols="8" >
          <v-icon class="deep-orange--text" x-large >mdi-language-html5 (html)</v-icon>
        </v-col>
      </v-row>
      <v-row justify="center" class="my-10">
        <v-col cols="12" lg="6" style="display: grid; place-items: center;">
          <v-row>
            <v-img
              src="@/assets/login_myride.png"
              max-height="500"
              contain
              max-width="500"
            ></v-img>
          </v-row>
        </v-col>
        <v-col cols="12" lg="6" align-self="center">
          <p class="text-h5">
            1. Signup with valid email and the user will recieve an email
            verification.
          </p>
          <p class="text-h5">
            2.Upon verification client can use the application as normal.
          </p>
          <p class="text-h5">
            3.Password is secure and encrypted so that user can choose any
            password.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-col
          cols="12"
          lg="6"
          style="display: grid; place-items: center;"
          order-sm="1"
          order-md="2"
        >
          <v-img
            src="@/assets/search_upcoming.png"
            contain
            max-width="500"
            max-height="500"
          ></v-img>
        </v-col>

        <v-col cols="12" lg="6" align-self="center" order-md="1" order-sm="2">
          <p class="text-h5">
            1.Search rides from one city to another city.
          </p>
          <p class="text-h5">2. Discover upcoming rides.</p>
          <p class="text-h5">
            3. Book ride from the same page with just one-click.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6" style="display: grid; place-items: center;">
          <v-img
            src="@/assets/profile_ride.png"
            contain
            max-height="500"
            max-width="500"
          ></v-img>
        </v-col>
        <v-col align-self="center" cols="12" lg="6">
          <p class="text-h5">
            1.Clients can change any information related to profile easily.
          </p>
          <p class="text-h5">
            2.Clients can post a new ride with just few important inputs.
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="12"
          lg="6"
          style="display: grid; place-items: center;"
          order-md="2"
          order-sm="1"
        >
          <v-img
            src="@/assets/posted_booking.png"
            contain
            max-height="500"
            max-width="500"
          ></v-img>
        </v-col>
        <v-col order-md="1" order-sm="2" align-self="center">
          <p class="text-h5">
            1.After posting rides it is easy to access the bookings.
          </p>
          <p class="text-h5">
            2.Passenger who booked the ride can access the bookings.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped></style>
