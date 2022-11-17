<template>
  <div>
       <div v-if="desktop_view === true">
      <navbar-desktop></navbar-desktop>
    </div>
    <div v-if="desktop_view === false" >
        <navbar-mobile></navbar-mobile>
    </div>
   
  </div>
</template>

<script>
import NavbarDesktop from '@/components/navbarDesktop.vue';
import NavbarMobile from "@/components/navbarMobile.vue";
export default {
  components: {
    NavbarDesktop,
    NavbarMobile
  },
  methods: {
    change_querie(){
      if (document.documentElement.clientWidth <= 750) {
        this.desktop_view = false;
      } else if (document.documentElement.clientWidth > 750) {
        this.desktop_view = true;
      }
    },
  },
  mounted() {
    this.change_querie();
    window.addEventListener('resize', this.change_querie);
  },
  data() {
    return {
      desktop_view: false
    }
  },
}
</script>

<style lang="scss" scoped></style>
