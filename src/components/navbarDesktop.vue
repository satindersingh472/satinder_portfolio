<template>
  <div>
    <div class="entire_navbar">
      <div class="name_container">
        <h2 class="name">Satinder Singh</h2>
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
export default {}
</script>

<style lang="scss" scoped>
* {
  padding: 0px;
  margin: 0px;
  font-weight: 200;
}
.entire_navbar {
  display: grid;
  height: 8vh;
  grid-template-columns: 1fr 1fr;
}
.name_container {
  display: grid;
  align-items: center;
  justify-items: center;
  .name {
    padding-left: 30px;
    display: grid;
    justify-self: start;
  }
}
.links {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
}
</style>
