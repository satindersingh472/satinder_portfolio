<template>
    <div>
        <about-satinder ></about-satinder>
        <projects-satinder></projects-satinder>
        <contact-form ></contact-form>
       
    </div>
</template>

<script>
import AboutSatinder from "@/components/aboutSatinder.vue";
import ProjectsSatinder from '@/components/projectsSatinder.vue'
import ContactForm from '@/components/contactForm.vue'

    export default {
        components:{ 
            AboutSatinder,
            ProjectsSatinder,
            ContactForm
        }
        
    }
</script>

<style lang="scss" scoped>

</style>