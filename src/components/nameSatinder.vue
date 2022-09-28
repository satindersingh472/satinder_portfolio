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
}
.entire_box {
  display: grid;
  place-items: center;
  background: linear-gradient(45deg, #60637e, #a9594e);
}
.first_name,
.last_name,
.full_stack,
.developer {
  font-size: 15vw;
}
.last_name, .full_stack{
    color: #75bec2;
}
@media only screen and (min-width: 700px) {
  .first_name,
  .last_name,
  .full_stack,
  .developer {
    font-size: 7vw;
  }
}
</style>
