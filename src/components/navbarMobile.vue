<template>
  <div>
    <div class="navbar">
        <div class="name"><h2>Satinder Singh</h2></div>
        <div v-if="open_menu === false" class="open">
            <img class="button_open_close" @click="open_close" src="@/assets/open.svg" alt="open menu button">
        </div>
        <div v-if="open_menu === true" class="close">
            <img class="button_open_close" @click="open_close" src="@/assets/close.svg" alt="close button">
        </div>
    </div>
    <div v-if="show_links === true" class="entire_navbar">
      <div class="links">
        <h2>Projects</h2>
        <h2>Tools&Tech</h2>
        <h2>Contact</h2>
      </div>
      <div class="email_phone">
        <p>
          <a href="emailto:satindersingh472@gmail.com">
            satindersingh472@gmail.com
          </a>
        </p>
        <p><a href="tel: 3063160842">+13063160842</a></p>
      </div>
    </div>
  </div>
</template>

<script>

export default ({
    methods: {
        open_close() {
            if(this.open_menu){
                this.show_links = false;
                this.open_menu = false;
            }else if(this.open_menu === false){
                this.show_links = true;
                this.open_menu = true;
            }
        }
    },
    data() {
        return {
            open_menu: false,
            show_links: false
        }
    },
})
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');

* {
  padding: 0px;
  margin: 0px;
}
.navbar{
    display: grid;
    grid-auto-flow: column;
    align-items: center;

}
.entire_navbar{
    text-align:center;
}
.links{
    font-family: 'Anton',sans-serif;
}
.button_open_close{
    width: 50px;
    height: 50px;
}
.email_phone {
  p {
    a {
      font-family: 'Anton', sans-serif;
      text-decoration: none;
      color: black;
    }
  }
}
</style>
