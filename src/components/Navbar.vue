<template>
  <div class>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item :to="link.url" v-for="link in links" :key="link.name">
          <!-- <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>-->
          <v-list-item-content>
            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{this.$route.name}}</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    links: [
      {name: 'Cover', url: '/', icon: 'home'},
      {name: 'Problem Definition', url: '/problem-defintion', icon: 'home'},
      {
        name: 'Planning And Programming',
        url: '/planning-and-programming',
        icon: 'home'
      },
      {
        name: 'Taking Action And Communicating',
        url: '/taking-action-and-communicating',
        icon: 'home'
      },
      {
        name: 'Evaluating The Program',
        url: '/evaluating-the-program',
        icon: 'home'
      }
    ]
  })
}
</script>
