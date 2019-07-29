<template>

    <div>
        <v-carousel 
            height="400"
            cycle 
            hide-delimiter-background>
            <v-carousel-item
            v-for="(movie,i) in movies"
            :key="i"
            :src="movie.pelicula.poster"
            >
                <v-sheet
                    style="background-color: rgba(0, 0, 0, 0.3);"
                    height="20%"
                >
                    <v-layout
                        align-center
                        fill-height
                        justify-start
                    >
                        <div class="display-2 ml-4">{{ movie.pelicula.nombre }}</div>
                    </v-layout>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>

        <div class="my-2" style="display:flex; flex-wrap: wrap;" >
            <v-card
                class="mx-auto my-4"
                width="300"
                v-for="(movie,i) in movies"
                :key="i"
            >
                <v-img
                    class="white--text"
                    height="350px"
                    :src="movie.pelicula.imagen"
                >
                </v-img>

                <v-card-text class="headline">
                    {{ movie.pelicula.nombre }}
                </v-card-text>

                <v-card-actions>
                    <v-btn
                        text
                        color="orange"
                    >
                        Descripción
                    </v-btn>
                    <v-btn
                        text
                        color="orange"
                        v-on:click="GoAsientos(movie)"
                    >
                        Comprar
                    </v-btn>
                </v-card-actions>
            </v-card>    
        </div>

    </div>

</template>

<script lang="js">
  const URL = 'http://192.168.13.121:8000/home/cartelera'
  import axios from 'axios';
  export default {
    data () {
      return {
          movies: []
      }
    },
    created(){
        this.GetData()
    },
    methods:{
        async GetData(){
            try{
                const data = (await axios.post(URL)).data
                this.movies = data
                console.log(this.movies)
            }catch(ex){
                console.log('error')
            }

        },
        async GoAsientos(movie){
            const movie_json = JSON.stringify(movie)
            localStorage.setItem('movie', movie_json )
            this.$router.push('/Asientos')
        }
    }
  }
</script>
