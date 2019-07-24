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
            <button class="monocromatico"
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
            <p style="width: 100%; text-align: center;">De click sobre un lugar disponible para selecionar, para cambiar lugar de click sobre un lugar apartado y escoja otro</p><br>
            <div class="asientos"></div>
            <p style="margin-right:5px;">disponible</p>
            <div class="asientos apartado"></div>
             <p style="margin-right:5px;">apartado</p>
            <div class="asientos ocupado"></div>
            <p style="margin-right:5px;">ocupado</p>
            <p style="margin-left:80px;">Lugares aquiridos {{apartados}}/{{boletosCantidad}}</p>
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
                  @click="getAciento(aciento)"
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
      asientos:[],
      asientosOcupados:[],
      boletosA:1,
      boletosN:0,
      boletosM:0,
      boletosCantidad:3,
      apartados:0,
      lugaresComprados:[]
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
       let op=["A1","B8","H10","E15","E14","A24","D1"]
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
        this.asientos=filasx
        
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
                if(this.apartados<this.boletosCantidad){
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
.monocromatico{
  background: white;
  color: black;
  margin: 5px;
  width: 100px;
  
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
  width: 30px;
  height: 30px;
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

@media(max-width: 990px){
.cuadro{
  width: 90%;
}
  
}
</style>

