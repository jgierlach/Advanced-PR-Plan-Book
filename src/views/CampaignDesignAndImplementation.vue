<template>
  <transition name="fade" appear>
    <div class="container">
      <h1 class="text-center">Campaign Design And Implementation</h1>
      <br />
      <v-row align="center">
        <v-col class="text-center" cols="12" sm="12">
          <div class>
            <router-link to="/planning-process">
              <v-btn large color="primary">Planning Process</v-btn>
            </router-link>
          </div>
          <br />
          <div class>
            <router-link to="/goals-and-objectives">
              <v-btn large color="green">Goals And Objectives</v-btn>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style></style>
