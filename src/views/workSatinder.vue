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
        <font-awesome-icon icon="fa-brands fa-sass" class="fa-3x"  color="rgb(205,103,153)"/>
        <p>Sass</p>
      </div>
      <div class="one_tool">
        <span class="fa-layers fa-fw fa-3x" style="background: #f0db4f">
          <span class="fa-layers-text">JS</span>
          </span>
          <p>Javascript</p>
      </div>
      <div class="one_tool">
        <font-awesome-icon icon="fa-brands fa-python" class="fa-3x" />
        <p>Python</p>
      </div>
      <div class="one_tool">
        <font-awesome-icon icon="fa-brands fa-vuejs" class="fa-3x" color="darkgreen"/>
        <p>VueJs</p>
      </div>
      <div class="one_tool">
        <font-awesome-icon icon="fa-solid fa-flask" class="fa-3x"/>
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
import { faBicycle,faFlask } from '@fortawesome/free-solid-svg-icons'
import {faHtml5,faCss3Alt,faSass,faJs,faPython,faVuejs} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faBicycle,faHtml5,faCss3Alt,faSass,faJs,faPython,faVuejs,faFlask)


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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
  margin-top: 20px;
  .one_tool{
    display: grid;
    padding: 10px;
    place-items: center;
    text-align: center;
    .icon{
      height: 50px;
      width: 50px;
      
    }
  }
}
</style>
