<template>
  <div>
    <div class="entire_navbar">
      <div class="name_container">
        <h2>{S@t<span class="blue">i</span>nde<span class="r">r</span>_S<span class="yellow">i</span>n<span class="g">G</span>h}</h2>
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
export default {}
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
.blue{
    color: #4b8bbe;
}
.yellow{
    color: #FFD43B;
}
.g{
  background: linear-gradient(#4285F4,#DB4437,#F4B400,#4285F4,#0F9D58);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.r{
  color: #61DBFB;
}
.name_container {
  display: grid;
  align-items: center;
  justify-items: start;
  h2,.blue,.yellow,.g,.r{
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
