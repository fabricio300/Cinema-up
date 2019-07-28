<template>
    <div>
        <div style="display:flex;  flex-wrap: wrap;">
            <div class="mt-5 ml-5 size-textdescuento">
                <p class="display-2 white--text">Disfruta de un </p>
                <p style="font-size:200px; color:#ff9800">30 %</p>
                <p class="display-2 white--text" >de descuento en todas tus peliculas al ser un usuario <strong class="display-4" style="color:#ff9800">VIP</strong></p>
            </div>
            <div class="my-5 size-subcripcion">
                <p  class="display-2 white--text" style="text-align:center;" >¿ Aun no lo eres ?</p>
                <p  class="white--text" style="text-align:center; font-size:20px"> Aprovecha y subscribete ahora ! </p>
                <div style="background-color:white; width:80%" class="px-5 py-5 mt-5 grey lighten-2 mx-auto">
                    <v-form >
                        <v-text-field v-model="email"  color="primary" prepend-icon="email" name="correo" label="Correo" type="text"></v-text-field>
                        <v-text-field v-model="password" color="primary" prepend-icon="lock" name="password" label="Contraseña" id="password" type="password"></v-text-field>
                        <v-text-field color="primary" prepend-icon="lock" name="password" label="Confirma tu contraseña" id="password" type="password"></v-text-field>
                        <v-btn color="#024873">
                            <span class="mr-2  white--text" v-on:click="registrar()" >Crear cuenta</span>
                        </v-btn>                   
                    </v-form>                
                </div>
            </div>        
        </div>

    </div>
</template>

<script>
    export default  {
        data() {
            return{
                email:"",
                password:""
            };
        },
        methods:{
            registrar(){
                console.log(`Datos: ${ this.email } - ${ this.password }`)
            }
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
