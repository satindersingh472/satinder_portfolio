<template>
  <div>
    <div class="entire_navbar">
      <div class="name_container">
       <logo-satinder></logo-satinder>
        </div>
      <div class="links">
        <router-link to="/projects_satinder" class="one_link"><h2>Projects</h2></router-link>
        <router-link to="/tools_tech" class="one_link"><h2>Tools&Tech</h2></router-link>
        <a class="one_link" href="https://github.com/satindersingh472">Github</a>
        <a class="one_link" href="https://www.linkedin.com/in/satinder-singh-650137188/">LinkedIn</a>
        <router-link to="/contact_page" class="one_link">Contact</router-link>
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
    .one_link{
      text-decoration: none;
      color: black;
      padding: 5px;
      transition: background .3s ease-in-out ;
      &:hover{
        background: #ffd43b;
      }
    }
}
</style>
