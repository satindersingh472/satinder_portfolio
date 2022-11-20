<template>
  <div>
    <v-container>
      <v-row justify="center">
        <p class="text-h4 text-md-h3 ma-5 indigo--text text--darken-4">
          Case Study Foodieproject.ml
        </p>
      </v-row>
        <v-row justify="center" class="my-10">
        <p class="text-h5 text-md-h4 text-left pa-5">
     Foodie is a food ordering platform for restaurants and consumers. Foodie helps users order food from restaurant, discovering all the restaurants,
     getting an information about restaurants and the menu as well. Foodie is connecting restaurants and consumers at the same platform.
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
        <v-col cols="12" lg="6" style="display: grid; place-items: center;">
            <v-img src="@/assets/foodie_homepage.png" contain width="100%" max-height="500" max-width="500"></v-img>
        </v-col>
        <v-col align-self="center" cols="12" lg="6" >
            <p class="text-h5" >Homepage for foodie gives couple of options either to login/signup as a customer or login/signup as a restaurant.
                from this page the user has options to use the platform according to the user.
            </p>
        </v-col>
      </v-row>
      <v-row justify="center"  class="my-10 grey lighten-4"><p class=" my-auto text-h5 indigo--text text--darken-4">
        Client using the application</p></v-row>
      <v-row justify="center">
        <v-col  style="display: grid; place-items: center;" cols="12" lg="6" order-lg="2" >
            <v-img src="@/assets/discover_restaurants.png" contain width="100%" max-height="500" max-width="500" > </v-img>
        </v-col>
        <v-col align-self="center">
            <p class="text-h5">1. After a login or signup as a client, restaurants will be shown to the customers.</p>
            <p class="text-h5">2. Customers can click the restaurant and see available information and the menu as well.</p>
        </v-col>
      </v-row>
      <v-row justify="center" >
        <v-col cols="12" lg="6" style="display: grid; place-items: center;" >
            <v-img src="@/assets/menu_foodie.png" width="100%" max-height="500" max-width="500" contain></v-img>
        </v-col>
        <v-col align-self="center" >
            <p class="text-h5">1. Customers can add menu items to the cart by just click at the add button.</p>
            <p class="text-h5">2. After adding the items to the cart the customer can access the cart and place order.</p>
        </v-col>
      </v-row>
      <v-row justify="center" >
        <v-col style="display: grid; place-items: center;" cols="12" lg="6" order-lg="2">
            <v-img src="@/assets/cart_foodie.png" contain width="100%" max-height="500" max-width="500" ></v-img>

        </v-col>
        <v-col align-self="center" cols="12" lg="6" >
            <p class="text-h5">1. This is a practice project so there is no payment options yet, after placing an order the order id will be returned.</p>
        </v-col>
      </v-row>
      <v-row justify="center grey lighten-4" class="my-10"><p  class="my-auto text-h5 indigo--text text--darken-4">Restaurant using the application</p></v-row>
      <v-row justify="center" >
        <v-col style="display:grid;place-items:center;" cols="12" lg="6">
            <v-img src="@/assets/order_restaurants.png" contain width="100%" max-height="500" max-width="500"></v-img>
        </v-col>
        <v-col align-self="center" cols="12" lg="6" >
            <p class="text-h5">1. Restaurants can view, confirm, complete orders coming from customers.</p>
            <p class="text-h5">2. Filter is also available to filter out the orders based on confirm or complete status.</p>
        </v-col>
      </v-row>
      <v-row justify="center" >
        <v-col style="display:grid;place-items:center;" order-lg="2">
            <v-img src="@/assets/add_menu.png" width="100%" max-height="500" max-width="500" contain></v-img>
        </v-col>
        <v-col align-self="center">
            <p class="text-h5">1. Restaurant can add items to their menu from the add menu option.</p>
            <p class="text-h5">2. Menu item's description, price, name and image_url can be added.(upload image file will be available soon)</p>
        </v-col>
      </v-row>
      <v-row justify="center" >
        <v-col style="display:grid;place-items:center;" cols="12" lg="6" >
            <v-img contain width="100%" max-height="500" max-width="500" src="@/assets/rest_menu.png"></v-img>
        </v-col>
        <v-col align-self="center">
            <p class="text-h5">1. Restaurants can view menu items with image, description, price and name.</p>
            <p class="text-h5">
                2.. Restaurants can edit and delete every single item easily.
            </p>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>

