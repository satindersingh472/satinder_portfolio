<template>
  <div>
    <div class="entire_navbar">
      <div class="name_container">
        <h3>Satinder Singh</h3>
      </div>
      <div class="links">
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Contact</h2>
        <h2>Projects</h2>
      </div>
    </div>
  </div>
</template>

<script>
import 'aos/dist/aos.css';
export default {}
</script>

<style lang="scss" scoped>
* {
  padding: 0px;
  margin: 0px;
  font-weight: 200;
  font-size: 1rem;
}
img{
  width: 100%;
}
.entire_navbar {
  display: grid;
  height: 8vh;
  grid-template-columns: 1fr 1fr;
  background-color: azure;
}
.name_container {
  display: grid;
  align-items: center;
  justify-items: start;
  h3{
    font-weight: bold;
    font-family: 'Anton',;
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
}
</style>
