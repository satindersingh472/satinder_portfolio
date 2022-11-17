<template>
    <div class="grey lighten-5" >
        <about-satinder ></about-satinder>
        <projects-satinder></projects-satinder>
       
    </div>
</template>

<script>
import AboutSatinder from "@/components/aboutSatinder.vue";
import ProjectsSatinder from '@/components/projectsSatinder.vue'

    export default {
        components:{ 
            AboutSatinder,
            ProjectsSatinder
        }
        
    }
</script>

<style lang="scss" scoped>

</style>