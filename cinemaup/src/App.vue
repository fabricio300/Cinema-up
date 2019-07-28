<template >
  <v-app style="background: #011526;">
    <v-toolbar app style="background: #024873;" >
      <v-toolbar-title class="headline text-uppercase">
        <span class="white--text">CinemaUP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2 white--text">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
    
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
