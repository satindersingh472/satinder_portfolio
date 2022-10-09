<template>
    <div>
        <div class="all_links">
            <div class="one_link">
                <a href="https://github.com/satindersingh472"><img src="@/assets/github.svg" alt="github icon"></a>
            </div>
            <div class="one_link">
                    <a href="https://www.linkedin.com/in/satinder-singh-650137188/"><img src="@/assets/linkedin.svg" alt="linkedin icon"></a>
            </div>
            <div class="one_link">
                    <a href="emailto:satindersingh472@gmail.com"><img src="@/assets/email.svg" alt="email icon"></a>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
*{
    padding: 0px;
    margin: 0px;
}
img{
    width: 100%;
}
.all_links{
    display: grid;
    grid-auto-flow: column;
    gap: 30px;
    .one_link{
        display: grid;
        place-items: center;
        img{
            width: 40px;
            height: 30px;
        }
    }
}

</style>