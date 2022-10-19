<template>
  <div class="page">
    <nav-bar></nav-bar>
    <skills-satinder></skills-satinder>
    <projects-satinder></projects-satinder>
  </div>
</template>

<script>
import NavBar from '@/components/navBar.vue';
import SkillsSatinder from '@/components/skillsSatinder.vue';
import ProjectsSatinder from '@/components/projectsSatinder.vue'
  export default {
    components: {
      NavBar,SkillsSatinder,ProjectsSatinder
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
  gap: 2vw;
}
</style>