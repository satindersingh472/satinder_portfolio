<template>
  <div class="page">
    <div class="heading">
      <h1>Projects 
      </h1>
         <img src="@/assets/projects.svg" alt="projects icon">
    </div>
    <div class="projects">
      <div class="one_project">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
*{
    padding: 0px;
    margin: 0px;
}
.page{
    display: grid;
    place-items: center;
}
.heading{
    display: grid;
    grid-template-columns: 3fr 1fr;
    place-items: center;
    h1{
        color: #4b8bbe;
        font-weight:bold;
        font-size: 2.5rem;
    }
    img{
        justify-self: start;
        padding-left: 10px;
        height: 50px;
        width: 50px;
    }
}

</style>
