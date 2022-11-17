<template>
<div>
  <v-app>
    <v-app-bar class="indigo lighten-5" floating >
         <nav-bar ></nav-bar>

    </v-app-bar>

    <v-main>
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
// .all{
//   font-family: $body-font-family;
// }
</style>
