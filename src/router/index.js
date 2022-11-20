import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/views/homePage.vue"
import ContactPage from "@/views/contactPage.vue"
import WorkSatinder from "@/views/workSatinder.vue";
import CaseMyride from '@/views/caseMyride.vue'
import CaseFoodie from '@/views/caseFoodie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: [
      {
        title: `Satinder Singh`
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
        title: `Contact Satinder` 
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
    path: `/work_satinder`,
    component: WorkSatinder,
    meta:[
      {
        title: 'work satinder'
      },
      {
        name: `author`,
        content: `Satinder singh`
      },
      {
        name: `description`,
        content: `Description about the projects from satinder`
      },
      {
        name: `keywords`,
        content: `vue projects, python projects, javascript, front-end, database, backend`
      }
    ]
  },
  {
    path: '/myride',
    component: CaseMyride,
    meta:[
      {
        title: 'Satinder Myride'
      },
      {
        name: 'author',
        content: 'Satinder Singh'
      },
      {
        name: 'description',
        content: 'explaining about what is myride, how it works and what technologies are used'
      },
      {
        name: 'keywords',
        content: 'rides,easy_use, case_study,explaining,what_is_my_ride'
      }
    ]
  },
  {
    path: '/foodie',
    component: CaseFoodie,
    meta:[
      {
        title: 'Satinder Foodie'
      },
      {
        name: 'author',
        content: 'Satinder Singh'
      },
      {
        name: 'description',
        content: 'Case study for foodie explaining use case and technologies used for foodie project'
      },
      {
        name: 'keywords',
        content: 'foodie,order_food,cheap_food,good_food,fresh_food,hot_food,better_customer_service'
      }
    ]
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior(to,from,savedPosition){
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }

  }

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
