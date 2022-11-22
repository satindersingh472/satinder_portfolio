<template>
  <div>
    <v-app-bar app  elevate-on-scroll class="grey lighten-3">
        <router-link to="/" class="text-decoration-none text-h4 ma-3">
        <h2 class="indigo--text text--darken-3 ">S</h2>
        </router-link>
        <v-spacer></v-spacer>
       <v-app-bar-nav-icon x-large @click="drawer = !drawer" ></v-app-bar-nav-icon>
       </v-app-bar>
        <v-navigation-drawer right app clipped temporary v-model="drawer" disable-resize-watcher disable-route-watcher >
          <v-list-item>
              <router-link class="text-decoration-none indigo--text text--darken-3 text-h5 my-10"  to="/projects_satinder">Projects</router-link>
          </v-list-item>
          <v-list-item>
                  <router-link class="text-decoration-none indigo--text text--darken-3 text-h5 my-10" to="/contact">Contact</router-link>
          </v-list-item>
          <v-list-item>
                  <a class="text-decoration-none indigo--text text--darken-3 text-h5 my-10" target="blank" href="https://www.github.com/satindersingh472">Github</a>
          </v-list-item>
          <v-list-item>
                  <a class="text-decoration-none indigo--text text--darken-3 text-h5 my-10" target="blank" href="https://www.linkedin.com/in/satinder-singh-650137188/">LinkedIn</a>
          </v-list-item>

           </v-navigation-drawer>
     
       
    
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false
      }
    },
    
  }
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
h2{
  font-family: 'Rancho',sans-serif;
}

</style>