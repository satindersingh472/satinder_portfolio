<template>
  <div class="image_info">
    <div class="image">
      <img
        src="@/assets/satinder_profile.jpeg"
        alt="satinder's profile image"
      />
    </div>
    <div class="info">
      <div class="name">
        <h4 class="hi"> 👋,my name is Satinder and I am </h4>
        <h1 class="full_stack">FULL STACK</h1>
        <h1 class="web_developer">WEB DEVELOPER</h1>
      </div>
      <div class="info_box">
        <h3>
          I am passion driven Full - Stack Web Developer and I love to develop
          responsive websites for different screen sizes. A nice UI/UX, solid
          database and defensive back-end code are my Interests while developing
          a website.
        </h3>
      </div>
      <social-links></social-links>
    </div>
  </div>
</template>

<script>
import SocialLinks from "@/components/socialLinks.vue";
export default {
  components:{
    SocialLinks
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
* {
  padding: 0px;
  margin: 0px;
  font-weight: lighter;
  font-family:'Oswald',sans-serif;
}
h1{
  font-family: 'Oswald',sans-serif;
  font-weight: 900;
}
img {
  width: 100%;
}
.info{
  display: grid;
  line-height: 1.5;
}
.image_info{
  display: grid;
  align-items: center;
  justify-items: center;
  background-color:azure;
}
.image{
  img{
    border-radius: 50%;
    height: 200px;
    width: 200px;
  }
}
.name {
  display: grid;
  align-items: center;
  margin-top: 10vh;
  text-align: center;
  h1{
    align-self: center;
  }
}

.info_box{
    display: grid;
    place-items: center;
    margin-top: 3vh;
    font-size: 4vw;
}


@media only screen and (min-width: 500px) {

  .image_info {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  .info_box{
    font-size: 1.5vw;
  }
  .name{
    h1{
      font-size:4rem;
    }
  }
}
</style>
