<template>
  <div class>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item :to="link.url" v-for="link in links" :key="link.name">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
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
      {name: 'home', url: '/', icon: 'home'},
      {name: 'about', url: '/about', icon: 'home'},
      {name: 'plop', url: '/plop', icon: 'home'}
    ]
  })
}
</script>
