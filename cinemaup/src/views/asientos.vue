<template>

<div >
<v-card  class="mx-auto" style="background-color:transparent" >
    <v-layout py-4 pl-4>
      <v-flex shrink>
        <v-img class="my-auto   " height="500px" min-width="600px" :src=image ></v-img>
      </v-flex>
      <v-flex text-center >
        <v-container >
          <v-stepper v-model="e1" style="background-color:#024873">
            <v-stepper-header>
            <v-stepper-step class="white--text" :complete="e1 > 1" step="1">Horario</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step class="white--text" :complete="e1 > 2" step="2">Cantidad de boletos</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step class="white--text" :complete="e1 > 3" step="3">Asientos</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step class="white--text"   step="4">Pagar</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
            <v-stepper-content step="1" >
                <v-card
                class="py-3 px-3 mb-5"

                >
                    <p style="font-size:30px" class="ml-2"> Pelicula:  {{ pelicula }}</p>
                    <p style="font-size:30px" class="ml-2"> Clasificación: {{ clasificacion }} </p>
                    <p style="font-size:30px" class="ml-2"> Fecha:  {{ fecha  }}</p>
                    <p style="font-size:30px" class="ml-2"> Función:  {{ funcion }}</p>
                    <p style="font-size:30px" class="ml-2"> Duración:  {{ duracion }}</p>

                </v-card>

                <div class="mx-auto" style="text-align:center">
                    <v-btn 
                        class="monocromatico my-3 mx-3" style="width:500px" 
                        large v-for="(hora, key) in arryHorarios" @click="selectTime(hora.id, hora.date, hora.hour)" :key="key" >{{hora.hour}}</v-btn>
                </div>
                

            <!-- <v-divider></v-divider> -->
                
                
            </v-stepper-content>

            <v-stepper-content step="2">
                <v-card
                    class="py-3 px-3 mb-5"
                    style="display:flex; background-color: #96B3D9"
                >
                    <div>
                        <div style="display:flex">
                            <p style="font-size:40px; color:#024873" class="ml-2"> Pelicula: </p>
                            <p class="pt-2 ml-3"  style="font-size:30px; color:#024873"> {{ pelicula }} </p>
                        </div> 

                        <div style="display:flex">
                            <p style="font-size:40px" class="ml-2 white--text"> Clasificación: </p>
                            <p class="pt-2 ml-3 white--text" style="font-size:30px"> {{ clasificacion }} </p>
                        </div>   

                        <div style="display:flex">
                            <p style="font-size:40px" class="ml-2 white--text"> Fecha: </p>
                            <p class="pt-2 ml-3 white--text" style="font-size:30px"> {{ fecha }} </p>
                        </div>   

                        <div style="display:flex">
                            <p style="font-size:40px" class="ml-2"> Función: </p>
                            <p class="pt-2 ml-3 white--text" style="font-size:30px"> {{ funcion }} </p>
                        </div>  

                        <div style="display:flex">
                            <p style="font-size:40px" class="ml-2"> Duración: </p>
                            <p class="pt-2 ml-3" style="font-size:30px"> {{ duracion }} </p>
                        </div>                   
                    </div>

                    <div  class="mx-auto" style="width: 50%; background-color: #2F4F4F">

                        <p class="display-2 mt-4 white--text" style="text-align:center" > SUBTOTAL </p>
                        <p class="display-1 white--text"  style="text-align:center;" > Total: {{total}}  </p>
                        <v-spacer></v-spacer>
                        <div style="text-align:center" class="mr-4 my-5">
                            <div class="mr-2" style="font-size:25px">
                                <v-btn fab small color="white" flat v-on:click="lessBoletosInfante(BoletosNiño)"  >-</v-btn>
                                <label  class="white--text">Niño: {{BoletosNiño}} </label>
                                <v-btn fab small color="white" flat v-on:click="addBoletosInfante(BoletosNiño)" >+</v-btn >
                                <label  class="white--text">Costo$ {{costoNiño}} </label>
                            </div>
                            <div class="mr-2" style="font-size:25px">
                                <v-btn fab small color="white" flat v-on:click="lessBoletosAdulto(BoletosAdulto)"  >-</v-btn>
                                <label  class="white--text">Adulto: {{BoletosAdulto}} </label>
                                <v-btn fab small color="white" flat v-on:click="addBoletosAdulto(BoletosAdulto)" >+</v-btn >
                                <label  class="white--text">Costo$ {{costoAdulto}} </label>
                            </div>                            
                        </div>

                    </div>
                </v-card>
                <v-btn
                v-if="BoletosAdulto+BoletosNiño==0"
                disabled
                color="primary"
                @click="e1 = 3"
                >
                Continue
                </v-btn>

                <v-btn
                v-if="BoletosAdulto+BoletosNiño!=0"
                color="primary"
                @click="e1 = 3"
                >
                Continue
                </v-btn>

                <v-btn text @click="e1 = 1" >Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
                <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
                ></v-card>

                <v-container  row>
                    <v-btn v-on:click="cambiarEstado(0)" :color="asientos[0].color" >A1</v-btn>
                    <v-btn v-on:click="cambiarEstado(1)" :color="asientos[1].color" >B1</v-btn>
                    <v-btn v-on:click="cambiarEstado(2)" :color="asientos[2].color" >C1</v-btn>
                    <v-btn v-on:click="cambiarEstado(3)" :color="asientos[3].color" >D1</v-btn>
                </v-container>
                <v-container row>
                    <v-btn v-on:click="cambiarEstado(4)" v-bind:color="asientos[4].color" >A2</v-btn>
                    <v-btn v-on:click="cambiarEstado(5)" :color="asientos[5].color" >B2</v-btn>
                    <v-btn v-on:click="cambiarEstado(6)" :color="asientos[6].color" >C2</v-btn>
                    <v-btn v-on:click="cambiarEstado(7)" :color="asientos[7].color" >D2</v-btn>
                </v-container>


                <!-- <v-container row  v-for="asiento in asientos"  v-bind:key="asiento"> 
                    <v-btn v-if="asiento.status==1" disabled color="primary" >
                        {{asiento.name}}
                    </v-btn>
                    <v-btn v-else-if="asiento.status==0" color="primary" >
                        {{asiento.name}}
                    </v-btn>
                </v-container> -->
                
                <v-btn
                v-if="boletosTotales!=0"
                disabled
                color="primary"
                @click="e1 = 4"
                >
                Continue
                </v-btn>

                <v-btn
                v-if="boletosTotales==0"
                color="primary"
                @click="e1 = 4"
                >
                Continue
                </v-btn>

                <v-btn text @click="e1 = 2">Cancel</v-btn>
            </v-stepper-content>
            <v-stepper-content step="4">
                <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px" ></v-card>
                <v-text-field v-model="email"  color="primary" prepend-icon="email" name="correo" label="Correo" type="text"></v-text-field>
                <br>
                 Total a pagar: {{total}}
                <div>
                    <div ref="card"></div>
                </div>
                <v-btn v-if="email!=null && email!='' " color="primary" v-on:click="pagar(email, total)" >
                Pagar
                </v-btn>
                <v-btn v-if="email==null" disabled color="primary" v-on:click="pagar(email, total)" >
                Pagar
                </v-btn>

               

                <v-btn text @click="e1 = 3">Cancel</v-btn>
            </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
        </v-container>
      </v-flex>
    </v-layout>

  </v-card>
  <v-content>
    <router-view></router-view>
  </v-content>

</div>

</template>

<script lang="js">

let stripe = Stripe(`pk_test_AjSflyejK3J7quTKNeWfBY0v00XIuUpWtP`),
  elements = stripe.elements(),
  card = undefined;
//import axios from "axios";
export default  {
  data() {
    return{
        movie:{},
        e1: 0,
        arryHorarios:[],
        hora:"",
        BoletosNiño:0,
        BoletosAdulto:0,
        total:0,
        costoAdulto:75,
        costoNiño:55,
        asientos:[],
        boletosTotales:0,
        email:null,
        pelicula: "",
        clasificacion: "",
        fecha: "",
        funcion: "",
        duracion: "",
        image: null,
        idCartelera: null,
        idFuncion: null
        

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
      selectTime(id) {        
        this.idFuncion = id
        console.log(this.hora);
        
        this.e1=2;
      },
      addBoletosInfante(BoletosNiño){
          this.BoletosNiño=BoletosNiño+1
          this.total=(this.BoletosAdulto*this.costoAdulto)+(this.BoletosNiño*this.costoNiño)
          this.boletosTotales=this.BoletosAdulto+this.BoletosNiño

      },
      lessBoletosInfante(BoletosNiño){
          if(BoletosNiño!=0){
              this.BoletosNiño=BoletosNiño-1
          }
          this.total=(this.BoletosAdulto*this.costoAdulto)+(this.BoletosNiño*this.costoNiño)
          this.boletosTotales=this.BoletosAdulto+this.BoletosNiño


      },
      lessBoletosAdulto(BoletosAdulto){
          if(BoletosAdulto!=0){
              this.BoletosAdulto=BoletosAdulto-1
          }
          this.total=(this.BoletosAdulto*this.costoAdulto)+(this.BoletosNiño*this.costoNiño)
          this.boletosTotales=this.BoletosAdulto+this.BoletosNiño

      },
      addBoletosAdulto(BoletosAdulto){
        this.BoletosAdulto=BoletosAdulto+1
        this.total=(this.BoletosAdulto*this.costoAdulto)+(this.BoletosNiño*this.costoNiño)
          this.boletosTotales=this.BoletosAdulto+this.BoletosNiño

          
      },
      cambiarEstado(id){
          if (this.boletosTotales>0) {
              
            if(this.asientos[id].color=="primary"){
                console.log("entre");
                
                this.asientos[id].color="success"
                this.boletosTotales=this.boletosTotales-1
            }
            
          }else if( this.asientos[id].color=="success"){
                this.asientos[id].color="primary"
                this.boletosTotales=this.boletosTotales+1

            }
          
          
      },
      pagar(email,total){

        console.log(  
            ` idCartelera: ${ this.idCartelera }, 
              idFuncion: ${ this.idFuncion }, 
              cantidadBoletos: ${ total }
              email: ${ email }` )

        // stripe.createToken(card).then(function(result) {
        //     console.log(result.token.id)
        //     axios.post("https://api-compras-cinema-up.herokuapp.com/api/v1/Boletos/", {
        //         idCartelera: this.idCartelera,
        //         idFuncion: this.idFuncion,
        //         JSON:"hola",
        //         token:result.token.id,
        //         cantidadBoletos:total
        //     }).then(function (response) {
        //         this.$router.push({ path: '/' })
                
        //     }).catch(function (error2) {
        //         console.log(error2)
        //     });
        // }).catch(function (error2) {
        //     console.log(error2)
        // });

      },
      GetFunciones(funciones){
        console.log('Funciones')
        console.log(funciones)
        var aux_funciones = []
        var i = 0
        const amount_array = funciones.length
        for (i = 0; i < amount_array-1; i++){
            var date = funciones[i].split(' ')
            var hour = (date[3].split('+'))[0]
            this.arryHorarios[i] = { 'id': date[0][1], 'date': date[2], 'hour':hour }
        }
      }

},
    created(){

        this.movie = JSON.parse(localStorage.getItem('movie'))
        this.pelicula= this.movie.pelicula.nombre
        this.clasificacion= this.movie.pelicula.clasificacion
        this.fecha= "12-05-2019"
        this.funcion= this.movie.sala.sala
        this.duracion= this.movie.pelicula.duracion
        this.image = this.movie.pelicula.imagen
        this.GetFunciones(this.movie.funciones.split(','));
        this.idCartelera = this.movie.idCartelera

        let asientos=[];
        let letra="A"
        for (let  i = 0; i < 30;  i++) { 
            if (i==10) {
                letra="B"
            }
            if (i==20) {
                letra="C"
            }
            let  element = {
                    id: i,
                    name: letra+i,
                    status: "0",
                    color:"primary"
                }
            asientos.push(element)
        }

        this.asientos=asientos
    //   let api = "http://127.0.0.1:3333/api/v1"
    //   axios.get(api + "/pizzas/"+this.id ).then((response) => {
    //     this.pizza = response.data
    //     this.precio=this.pizza.precio
    //   })
    },
     beforeDestroy() {
            card.destroy(this.$refs.card);
        },
};
</script>

<style>

</style>
