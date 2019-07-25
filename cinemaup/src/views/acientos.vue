<template>
    <div class="contall centrar">
    


        <div class="contimagen">
            <img style="width:100%; border:2px solid #2F4F4F" 
            
            src="https://www.elmulticine.com/imagenes/noticias/17/skull-island-cartel-simio-2.jpg" >
        </div>

    <div class="cuadro">

      <div class="barraItems centrar">
          <p class="item"
              
              v-for="item in items"
              v-bind:class="{'actual' : estadoActual == item.pocision}"
          >{{item.itemx}}</p>
      </div>

      <div class="conteflec" id="flexcont"> 
 <!--------------------------------HORIOS ---------------------------------------------------->
      <div class="contenidoBara"
        
      >
          <p  style="margin:15px;">Pelicula: pelicula</p>
          <p style="margin:15px;">Genero: Genero</p>
          <p style="margin:15px;">Clasificacion: A</p>
          <p style="margin:15px;">Horarios:</p>

          <div class="contHorarios">
            <button class="monocromatico"
            style="padding:15px;"
            v-for="hora in arryHorarios"
            @click="irasuguiente( 1, hora)"
            >{{hora}}</button>
          </div>


      </div>

<!--------------------------------2 ---------------------------------------------------->
  
       <div class="contenidoBara centrar"
       
      >
          
          <div class="centrar " style="width:100%">
              <div class="datos" style="margin:10px;">
                <label >Pelicula: pelicula</label> <br>
                <label >Fecha: 04/07/2019</label><br>
                <label >Funcion: {{horaFuncion}}</label><br>
              </div>
              <div class="dinero centrar">
                <p style="width:100%;text-align: center; font-size:23px;">SUBTOTAL</p>
                <p style="width:100%;text-align: center;font-size:20px; color:gold;">${{monstoTotal}}</p>
                <p style="width:100%;text-align: center;">iva incluido</p>
              </div>
          </div>

          <div class="opboletos centrar">
            <div class="tiposDeBoleto centrar">
              <p style="width:100%;text-align: center;font-size:20px;">TIPO</p>
              <p style="width:100%;text-align:center; margin:11px;">Adulto</p>
              <p style="width:100%;text-align:center; margin:11px;">Niño</p>
              <p style="width:100%;text-align:center; margin:11px;">De la 3 edad</p>
            </div>
            <div class="cantidadDeBoletos centrar">
                <p style="width:100%;text-align: center;font-size:20px;">CANTIDAD</p>
                <div class="centrar" style="width:100%;">
                  <button class="botones monocromatico centrar" style="width:20px;" @click="menosBoletos('A')">-</button> 
                  <p class="monocromatico centrar" style="width:auto;background:transparent; color:white">{{boletosA}}</p> 
                  <button class="botones monocromatico centrar" style="width:20px;" @click="masBoletos('A')">+</button>
                </div>
                <div class="centrar" style="width:100%;">
                  <button class="botones monocromatico centrar" style="width:20px;"  @click="menosBoletos('N')">-</button>
                   <p class="monocromatico centrar" style="width:auto;background:transparent; color:white">{{boletosN}}</p>
                    <button class="botones monocromatico centrar" style="width:20px;" @click="masBoletos('N')">+</button>
                </div>
                <div class="centrar" style="width:100%;">
                  <button class="botones monocromatico centrar" style="width:20px;"  @click="menosBoletos('M')">-</button>
                   <p class="monocromatico centrar" style="width:auto;background:transparent; color:white">{{boletosM}}</p> 
                   <button class="botones monocromatico centrar" style="width:20px;" @click="masBoletos('M')">+</button>
                </div>
            </div>
            <div class="precios centrar">
                <p style="width:100%;text-align: center;font-size:20px;">COSTO</p>
                <p style="width:100%;text-align:center;margin:11px;">${{constoA}}</p>
                <p style="width:100%;text-align:center;margin:11px;">${{constoN}}</p>
                <p style="width:100%;text-align:center;margin:11px;">${{constoM}}</p>
            </div>
          </div>


          <div class="barrabotones">
              <button class="botones"
              @click="regresar()"
              >
              Regresar
              </button>
              <button class="botones"
              @click="irasuguiente(2,boletosCantidad)"
              >
              Siguiente
              </button>
          </div>
      </div>

<!--------------------------------3 ---------------------------------------------------->
     <div class="contenidoBara"
       
      >
         
          <div class="indicaciones centrar">
             <p style="width: 100%; text-align: center; color: gold;">Eliga sus asientos</p>
            <p style="width: 100%; text-align: center;">De click sobre un lugar disponible para selecionar, para cambiar lugar de click sobre un lugar apartado y escoja otro</p><br>
            <div class="asientos"></div>
            <p style="margin-right:5px;">disponible</p>
            <div class="asientos apartado"></div>
             <p style="margin-right:5px;">apartado</p>
            <div class="asientos ocupado"></div>
            <p style="margin-right:5px;">ocupado</p>
            <p style="margin-left:80px;  border-bottom:2px solid gold;">Lugares adquiridos {{apartados}}/{{boletosCantidad}}</p>
          </div>
          <div class="patalla centrar">
            pantalla
          </div>
          <div class="Contasientos centrar">
        
              <div class="filas centrar"  v-for="fil in  asientos">
                <p style="margin:7px;">{{fil.filaP}}</p>
                
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
              @click="irasuguiente(3,apartados)"
              >
              Siguiente
              </button>
          </div>
      </div>


    
<!--------------------------------4 ---------------------------------------------------->
     <div class="contenidoBara"
        
      >
          <div class="pagos">
            <p>dddddddddddddddd</p>
          </div>


          <div class="barrabotones">
              <button class="botones"
              @click="regresar()"
              >
              Regresar
              </button>
          
          </div>
      </div>
      </div>
      
    </div>

    </div>
    
    
</template>

<script>
export default {

  data(){
    return{
      items:[ {pocision:1,itemx:"Horario"},{pocision:2,itemx:"Boleto",},{pocision:3,itemx: "Asientos",},{pocision:4,itemx: "Pago",}],
      arryHorarios:["12:30pm","1:30pm","8:30pm","8:30am","12:48pm"],
      estadoActual:1,
      filas:["A","B","C","D","E","F","G","H"],
      numeroDeSillaPorFila:24,
      asientos:[],
      asientosOcupados:[],
      boletosA:0,constoA:50,
      boletosN:0,constoN:25,
      boletosM:0,constoM:35,
      boletosCantidad:0,
      apartados:0,
      horaFuncion:0,
      lugaresComprados:[],
      monstoTotal:0,
      margen:0
    }
  },
  methods:{
      resetear(){
          this.lugaresComprados.forEach(element => {
              
             document.getElementById(element.id).className="asientos "
          });
          this.asientos=[]
          this.asientosOcupados=[]
          this.boletosA=0
          this.boletosN=0
          this.boletosM=0
          this.boletosCantidad=0
          this.apartados=0
          this.horaFuncion=0
          this.lugaresComprados=[]
          this.monstoTotal=0
          this.masBoletos('A')
          this.crearAcientos()
      },
      irasuguiente(origen, info){
        let paso=false
        if(origen==1){
          if(this.horaFuncion!=info){
              this.resetear()
          }
          this.horaFuncion=info
          paso=true
        }

        if(origen==2){
          if(info>0){
            paso=true
          }
        }

        if(origen==3){
          if(info==this.boletosCantidad){
             paso=true
          }
        }

        if(this.estadoActual<4 && paso==true){
          this.estadoActual++
          this.margen=(this.estadoActual-1)*100
          document.getElementById('flexcont').setAttribute("style",'margin-left:-'+this.margen+'%;')
        }
        
      },

      regresar(){
        if(this.estadoActual>1){
          this.estadoActual--
          this.margen=this.margen-100
          document.getElementById('flexcont').setAttribute("style",'margin-left:-'+this.margen+'%;')
        
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
      masBoletos(tipo){
        if(tipo=="A"){
          this.boletosA++;
        }
        if(tipo=="N"){
          this.boletosN++;
        }
        if(tipo=="M"){
          this.boletosM++;
        }

        this.monstoTotal=(this.boletosM*this.constoM)+(this.boletosA*this.constoA)+(this.boletosN*this.constoN)
        this.boletosCantidad=this.boletosM+this.boletosA+this.boletosN
      },

      menosBoletos(tipo){

        if(tipo=="A" && this.boletosA>0){
          this.boletosA--;
        }
        if(tipo=="N" && this.boletosN>0){
          this.boletosN--;
        }
        if(tipo=="M" && this.boletosM>0){
          this.boletosM--;
        }

        this.monstoTotal=(this.boletosM*this.constoM)+(this.boletosA*this.constoA)+(this.boletosN*this.constoN)
        this.boletosCantidad=this.boletosM+this.boletosA+this.boletosN
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
.monocromatico{
  background: white;
  color: black;
  margin: 5px;
  width: 100px;
  
}
.contimagen{
    height: auto;
    width: 25%;
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
  width: 25%;
  min-height: 400px;
  height: auto;
  position: relative;
  background: #0d315c;
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
  background: black;
  height: 80%;
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

