<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item :to="link.url" v-for="link in links" :key="link.name">
          <v-list-item-content>
            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="grey darken-4" dark>
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
      {
        name: 'Foreword And Acknowledgments',
        url: '/foreword-and-acknowledgments',
        icon: 'home'
      },
      {
        name: 'Executive Summary',
        url: '/executive-summary',
        icon: 'home'
      },
      // {
      //   name: 'Situation Anaysis Of Client And Problem Statement',
      //   url: '/situation-analysis',
      //   icon: 'home'
      // },
      {
        name: 'Overview Of The Client',
        url: '/overview-of-client',
        icon: 'home'
      },
      {
        name: 'Analysis Of The Problem',
        url: '/analysis-of-the-problem',
        icon: 'home'
      },
      {
        name: 'Profile Of Target Publics',
        url: '/profile-of-target-publics',
        icon: 'home'
      },
      {
        name: 'Campaign Design And Implementation',
        url: '/campaign-design-and-implementation',
        icon: 'home'
      },
      // {
      //   name: 'Planning Process',
      //   url: '/planning-process',
      //   icon: 'home'
      // },
      // {
      //   name: 'Goals And Objectives',
      //   url: '/goals-and-objectives',
      //   icon: 'home'
      // },
      {
        name: 'Schedule And Budget',
        url: '/schedule-and-budget',
        icon: 'home'
      },
      {
        name: 'Evaluation Plan',
        url: '/evaluation-plan',
        icon: 'home'
      },
      // {
      //   name: 'Conclusion',
      //   url: '/conclusion',
      //   icon: 'home'
      // },
      // {
      //   name: 'Appendix',
      //   url: '/appendix',
      //   icon: 'home'
      // },
    ]
  })
}
</script>
