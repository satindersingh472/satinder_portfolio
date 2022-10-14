<template>
  <div>
    <div class="all_links">
      <div>
      <div class="one_link">
        <a href="https://github.com/satindersingh472">
          <img src="@/assets/github.svg" alt="github icon" />
        </a>
      </div>
      <div class="one_link">
        <a href="https://www.linkedin.com/in/satinder-singh-650137188/">
          <img src="@/assets/linkedin.svg" alt="linkedin icon" />
        </a>
      </div>
      <div class="one_link">
          <img @click="show_email" src="@/assets/email.svg" alt="email icon" />
      </div>
      </div>
     
    </div>
  </div>
</template>

<script>
export default({
  methods: {
    show_email() {
      if(this.hide === false){
        this.hide = true;
      } else if(this.hide === true){
        this.hide = false
      }
      
    }
  },
  data() {
    return {
      hide: true
    }
  },
})
</script>

<style lang="scss" scoped>
* {
  padding: 0px;
  margin: 0px;
}
img {
  width: 100%;
}
.all_links {
  display: grid;
  position: fixed;
  right: 5%;
  top: 20%;
  gap: 30px;
  .one_link {
    display: grid;
    place-items: center;
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
    }
    
  }
}
@media only screen and (min-width:500px){
    .all_links{
        grid-auto-flow: row;
    }
}
</style>
