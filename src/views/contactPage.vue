<template>
  <div class="page">
<nav-bar></nav-bar>
<div class="bar">
  <div class="question">
      <h1>Get In touch</h1>
  </div>
  
</div>
<contact-form></contact-form>
  </div>
</template>

<script>
import NavBar from '@/components/navBar.vue';
import ContactForm from '@/components/contactForm.vue';
  export default {
    components: {
      NavBar,ContactForm
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
  gap: 20px;
}
h1{
  font-weight: bold;
  font-size: 10vw;
  color:#4b8bb4;
  }

.bar{
  display: grid;
  width: 100%;
  .question{
    width: 100%;
    display: grid;
    place-items: center;
    text-decoration: underline #ffd43b;
    
  }
}
</style>