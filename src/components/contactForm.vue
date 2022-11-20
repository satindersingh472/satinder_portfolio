<template>
  <div>
    <v-container>
      <v-row class="my-10" justify="center">
        <p class="indigo--text text--darken-4 my-10 text-h4 text-md-h3">
          Get In Touch
        </p>
      </v-row>
      <v-row justify="center">
        <v-card width="500px" class="pa-1 ma-2">
         
          <v-form action="https://formspree.io/f/mjvzoeoy" method="post">
            <v-container>
              <v-row justify="center">
                <v-col cols="12" lg="6">
                  <v-text-field
                    class="pa-1"
                    outlined
                    label="First Name"
                    name="First Name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    class="pa-1"
                    outlined
                    label="Last Name"
                    name="Last Name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12"> 
                  <v-text-field outlined label="Email" name="Email" ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea outlined label="message" name="Message" ></v-textarea>
                </v-col>
                <v-btn type="submit" class="success ma-3"> submit</v-btn>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
