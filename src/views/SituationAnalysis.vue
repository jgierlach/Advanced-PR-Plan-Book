<template>
  <div class="container">
    <h1 class="text-center">
      Situation Anaysis Of Client And Problem Statement
    </h1>
    <br />
    <v-row align="center">
      <v-col class="text-center" cols="12" sm="12">
        <div class>
          <router-link to="/overview-of-client">
            <v-btn large color="primary">Overview Of The Client</v-btn>
          </router-link>
        </div>
        <br />
        <div class>
          <router-link to="/analysis-of-the-problem">
            <v-btn large color="green">Analysis Of The Problem</v-btn>
          </router-link>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
