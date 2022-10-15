<template>
  <div class="page">
    <div class="navbar">
      <nav-bar></nav-bar>
    </div>
    <div class="all_work">
      <div class="one_work">
        <h1>Foodie</h1>
        <div class="info_img">
          <div class="info">
            __Foodie is a food ordering platform.
            <br />
            __customer can order food from available restaurants.
            <br />
          </div>
          <div class="image">
            <img src="@/assets/image_foodie_six.png" />
            <img src="@/assets/image_foodie_two.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navBar.vue'
export default {
  components: {
    NavBar,
  },
}
</script>

<style lang="scss" scoped>
.one_work {
  display: grid;
  h1 {
    justify-self: center;
    font-weight: bold;
    font-size: 3rem;
    color: #4b8bbe;
    text-decoration: underline;
    text-decoration-color: #ffd43b;
  }
  .info_img {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    place-items: center;
    .image {
      display: grid;
      width: 70%; 
     grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
  }
}
</style>
