<template>
<div>
  <v-app>
    <v-app-bar app flat >
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
</style>
