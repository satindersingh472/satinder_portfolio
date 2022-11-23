<template>
  <div>
    <v-container>
      <v-row justify="center">
        <p class="indigo--text text--darken-4 my-10 text-h2">
          Tools
        </p>
      </v-row>
      <v-card flat class="rounded-lg grey lighten-2 ">
        <v-row justify="center" >
          <v-col   style="display:grid;place-items:center;" >
            <v-icon class="deep-orange--text" size="75">
              mdi-language-html5
            </v-icon>
            <p class="text-h6" >HTML</p>
          </v-col>
          <v-col style="display:grid;place-items:center;" >
            <v-icon class="blue--text" size="75" >mdi-language-css3</v-icon>
            <p class="text-h6">CSS3</p>
          </v-col>
          <v-col style="display:grid;place-items:center;" >
            <v-icon class="yellow--text text--darken-3 " size="75" >mdi-language-javascript</v-icon>
            <p class="text-h6">Javascript</p>
          </v-col>
          <v-col style="display:grid;place-items:center;" >
            <v-icon class="green--text" size="75" >mdi-vuejs</v-icon>
            <p class="text-h6">VueJs</p>
          </v-col>
          <v-col style="display:grid;place-items:center;" >
            <v-icon class="blue--text" size="75" >mdi-language-python</v-icon>
            <p class="text-h6">Python</p>
          </v-col>
          <v-col style="display:grid;place-items:center;" >
            <v-icon class="blue--text" size="75" >mdi-vuetify</v-icon>
            <p class="text-h6">Vuetify</p>
          </v-col>
          <v-col style="display:grid;place-items:center;" >
            <v-img src="@/assets/flask.png" contain max-height="75" max-width="75" width="100%" ></v-img>
            <p class="text-h6">Flask</p>
          </v-col>
          <v-col style="display:grid;place-items:center;" >
        <v-icon class="grey--text text--darken-3 " size="75" >mdi-database</v-icon>
            <p class="text-h6">Maridb</p>
          </v-col>
          <v-col style="display:grid;place-items:center;" >
            <v-img src="@/assets/postman.webp" contain max-height="75" max-width="75" width="100%"  ></v-img>
            <p class="text-h6">Postman</p>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
