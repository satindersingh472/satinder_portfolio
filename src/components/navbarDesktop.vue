<template>
  <div>
    <div class="entire_navbar">
      <div class="name_container">
       <logo-satinder></logo-satinder>
        </div>
      <div class="links">
        <h2>Projects</h2>
        <h2>Tools&Tech</h2>
        <h2>Contact</h2>
      </div>
    </div>
  </div>
</template>

<script>
import LogoSatinder from "@/components/logoSatinder.vue";
export default {
  components: {
    LogoSatinder,
  },
}
</script>

<style lang="scss" scoped>


* {
  padding: 0px;
  margin: 0px;
  font-size: 1rem;
}
img{
  width: 100%;
}
.entire_navbar {
  display: grid;
  height: 8vh;
  grid-template-columns: 1fr 1fr;
}

.name_container {
  display: grid;
  align-items: center;
  justify-items: start;
  h2{
    font-weight: bold;
    font-size: 2rem;
  }
  .name_image {
    padding-left: 30px;
    display: grid;
    align-self: center;
    justify-self: start;
    width: 50px;
    height: 50px;
  }
}
.links {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-items: center;
}
</style>
