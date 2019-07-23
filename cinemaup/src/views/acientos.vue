<template>
    <div class="contall centrar">
       
        <div class="contimagen">
            <p>pelicula</p>
        </div>

    <div class="cuadro">

      <div class="barraItems centrar">
          <p class="item"
              
              v-for="item in items"
              v-bind:class="{'actual' : estadoActual == item.pocision}"
          >{{item.itemx}}</p>
      </div>
 <!--------------------------------HORIOS ---------------------------------------------------->
      <div class="contenidoBara"
        v-show="estadoActual==1"
      >
          <p>Pelicula: pelicula</p>
          <p>Genero: Genero</p>
          <p>Clasificacion: A</p>
          <p>Horario:</p>

          <div class="contHorarios">
            <button 
            style="padding:15px;"
            v-for="hora in arryHorarios"
            >{{hora}}</button>
          </div>

        <div class="barrabotones">

              <button class="botones"
              @click="irasuguiente()"
              >
              Siguiente
              </button>
          </div>

      </div>

<!--------------------------------2 ---------------------------------------------------->
  
       <div class="contenidoBara"
        v-show="estadoActual==2"
      >
          <p>222222</p>


          <div class="barrabotones">
              <button class="botones"
              @click="regresar()"
              >
              Regresar
              </button>
              <button class="botones"
              @click="irasuguiente()"
              >
              Siguiente
              </button>
          </div>
      </div>

<!--------------------------------3 ---------------------------------------------------->
     <div class="contenidoBara"
        v-show="estadoActual==3"
      >
          <p>acientos</p>
          <div class="indicaciones centrar">
            <div class="asientos"></div>
            <p style="margin-right:5px;">disponible</p>
            <div class="asientos apartado"></div>
             <p style="margin-right:5px;">apartado</p>
            <div class="asientos ocupado"></div>
            <p style="margin-right:5px;">ocupado</p>
          </div>
          <div class="patalla centrar">
            pantalla
          </div>
          <div class="Contasientos centrar">
        
              <div class="filas" v-for="fil in  asientos">
                <p style="margin: 2px;">{{fil.filaP}}</p>
                
                <div class="asientos centrar"
                  v-for="aciento in fil.sillas"
                  v-bind:id="aciento.id"
                  v-bind:class="{'ocupado' : aciento.status == true}"
                  @click="getAciento(aciento.id)"
                >
                  <p>{{aciento.numero}}</p>
                </div>
                
                
              </div>

              

          </div>

          <div class="barrabotones">
              <button class="botones"
              @click="regresar()"
              >
              Regresar
              </button>
              <button class="botones"
              @click="irasuguiente()"
              >
              Siguiente
              </button>
          </div>
      </div>


    
<!--------------------------------4 ---------------------------------------------------->
     <div class="contenidoBara"
        v-show="estadoActual==4"
      >
          <p>4444</p>


          <div class="barrabotones">
              <button class="botones"
              @click="regresar()"
              >
              Regresar
              </button>
              <button class="botones"
              @click="irasuguiente()"
              >
              Siguiente
              </button>
          </div>
      </div>
      
      
    </div>

    </div>
    
    
</template>

<script>
export default {

  data(){
    return{
      items:[ {pocision:1,itemx:"Horario"},{pocision:2,itemx:"Boleto",},{pocision:3,itemx: "Aciento",},{pocision:4,itemx: "Pago",}],
      arryHorarios:["12:30pm","1:30pm","8:30pm","8:30am","12:48pm"],
      estadoActual:3,
      filas:["A","B","C","D","E","F","G","H"],
      numeroDeSillaPorFila:24,
      asientos:[]
    }
  },
  methods:{

      irasuguiente(){
        if(this.estadoActual<4){
          this.estadoActual++
        }
        
      },

      regresar(){
        if(this.estadoActual>1){
          this.estadoActual--
        }
      },
      crearAcientos(){
       let tem=[]
       let filasx=[]
        for (let index = 0; index < this.filas.length; index++) {
             tem=[]
            for (let i = 0; i <this.numeroDeSillaPorFila; i++) {
                let n=i+1
                 let silla={fila:this.filas[index],numero:n,status:false,id:""+this.filas[index]+n}

                tem.push(silla)
            }
            let filla={filaP:this.filas[index],sillas:tem}
            filasx.push(filla)
        }
        this.asientos=filasx
        console.log("tem=\n", this.asientos);
        
      },

      getAciento(idAcineto){
        console.log("Aciento= ",idAcineto);
        document.getElementById(idAcineto).className="asientos apartado"
      }
  },
  created(){
   this.crearAcientos();
  }
   
}
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

.contimagen{
    height: 200px;
    width: 30%;
    background: white;
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
  height: auto;
  padding: 10px;
  background: #0d315c;
}

.barrabotones{
  
  width: 100%;
}
.botones{
  padding: 7px;
  font-size: 13px;
  cursor: pointer;
  outline: none;
}

.contHorarios{
  background: #0d315c;
  padding: 10px;
}
.Contasientos{
  background: grey;
}

.filas{
  
  display: flex;
  width: 100%;
  padding: 4px;
  
}

.asientos{
  background: white;
  color: black;
  width: 35px;
  height: 35px;
  text-align: center;
  cursor: pointer;
  margin: 2px ;
  border-bottom-left-radius: 50%;
   border-bottom-right-radius: 50%;
}

.patalla{
  background: black;
  border: 1px solid white;
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
</style>

