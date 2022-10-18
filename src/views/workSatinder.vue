<template>
  <div class="page">
    <nav-bar></nav-bar>
    <div class="heading">
      <h1>Tools</h1>
    </div>
    <div class="tools">
      <div class="one_tool">
          <font-awesome-icon class="fa-3x" icon ="fa-brands fa-html5" color="tomato" />
        <p>HTML5</p>
      
      </div>
      <div class="one_tool">
      <font-awesome-icon icon="fa-brands fa-css3-alt" class="fa-3x" color="blue" />
        <p>CSS</p>
      </div>
      <div class="one_tool">
        <font-awesome-icon icon="fa-brands fa-sass" class="fa-3x" />
        <p>Sass</p>
      </div>
      <div class="one_tool">
        <font-awesome-icon icon="fa-brands fa-js" class="fa-3x"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navBar.vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBicycle } from '@fortawesome/free-solid-svg-icons'
import {faHtml5,faCss3Alt,faSass,faJs} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faBicycle,faHtml5,faCss3Alt,faSass,faJs)


export default {
  components: {
    NavBar,
    FontAwesomeIcon
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
  gap: 10px;
}
.heading{
  display: grid;
  place-items: center;
  h1{
    font-weight: bold;
    color: #4b8bbe;
  }
}
.tools{
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  margin-top: 20px;
  .one_tool{
    display: grid;
    padding: 10px;
    place-items: center;
    text-align: center;
    &:hover{
        box-shadow: 3px 3px 6px grey ;
      }
    .icon{
      height: 50px;
      width: 50px;
      
    }
  }
}
</style>
