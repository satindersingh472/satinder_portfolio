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
        <h4>Who am I ?</h4>
        <h1 class="first_name">I'M SATINDER SINGH</h1>
        <h1 class="full_stack">Full - Stack</h1>
        <h1 class="developer">Web Developer</h1>
      </div>
      <div class="info_box">
        <h3>
          I am passion driven Full - Stack Web Developer and I love to develop
          responsive websites for all kinds of devices. A nice UI/UX, solid
          database and defensive back-end code are my Interests while developing
          a website
        </h3>
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
  font-weight: 300;
}
img {
  width: 100%;
}
.image_info{
  display: grid;
  align-items: center;
  justify-items: center;
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
  h4,h1{
    font-weight: 400;
    align-self: center;
  }
}

.info_box{
    display: grid;
    place-items: center;
    margin-top: 3vh;
}

.first_name,
.last_name,
.full_stack,
.developer {
  font-size: 10vw;
}

@media only screen and (min-width: 500px) {
  .first_name,
  .last_name,
  .full_stack,
  .developer {
    font-size: 4vw;
  }
  .image_info {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
</style>
