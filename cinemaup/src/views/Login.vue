<template>

    <div  class="contall" >
        <v-img
        src="https://d2fy2et424xkoh.cloudfront.net/blog/wp-content/uploads/2019/04/Avengers-Torrent-Endgame-%E2%80%93-Download-Full-HD-1080P-720P.jpg"
        :aspect-ratio="2.15"
        class="grey lighten-2"
        max-width="auto"
        max-height="auto"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        
        >
        <v-content >
        <v-alert v-if="error" :value="true" type="error" dismissible transition="scale-transition" >
            {{errorMesage}}
        </v-alert>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                <v-toolbar  dark color="#0d315c">
                    <v-toolbar-title >Iniciar sesion</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                    <v-text-field v-model="email" color="primary" prepend-icon="email" name="correo" label="Correo" type="text"></v-text-field>
                    <v-text-field v-model="password" color="primary" prepend-icon="lock" name="password" label="Contraseña" id="password" type="password"></v-text-field>
                    
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn v-if="email==null || password==null" disabled v-on:click="Login(email, password)" color="#0d315c">Iniciar sesion</v-btn>
                    <v-btn v-if="email&&password!=null"  v-on:click="Login(email, password)" color="#0d315c">Iniciar sesion</v-btn>
                </v-card-actions>
                </v-card>
            </v-flex>
            </v-layout>
        </v-container>
        <v-layout align-center column justify-center>
            <h4 class="subheading">¿No tienes cuenta? 
                <v-btn  flat :to="{name:'Register'}">
                    <span class="mr-2 white--text">Registrate</span>
                </v-btn>
            </h4>
        </v-layout>
        </v-content>
    
        </v-img>   
    </div>

</template>

<script lang="js">
import axios from "axios";
export default  {
  data() {
    return{
        mensaje: 'hola ',
        email:null,
        password:null,
        error:false,
        errorMesage:"",
        colors: [
            'primary',
            'secondary',
            'yellow darken-2',
            'red',
            'orange',
        ],
        model: 0,
        showArrows: false,
        hideDelimiters: true,
        cycle: true,
        
    };
  },
  methods:{
      Login(email, password) {
  

        let api = "http://127.0.0.1:3333/api/v1"
          axios.post(api + "/login",{
            email: email,
            password: password, 
          }).then((response) => {
              localStorage.setItem("token",response.data.token)
              localStorage.setItem("username",response.data.user.username)
              localStorage.setItem("email",response.data.user.email)
              localStorage.setItem("id",response.data.user.id)
              this.$store.state.login=true;
              this.$router.push({ path: 'Perfil' })
          }).catch(function (error2) {
              //esta parte es de control de errores hay que modificar el valor del 
              //error a true para que se muestren no obstante no se como cambiarlo por eso quedo asi 
              //this.error=true;
              //this.errorMesage="Usuario o contraseña incorrectos"
            
            });
        
      },
    },
};
</script>

<style>
.contall{
    position: absolute;
    width: 100%;
    min-height: 100%;
    height: auto;
    background: black;
    color: white;
   
}
.contimagen{
    height: auto;
    width: 25%;
    background: transparent;
    color: black;
    margin: auto;
}
.nav{
   
    height: auto;
    background: #0d315c;
    color: white;
   
}
.topright {
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: 18px;
}
</style>
