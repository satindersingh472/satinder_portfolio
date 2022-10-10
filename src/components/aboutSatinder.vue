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
        <h4 class="hi">👋,my name is<span class="bold_name"> SATINDER</span> and I am</h4>
        <h1 class="full_stack">FULL STACK</h1>
        <h1 class="web_developer">WEB DEVELOPER</h1>
      </div>
      <div class="info_box">
        <h3>
          I am passion driven Full - Stack Web Developer and I love to develop
          responsive websites for different screen sizes.<br> A nice UI/UX, solid
          database and defensive back-end code are my Interests while developing
          a website.
        </h3>
      </div>
    </div>
    <social-links class="social_links"></social-links>
  </div>
</template>

<script>
import SocialLinks from '@/components/socialLinks.vue';

export default {
  components: {
    SocialLinks,
  },
}
</script>

<style lang="scss" scoped>

* {
  padding: 0px;
  margin: 0px;
}
img {
  width: 100%;
}
.info {
  display: grid;
  line-height: 1.5;
}
.image_info {
  display: grid;
  align-items: center;
  justify-items: center;
}
.bold_name{
  font-weight: 700;
}
.image {
  img {
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
    font-weight: 900;
    font-size: 4rem;
  }
  h4,h3{
    font-size: 1.2rem;
  }
}
.info_box {
  display: grid;
  place-items: center;
  text-align: center;
  margin-top: 3vh;
    h3{
    font-size: 1rem;
  }
}
.social_links {
  position: sticky;
  bottom: 0;
  background: white;
  width: 100%;
  margin-top: 20px;

}
.full_stack{
  color: #4b8bbe;
  text-shadow: 3px 3px 6px #FFD43B;
}
.web_developer{
  color: #FFD43B;
  text-shadow: 3px 3px 6px #4b8bbe;
}

@media only screen and (min-width: 700px) {
  .info_box {
   h3,h4{
     font-size: 1.2rem;
   }
  }
  .name {
    h1 {
      font-size: 5rem;
    }
  }
}
</style>
