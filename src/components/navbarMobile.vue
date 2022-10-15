<template>
  <div>
    <div class="navbar">
      <logo-satinder></logo-satinder>
        <div v-if="open_menu === false" class="open">
            <img class="button_open_close" @click="open_close" src="@/assets/open.svg" alt="open menu button">
        </div>
        <div v-if="open_menu === true" class="close">
            <img class="button_open_close" @click="open_close" src="@/assets/close.svg" alt="close button">
        </div>
    </div>
    <div v-if="show_links === true" class="entire_navbar">
      <div class="links">
        <router-link to="/work_satinder" class="one_link"><h2>Work</h2></router-link>
        <h2>Tools&Tech</h2>
        <router-link class="contact" to="/contact_page">Contact</router-link>
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
import LogoSatinder from "@/components/logoSatinder.vue"
export default ({
  components: {
    LogoSatinder,
  },
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

* {
  padding: 0px;
  margin: 0px;
}
.navbar{
    display: grid;
    grid-auto-flow: column;
    align-items: center;
  .open{
    display: grid;
    justify-items: end;
  }
  .close{
    display: grid;
    justify-items: end;
  }
}
.entire_navbar{
  display: grid;
    text-align:start;
    height: 100vh;
    gap: 20px;
}
.name{
    h2,.blue,.yellow{
        font-weight: bold;
    }
}
.blue{
    color: #4b8bbe;
}
.yellow{
    color: #FFD43B;
}
.links{
    font-family: 'Anton',sans-serif;
    line-height: 2;
    display: grid;
    align-items: center;
    h2{
      font-size: 2rem;
      font-weight: bold;
    }
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
      line-height: 2;
    }
  }
}
</style>
