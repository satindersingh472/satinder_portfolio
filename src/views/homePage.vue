<template>
    <div>
        <about-satinder ></about-satinder>
        <projects-satinder></projects-satinder>
        <tool-kit></tool-kit>
        <contact-form ></contact-form>
       
    </div>
</template>

<script>
import AboutSatinder from "@/components/aboutSatinder.vue";
import ProjectsSatinder from '@/components/projectsSatinder.vue'
import ContactForm from '@/components/contactForm.vue'
import ToolKit from '@/components/toolKit.vue';

    export default {
        components:{ 
            AboutSatinder,
            ProjectsSatinder,
            ContactForm,
                 ToolKit     
        }
  ,
            
    }
</script>

<style lang="scss" scoped>

</style>