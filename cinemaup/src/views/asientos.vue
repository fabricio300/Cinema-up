<template>

<div class="contall centrar">

   
      
        <div class="centrar" style="width:80%; height:400px; overflow: hidden; margin-top:50px;">
                    <img :src=image style="width:100%; margin:-40%">
        </div>
        <div >    
        <v-container margin="auto"   style="width:100%;   overflow: hidden;">
          <v-stepper v-model="e1" style="background-color:#024873; color:white;">
            <v-stepper-header style="background-color:#024873;">
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
                    

                    <div  class="mx-auto" style="width: 500px; background-color: #2F4F4F">

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

                <v-btn text @click="e1 = 1" >Regresar</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
                <div class="contenidoBara">
         
          <div class="indicaciones centrar" style="color:white">
             <p style="width: 100%; text-align: center; color: gold;">Eliga sus asientos</p>
            <p style="width: 100%; text-align: center;">De click sobre un lugar disponible para selecionar, para cambiar lugar de click sobre un lugar apartado y escoja otro</p><br>
            <div class="asientos"></div>
            <p style="margin-right:5px;">disponible</p>
            <div class="asientos apartado"></div>
             <p style="margin-right:5px;">apartado</p>
            <div class="asientos ocupado"></div>
            <p style="margin-right:5px;">ocupado</p>
            <p style="margin-left:80px;  border-bottom:2px solid gold;">Lugares adquiridos {{apartados}}/{{boletosTotales}}</p>
          </div>
          <div class="patalla centrar" style="color:white">
            pantalla
          </div>
          <div class="Contasientos centrar">
        
              <div class="filas centrar"  v-for="fil in  asientosx" v-bind:key="fil">
                <p style="margin:7px;">{{fil.filaP}}</p>
                
                <div class="asientos centrar"
                  v-for="aciento in fil.sillas" :key="aciento"
                  v-bind:id="aciento.id"
                  v-bind:class="{'ocupado' : aciento.status == true}"
                  @click="getAciento(aciento)" 
                >
                  <p>{{aciento.numero}}</p>
                </div>
                
                
              </div>

              

          </div>

      </div>

               
                
                <v-btn
                v-if="apartados!=boletosTotales"
                disabled
                color="primary"
                @click="e1 = 4"
                >
                Continue
                </v-btn>

                <v-btn
                v-if="apartados==boletosTotales"
                color="primary"
                @click="e1 = 4"
                >
                Continue
                </v-btn>

                <v-btn text @click="e1 = 2">Regresar</v-btn>
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

               

                <v-btn text @click="e1 = 3">Regresar</v-btn>
            </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
        </v-container>
    

  
  <v-content>
    <router-view></router-view>
  </v-content>
   </div>
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
        idFuncion: null,
        filas:["A","B","C","D","E","F","G","H"],
        numeroDeSillaPorFila:20,
        asientosx:[],
        asientosOcupados:[],
        apartados:0,
        lugaresComprados:[],

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
      },
      crearAcientos(){
       let tem=[]
       let filasx=[]
       let op=["A1","B8","H10","E15","E14","A20","D1"]
        for (let index = 0; index < this.filas.length; index++) {
             tem=[]
            for (let i = 0; i <this.numeroDeSillaPorFila; i++) {
                let n=i+1
                let idA=""+this.filas[index]+n
                let silla=null
                if(op.includes(idA)){
                    silla={fila:this.filas[index],numero:n,status:true,id:idA}
                }else{
                    silla={fila:this.filas[index],numero:n,status:false,id:idA}
                }
                tem.push(silla)
            }
            let filla={filaP:this.filas[index],sillas:tem}
            filasx.push(filla)
        }
        this.asientosx=filasx
        
      },
      getAciento(acineto){
            let auc=[]
            let ay=null
            let pa=false
            if(acineto.status==false){
              console.log("valiodo");
              this.lugaresComprados.forEach(element => {
                    console.log("v ",element.id);
                    if(element.id==acineto.id){
                       pa=true
                    }
              });

              if(pa==true){
                    this.lugaresComprados.forEach(element => {
                      if(element.id!=acineto.id){
                        auc.push(element)
                      }
                    });
                  this.lugaresComprados=auc
                  this.apartados--
                  document.getElementById(acineto.id).className="asientos "
              }else{
                if(this.apartados<this.boletosTotales){
                    ay={id:acineto.id,asiento:acineto}
                    this.lugaresComprados.push(ay)
                    this.apartados++
                    document.getElementById(acineto.id).className="asientos apartado"
                }
              }
              


            }else{
              console.log("no valiodo");
            }
            
          console.log(" this.lugaresComprados", this.lugaresComprados);
      },
      getAcientosComprados(){
          console.log("Funcion ",this.idFuncion, "  cartelera ",this.idCartelera);
          
          axios.get('https://api-django-cinema.herokuapp.com/cartelera/asientos',{
          params:{
            idCartelera: this.idCartelera,
            idFuncion:this.idFuncion
          }}
          
          ).then(function (response){
            console.log("this responce boletos\n",response)
          }).catch(function (error) {
              console.log("error  bbbb")
          })

          
      }

},
    created(){
        this.getAcientosComprados()
        this.crearAcientos()
        this.movie = JSON.parse(localStorage.getItem('movie'))
        this.pelicula= this.movie.pelicula.nombre
        this.clasificacion= this.movie.pelicula.clasificacion
        this.fecha= "12-05-2019"
        this.funcion= this.movie.sala.sala
        this.duracion= this.movie.pelicula.duracion
        this.image = this.movie.pelicula.poster
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

.centrar{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
 
}
.contall{
    position: absolute;
    width: 100%;
    min-height: 100%;
    height: auto;
    background: black;
    color: white;
   
}
.monocromatico{
  background: white;
  color: black;
  margin: 5px;
  width: 100px;
  
}
.contimagen{
    height: auto;
    width: 500px;
    background: transparent;
    color: black;
    margin: auto;
  
}

.cuadro{
    background: #0d315c;
    width: 65%;
    margin: auto;
    overflow: hidden;
}

.barraItems{
  width: 100%;
  border-bottom: 1px solid gold;
  padding-top: 5px;
}

.item{
  margin: auto;
  font-size: 18px;
  transition: 0.5s;
   border-bottom: 4px solid transparent;
}

.actual{
  transition: 0.5s;
  border-bottom: 4px solid gold;
}

.contenidoBara{
  width: 100%;
  min-height: 400px;
  height: auto;
  position: relative;
  background: #024873;
  position: relative;
}

.barrabotones{
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 2px;
 justify-content:flex-end;
  
}
.botones{
  padding: 5px;
  font-size: 13px;
  cursor: pointer;
  outline: none;
  border: 1px solid white;
  margin: 2px;
}

.contHorarios{
  background: #0d315c;
  padding: 10px;
}
.Contasientos{
  background: grey;
  width: 98%;
  margin: auto;
  margin-bottom: 40px;
}

.filas{
  
  display: flex;
  width: 100%;
  padding: 2px;
  
}

.asientos{
  background: white;
  color: black;
  width: 28px;
  height: 28px;
  text-align: center;
  cursor: pointer;
  margin: 2px ;
  border-bottom-left-radius: 50%;
   border-bottom-right-radius: 50%;
}

.patalla{
  background: black;

  margin-bottom: 5px;
}

.ocupado{
  background: red;
}

.apartado{
  background: #32CD32;
}

.indicaciones{
  padding: 5px;
  width: 100%;
}

.datos{
  width: 60%;
  
  padding: 5px;
}
label{
  margin: 10px;
  margin-top: 50px;
  font-size: 19px;
}

.dinero{
  background: #2F4F4F;
  margin-top: 10px;
  width: 170px;
  padding: 8px;
}

.opboletos{
  background: black;
  width: 100%;
  padding: 15px;
  margin-bottom:20px;
}

.tiposDeBoleto,.precios,.cantidadDeBoletos{
  width: 30%;
  
}
.pagos{
  width: 100%;
  
  height: 80%;
  color: black
}

.conteflec{
  display: flex;
  width: 400%;
  transition: 0.5s;
 
}

@media(max-width: 990px){
.cuadro{
  width: 90%;
}

.contimagen{
    height: auto;
    width: 50%;
    
    }

.asientos{
  width: 20px;
  height: 20px;
  
  }

  .datos{
    text-align: center;
  }
}


</style>
