<template>
    <div>
        <div class="all_links">
            <div class="one_link">
                <img src="@/assets/github.svg" alt="github icon">
                <button><a href="https://github.com/satindersingh472">Github</a></button>
            </div>
            <div class="one_link">
                <img src="@/assets/linkedin.svg" alt="linkedin icon">
                <button>
                    <a href="https://www.linkedin.com/in/satinder-singh-650137188/">LinkedIn</a>
                </button>
            </div>
            <div class="one_link">
                <img src="@/assets/email.svg" alt="email icon">
                <button>
                    <a href="emailto:satindersingh472@gmail.com">Contact Me</a>
                </button>
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
    .one_link{
        display: grid;
        place-items: center;
        img{
            width: 20px;
            height: 20px;
        }
        button{
            background-color:transparent;
            border: none;
            a{
                text-decoration: none;
                color: black;
                &:hover{
                    text-decoration:underline;
                }
            }
        }
    }
}

</style>