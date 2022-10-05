<template>
  <div>
    <div class="entire_box">
      <h1 class="first_name">SATINDER</h1>
      <h1 class="last_name">SINGH</h1>
      <h1 class="full_stack">Is a Full - Stack</h1>
      <h1 class="developer">Web Developer</h1>
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
  font-weight: 300;
}
.entire_box {
  display: grid;
  align-items: center;
  justify-items: start;
}
.first_name,
.last_name,
.full_stack,
.developer {
  font-size: 15vw;
}
@media only screen and (min-width: 700px) {
  .first_name,
  .last_name,
  .full_stack,
  .developer {
    font-size: 4vw;
  }
}
</style>
