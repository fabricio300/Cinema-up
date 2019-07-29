<template>
    <div>
        <div style="display:flex;  flex-wrap: wrap;">
            <div class="mt-5 ml-5 size-textdescuento">
                <p class="display-2 white--text">Disfruta de un </p>
                <p style="font-size:200px; color:#ff9800">30 %</p>
                <p class="display-2 white--text" >de descuento en todas tus peliculas al ser un usuario <strong class="display-4" style="color:#ff9800">VIP</strong></p>
            </div>
            <div class="my-5 size-subcripcion">
                <v-alert :value="error" type="error" dismissible transition="scale-transition" >
                        {{errorMesage}}
                    </v-alert>
                <p  class="display-2 white--text" style="text-align:center;" >¿ Aun no lo eres ?</p>
                <p  class="white--text" style="text-align:center; font-size:20px"> Aprovecha y subscribete ahora ! </p>
                <div style="background-color:white; width:80%" class="px-5 py-5 mt-5 grey lighten-2 mx-auto">
                    <v-form >
                        <v-text-field v-model="name"  color="primary" prepend-icon="people" name="name" label="Nombre" type="text"></v-text-field>
                        <v-text-field v-model="email"  color="primary" prepend-icon="email" name="correo" label="Correo" type="text"></v-text-field>
                        <v-text-field v-model="password" color="primary" prepend-icon="lock" name="password" label="Contraseña" id="password"  :append-icon="show2 ? 'visibility' : 'visibility_off'"   :type="show2 ? 'text' : 'password'" @click:append="show2 = !show2" ></v-text-field>
                        <v-text-field  v-model="password2" color="primary" prepend-icon="lock" name="password" label="Confirma tu contraseña" id="password"  :append-icon="show ? 'visibility' : 'visibility_off'"   :type="show ? 'text' : 'password'" @click:append="show = !show"></v-text-field>
                        <br>
                        <div>
                            <div ref="card"></div>
                        </div>
                        <br>
                        <v-btn v-if="name==null || email==null || password==null || password!=password2" color="#024873" disabled>
                            <span  class="mr-2  white--text"  v-on:click="registrar(password, password2, name ,email ,status)" >Crear cuenta</span>
                        </v-btn>  
                        <v-btn v-if="name!=null && email!=null && password!=null && password==password2" color="#024873">
                            <span class="mr-2  white--text" v-on:click="registrar(password, password2, name ,email ,status)" >Crear cuenta</span>
                        </v-btn>              
                    </v-form>                
                </div>
            </div>        
        </div>

    </div>
</template>

<script lang="js" >
let stripe = Stripe(`pk_test_AjSflyejK3J7quTKNeWfBY0v00XIuUpWtP`),
  elements = stripe.elements(),
  card = undefined;
    export default  {
        data() {
            return{
                urlApi:'https://api-usuarios-cinenaup.herokuapp.com',
                email:null,
                password:null,
                password2:null,
                show2: false,
                show: false,
                error:false,
                errorMesage:"",
                status:1,
                name:null,
            };
        },
        mounted() {
            let style = {
                base: {
                border: '1px solid #D8D8D8',
                borderRadius: '4px',
                color: "#000",
                background:"red"
                },
                invalid: {
                // All of the error styles go inside of here.
                }
            };
            card = elements.create('card', {style});
            card.mount(this.$refs.card);
            },
        methods:{
            registrar(password, password2, name ,email ,status){
            
                if(true){
                    stripe.createToken(card).then(function(result) {
                    console.log(result.token.id)


                    axios.post("https://api-usuarios-cinenaup.herokuapp.com/api/usuarios", {
                                        nombre:name,
                                        password:password,
                                        correo:email,
                                        status:status  
                                    }).then(function (response) {
                                        
                                    axios.post("https://api-usuarios-cinenaup.herokuapp.com/api/usuarios/pay", {
                                        token:result.token.id,
                                        monto:10,
                                          
                                    }).then(function (response) {
                                        console.log(response);
                                        this.$store.state.login=true;
                                        localStorage.setItem("login","true")
                                        this.$router.push({ path: '/' })
                                        
                                    }).catch(function (error2) {
                                        console.log(error2)
                                        this.errorMesage="Hubo un error intenta mas tarde"
                                    });


                                        
                                    }).catch(function (error2) {
                                        console.log(error2)
                                        this.errorMesage="Hubo un error intenta mas tarde"
                                    });





                    console.log(`Datos: ${ this.email } - ${ this.password }`)
                    }).catch(function (error2) {
                        console.log(error2)
                        this.errorMesage="Usuario o contraseña incorrectos"
                    });

                }
                
            }
            
        },
        beforeDestroy() {
            card.destroy(this.$refs.card);
        },
    };
</script>

<style>

    .size-subcripcion{
        width:50%
    }

    .size-textdescuento{
        width:600px 
    }

    @media only screen and (max-width: 1125px) {
        .size-subcripcion{
            width:100%
        }

        .size-textdescuento{
            text-align:center;
            width:100%
        }

    }
</style>
