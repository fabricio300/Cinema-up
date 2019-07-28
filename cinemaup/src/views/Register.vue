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
            <v-content>
            
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-alert :value="error" type="error" dismissible transition="scale-transition" >
                        {{errorMesage}}
                    </v-alert>
                    <v-card class="elevation-12">
                    <v-toolbar dark color="#0d315c">
                        <v-toolbar-title>Registrate</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                        <v-text-field v-model="name" prepend-icon="person" name="nombre" label="Nombre" type="text"></v-text-field>
                        <v-text-field v-model="email" prepend-icon="email" name="correo" label="Correo" type="text"></v-text-field>
                        <v-text-field v-model="password" prepend-icon="lock" :append-icon="show2 ? 'visibility' : 'visibility_off'" name="password" label="Password" id="password"  :type="show2 ? 'text' : 'password'" @click:append="show2 = !show2"></v-text-field>
                        <v-text-field v-model="passwordConfirm" prepend-icon="lock" :append-icon="show ? 'visibility' : 'visibility_off'" name="password" label="Confirmar contraseña" id="passwordConfirm" :type="show ? 'text' : 'password'" @click:append="show = !show"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn v-if="name==null || email==null || password==null ||  password!=passwordConfirm" disabled  v-on:click="signup(name, email, password, passwordConfirm) " color="primary">Registrate</v-btn>
                        <v-btn v-if="name!=null &&  email!=null && password!=null &&   password==passwordConfirm"   v-on:click="signup(name, email, password, passwordConfirm) " color="primary">Registrate</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-flex>
                </v-layout>
            </v-container>
            <v-layout align-center column justify-center>
                 <h4 class="subheading" :to="{name:'Register'}" >¿tienes cuenta?
                    <v-btn  flat :to="{name:'Login'}">
                        <span class="mr-2 white--text">Inicia sesion</span>
                    </v-btn>
                </h4>
            </v-layout>
        </v-content>
        <v-content>
            <router-view></router-view>
        </v-content>
        </v-img>
       


        
            
    </div>


</template>

<script lang="js">
//import axios from "axios";
export default  {
  data() {
    return{
        show2: false,
        show: false,
        mensaje: 'hola ',
        name:null,
        email:null,
        password:null,
        passwordConfirm:null,
        error:false,
        errorMesage:"",
        mensaje: 'hola ',
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
      signup(name, email, password, passwordConfirm) {
         /* this.error = false;
        let api = "http://127.0.0.1:3333/api/v1"
          axios.post(api + "/signup",{
            username:name,
            email: email,
            password: password, 
          }).then((response) => {
              localStorage.setItem("username",response.data.user.username)
              localStorage.setItem("email",response.data.user.email)
              localStorage.setItem("id",response.data.user.id)
              this.$store.state.login=true;
              this.$router.push({ path: 'Perfil' })
            console.log('Todo bien')
          }).catch(err => {
            this.error = true;
            this.errorMesage="campos invalidos"
            // setTimeout(() => this.error=false, 3000);

            console.log(err);
            console.log(err.status);
            console.log(err);
          });*/
      },
    },
};
</script>

<style>

.topright {
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: 18px;
}
</style>
