<template>
  <div>
<nav-bar></nav-bar>
<div class="bar">
  
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

</style>