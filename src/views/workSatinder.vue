<template>
  <div class="page">
    <nav-bar></nav-bar>
    <div class="heading">
      <h1>Tools</h1>
    </div>
    <div class="tools">
      <div class="one_tool">
        <img src="@/assets/html.png" alt="html 5 icon" class="icon">
        <p>HTML5</p>
      </div>
      <div class="one_tool">
        <img src="@/assets/css.png" alt="css icon" class="icon">
        <p>CSS</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navBar.vue';

export default {
  components: {
    NavBar
      },
}
</script>

<style lang="scss" scoped>
*{
  padding: 0px;
  margin: 0px;
}
.page{
  display: grid;
  gap: 10px;
}
.heading{
  display: grid;
  place-items: center;
  h1{
    font-weight: bold;
    color: #4b8bbe;
  }
}
.tools{
  display: grid;
  place-items: center;
  margin-top: 20px;
  .one_tool{
    display: grid;
    
    height: 100px;
    width: 100px;
    padding: 10px;
    text-align: center;
    border: 1px solid #eee;
    border-radius: 5px;
    &:hover{
        box-shadow: 3px 3px 6px grey ;
      }
    .icon{
      height: 50px;
      width: 50px;
      
    }
  }
}
</style>
