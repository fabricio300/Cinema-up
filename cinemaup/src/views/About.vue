<template>
  <div class="about" style="color: white;">
    <h4 v-for="use in resultado" :key="use"> {{use.id}} /{{use.nombre}} / {{use.correo}} /{{use.password}} /{{use.status}}</h4>
    <input v-model="idu" type="text" placeholder="id">
    <input v-model="nombre" type="text" placeholder="nombre">
    <input v-model="correo" type="text" placeholder="correo">
    <input v-model="password" type="text" placeholder="contraseña">
    <input v-model="status" type="text" placeholder="status"><br>
    <button @click="acuallizar(d)">put</button><br>
    <button @click="crearUsuario()">post</button><br>
 
  </div>
</template>


<script>
export default {
  data(){
    return{
      resultado:null,
      urlApi:'http://127.0.0.1:3333',
      nombre:null,
      password:null,
      correo:null,
      status:null,
      idu:null

    }
  },
  methods:{
    getusuarios(){
      axios.get(""+this.urlApi+'/api/usuarios').then(response => {
         console.log("resultado= ",response)
         this.resultado=response.data
      })
      .catch(error => {
        console.log(error)
      })
    },
    crearUsuario(){
      console.log(this.nombre,this.correo,this.password,this.status)
       axios.post(""+this.urlApi+'/api/usuarios', {
                        nombre:this.nombre,
                        password:this.password,
                        correo:this.correo,
                        status:this.status
                        
                    }).then(function (response) {
                        console.log(response);
                        
                      })
    },
    acuallizar(){
      
      console.log(this.nombre,this.correo,this.password,this.status)
       axios.put(""+this.urlApi+'/api/usuarios/'+this.idu, {
                        nombre:this.nombre,
                        password:this.password,
                        correo:this.correo,
                        status:this.status
                        
                    }).then(function (response) {
                        console.log(response);
                        
                      })
    
    }
  },
  created(){
    this.getusuarios();
  }
}
</script>
