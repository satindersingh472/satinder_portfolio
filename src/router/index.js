import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/views/homePage.vue"
import ContactPage from "@/views/contactPage.vue"
import AboutMe from "@/views/aboutMe.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: [
      {
        title: `Hi, I'm Satinder Singh`
      },
      {
        name: `author`,
        content: `Satinder Singh`
      },
      {
        name: `description`,
        content: `I am a Full-Stack Web Developer`
      },
      {
        name: `keywords`,
        content: `Full-Stack Web Developer, HTML, CSS, Javascript, Python, Front End, Back End, Database, Mariadb, SQL, Vuejs, Flask`
      }
    ]
  },
  {
    path: `/contact_page`,
    component: ContactPage,
    meta:[
      {
        title: `Satinder's Contact`
      },
      {
        name: `author`,
        content: `Satinder Singh`
      },
      {
        name: `description`,
        content: `Please contact via Email or LinkedIn`
      },
      {
        name: `keywords`,
        content: `Satinder Singh, full-stack web development, contact me, email or linkedin`
      }
    ]
  },
  {
    path: `/about_me`,
    component: AboutMe,
    meta:[
      {
        title: 'About Satinder'
      },
      {
        name: `author`,
        content: `Satinder Singh`
      },
      {
        name: `description`,
        content: `Description about Satinder's projects, skills and personal information`
      },
      {
        name: `keywords`,
        content: `Satinder Singh, full-stack web developement`
      }
    ]
  }

]

const router = new VueRouter({
  routes
});

/*remove the old meta tag */
router.beforeEach((to, from, next) => {
  let current_meta_tags = document.querySelectorAll(`meta`);
  for (let i = 0; i < current_meta_tags.length; i++) {
    current_meta_tags[i].remove();
  }
  /*put the title tag inside head */
  let new_meta_tags = to[`meta`];
  document.querySelector(`title`)[`innerText`] = new_meta_tags[0][`title`];
/*put the other meta tags other than the title tag inside the head */
  for (let i = 1; i < new_meta_tags.length; i++) {
    document
      .querySelector(`head`)
      .insertAdjacentHTML(
        `afterbegin`,
        `<meta name="${new_meta_tags[i][`name`]}" content="${
          new_meta_tags[i][`content`]
        }"/>`
      );
  }
  document.querySelector(`head`).insertAdjacentHTML(
    `afterbegin`,
    `<meta charset="utf-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width,initial-scale=1.0">`
  );

  from;
  next();
});

export default router
