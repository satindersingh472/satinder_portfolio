<template>
  <div class="page">
    <nav-bar></nav-bar>
    <div class="heading">
      <h1>Tools
        <font-awesome-icon icon="fa-solid fa-screwdriver-wrench"/>
      </h1>
      <p>tools and technologies I use but not limited to because I tend to learn new stuff </p>
    </div>
    <div class="tools">
      <div class="one_tool">
          <font-awesome-icon class="fa-3x" icon ="fa-brands fa-html5" color="tomato" />
        <p>HTML5</p>
      
      </div>
      <div class="one_tool">
      <font-awesome-icon icon="fa-brands fa-css3-alt" class="fa-3x" color="blue" />
        <p>CSS3</p>
      </div>
      <div class="one_tool">
        <font-awesome-icon icon="fa-brands fa-sass" class="fa-3x"  color="rgb(205,103,153)"/>
        <p>Sass</p>
      </div>
      <div class="one_tool">
       <img src="@/assets/js.png" alt="js logo">
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
        <font-awesome-icon icon="fa-solid fa-terminal" class="fa-3x"/>
        <p>Terminal</p>
      </div>
      <div class="one_tool">
        <img src="@/assets/flask.png" alt="flask image">
        <p>Flask</p>
      </div>
      <div class="one_tool">
        <img src="@/assets/code.png" alt="vs code">
        <p>VS Code</p>
      </div>
      <div class="one_tool">
        <img src="@/assets/git.png" alt="git image">
        <p>Git</p>
      </div>
      <div class="one_tool">
        <font-awesome-icon icon="fa-brands fa-github" class="fa-3x" color="purple"/>
        <p>Github</p>
      </div>
      <div class="one_tool">
       <font-awesome-icon icon="fa-brands fa-figma" class="fa-3x"/>
        <p>Figma</p>
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
import { faBicycle,faTerminal,faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import {faHtml5,faCss3Alt,faSass,faJs,faPython,faVuejs,faGithub,faFigma} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faBicycle,faHtml5,faCss3Alt,faSass,faJs,faPython,faVuejs,faTerminal,faScrewdriverWrench,faGithub,faFigma)


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
    font-size: 3rem;
  }
}
.tools{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
  place-items: center;
  margin-top: 20px;
  .one_tool{
    display: grid;
    padding: 10px;
    place-items: center;
    text-align: center;
    font-size: 1rem;
    img{
      height: 50px;
      width: 50px;
    }
  }
}
@media only screen and (min-width:600px){
  .tools{
    gap: 30px;
    width: 70%;
    justify-self: center;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  }
}
</style>
