<template>
    <div>
        <nav-bar></nav-bar>
<div class="page">
    <h1>Tools and Technologies</h1>
    <p>however, I use many technologies, libraries, frameworks and<br> programming languages but 
        I am always ready to learn new tools and technologies to get the job done.
    </p>
</div>
    </div>
</template>

<script>
import NavBar from '@/components/navBar.vue';
    export default {
       components: {
        NavBar,
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
    place-items: center;
    h1{
        font-size: 5vw;
        font-weight: bold;
    }
    p{
        font-size: 1rem;
    }
}
</style>