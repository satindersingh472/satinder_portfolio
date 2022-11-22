<template>
  <div>
    <v-container fluid>
      <v-row justify="center">
        <h2 class="indigo--text text--darken-4 my-10 text-h2">Projects</h2>
      </v-row>
  <myride-brief class="my-10" ></myride-brief>
  <foodie-brief ></foodie-brief>
  <okotoks-brief></okotoks-brief>
    </v-container>
  </div>
</template>

<script>
import FoodieBrief from '@/components/foodieBrief.vue'
import MyrideBrief from '@/components/myrideBrief.vue'
import OkotoksBrief from '@/components/okotoksBrief.vue'
export default {
  components:{
    MyrideBrief,
    FoodieBrief,
    OkotoksBrief
  }
}
</script>

<style lang="scss" scoped></style>
