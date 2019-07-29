<template >
  <v-app style="background: #011526;">
    <v-toolbar app style="background: #024873;" >
      <v-toolbar-title class="headline text-uppercase">
        <span ><a href="/"  class="white--text" style="text-decoration: none;" >CinemaUP</a></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-flex xs12 sm6 class="ml-3" >
          <v-text-field
            label="Busca tu pelicula"
            single-line
            color="#96B3D9"
          ></v-text-field>
        </v-flex>

        
      <v-btn
        v-if="this.$store.state.login==false && login==null "
        flat
        text
        class="white--text"
        :to="{name:'Login'}"
      >
        Iniciar Sesión
      </v-btn>
      <v-btn
        v-if="this.$store.state.login==false && login==null "
          text
           :to="{name:'VIP'}"
          color="orange"
      >
        VIP
      </v-btn>
      <v-btn
        v-if="this.$store.state.login==true || login=='true'"
          text
          color="orange"
          v-on:click="cerrarSesion()"
      >
        Cerrar sesion
      </v-btn>
    </v-toolbar>

      <v-content>
      <router-view></router-view>
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
      login: localStorage.getItem("login")
    }
  },
  methods:{
    cerrarSesion(){
      localStorage.clear()
      this.$router.push({ path: 'Login' })
    }
  }
}
</script>

