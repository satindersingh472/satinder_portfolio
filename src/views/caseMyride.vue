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
        <p class="text-h4 indigo--text text--darken-4">Technologies used</p>
      </v-row>
      <v-row class="ma-10" justify="center">
        <v-col cols="12" lg="6" >
          <p class="text-h5" >It is a full stack application. Front end was designed and developed with Vuejs. 
            Back end developed with Python and Flask. Database with the help of Mariadb and Dbeaver. Git
            is used as a version control system and Github for hosting the source code. 
            The website is hosted with oracle cloud server.</p>
        </v-col>
      </v-row>
      <v-row justify="center" > 
        <v-col   cols="12"
          lg="6"
          style="display: grid; place-items: center;" >
          <v-img src="@/assets/signup_myride.png" contain width="100%" max-height="500" max-width="500"></v-img>
        </v-col>
        <v-col align-self="center">
         <p class="text-h5" >
            1. Signup with valid a email and the user will recieve an email for
            verification once Register.</p>
            <p class="text-h5" >2. After confirming the email the user will be able to book rides, post rides, change profile information and also upload a profile image.
            </p>
          
        </v-col>
      </v-row>
      <v-row justify="center" class="my-10">
        <v-col cols="12" lg="6" style="display: grid; place-items: center;" order-lg="2">
         
            <v-img
              src="@/assets/login_myride.png"
              contain
              width="100%"
              max-height="500"
              max-width="500"
            ></v-img>
       
        </v-col>
        <v-col cols="12" lg="6" align-self="center" >
      
          <p class="text-h5">
           1.Client can login with email and password.
          </p>
          <p class="text-h5">
            2.Password is secure and encrypted so that user can choose any
            password.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-10" justify="center">
        <v-col
          cols="12"
          lg="6"
          style="display: grid; place-items: center;"
       
        >
          <v-img
            src="@/assets/search_upcoming.png"
            contain
            max-width="500"
            max-height="500"
            width="100%"
          ></v-img>
        </v-col>

        <v-col cols="12" lg="6" align-self="center" >
          <p class="text-h5">
            1.Search rides from one city to another city.
          </p>
          <p class="text-h5">2. Discover upcoming rides along with information about the rides.</p>
          <p class="text-h5">
            3. Book ride from the same page with just one-click.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6"   style="display: grid; place-items: center;" order-lg="2">
          <v-img
            src="@/assets/profile_myride.png"
            contain
            max-height="500"
            max-width="500"
            width="100%"
          ></v-img>
        </v-col>
        <v-col align-self="center" cols="12" lg="6" >
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

        >
          <v-img
            src="@/assets/posted_rides.png"
            contain
            max-height="500"
            max-width="500"
            width="100%"
          ></v-img>
        </v-col>
        <v-col  align-self="center">
          <p class="text-h5">
            1.After posting ride it is easy to access the bookings.
          </p>
          <p class="text-h5">
            2.After someone books the ride, rider can confirm the booking made by passenger.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col  style="display: grid; place-items: center;"    cols="12"
          lg="6" order-lg="2" >
          <v-img src="@/assets/booking_posted.png"
          contain
          width="100%"
          max-height="500"
          max-width="500"></v-img>
        </v-col>
        <v-col align-self="center" >
          <p class="text-h5">1. After booking a ride, passenger can easily track the status of booking.</p>
          <p class="text-h5">2. passenger will immediately get status update when rider confirms the booking.</p>
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
