<template>
<div class="all" >
  <v-app>
    <v-app-bar app flat class="grey lighten-3" height="100px" >
         <nav-bar ></nav-bar>
    </v-app-bar>

    <v-main class="grey lighten-3"  >
      <router-view/>
    </v-main>
  </v-app>
</div>
</template>

<script>
import NavBar from '@/components/navBar.vue';

export default {
  name: 'App',
components: { NavBar },
  
};
</script>
<style lang="scss">
@import '@/scss/variables.scss';
.all{
  font-family: $body-font-family;
}


</style>
