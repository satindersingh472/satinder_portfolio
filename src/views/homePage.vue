<template>
    <div class="page">
        <nav-bar></nav-bar>
        <about-satinder></about-satinder>
       
    </div>
</template>

<script>
import AboutSatinder from "@/components/aboutSatinder.vue";
import NavBar from "@/components/navBar.vue"
    export default {
        components:{ 
            NavBar,
            AboutSatinder
        }
        
    }
</script>

<style lang="scss" scoped>
*{
    padding: 0px;
    margin: 0px;
}
.page{
    height:100vh;
}

</style>