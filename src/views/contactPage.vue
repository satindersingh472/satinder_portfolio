<template>
  <div class="page">
<nav-bar></nav-bar>
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

</style>