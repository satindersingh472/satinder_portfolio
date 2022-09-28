<template>
  <div>
    <div v-if="desktop_view === true">
      <navbar-desktop></navbar-desktop>
    </div>
    <div v-if="desktop_view === false" >
        <h2>Mobile navbar
        </h2>
    </div>
  </div>
</template>

<script>
import NavbarDesktop from '@/components/navbarDesktop.vue'
export default {
  components: {
    NavbarDesktop,
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
