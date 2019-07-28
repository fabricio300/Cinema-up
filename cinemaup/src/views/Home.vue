<template>
    <div>
        <v-carousel 
            height="400"
            cycle 
            hide-delimiter-background>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
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
                        <div class="display-2 ml-4">{{ item.slide }}</div>
                    </v-layout>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>

        <div class="my-2" style="display:flex; flex-wrap: wrap;" >
            <v-card
                class="mx-auto my-4"
                width="300"
                v-for="(poster,i) in posters"
                :key="i"
                style="backgroung-color:#024873"
            >
                <v-img
                    class="white--text"
                    height="350px"
                    :src="poster.src"
                >
                </v-img>

                <v-card-text class="headline">
                    {{ poster.name }}
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
                    >
                        Comprar
                    </v-btn>
                </v-card-actions>
            </v-card>    
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://www.ohasiamedia.com/wp-content/uploads/2017/10/cv-1080p-xpp-10.png',
            slide: 'El castillo vagabundo',
          },
          {
            src: 'https://i.pinimg.com/originals/99/29/a4/9929a49ce3646402743b8e599ef6679b.png',
            slide: 'La princesa Mononoke',
          },
          {
            src: 'https://images2.alphacoders.com/742/thumb-1920-742320.png',
            slide: 'Your name',
          },
          {
            src: 'http://www.hdfondos.eu/pictures/2014/0110/2/ogino-chihiro-spirited-away-images-369770.jpg',
            slide: 'El viaje de chihiro',
          },
        ],
        posters: [
            {
                src: 'https://i.pinimg.com/originals/72/7d/13/727d1353d28b6f718eec4f4d2d0ed784.jpg',
                name: 'El castillo vagabundo',
            },
            {
                src: 'https://images-na.ssl-images-amazon.com/images/I/5171TL-zJGL.jpg',
                name: 'La princesa mononoke',
            },
            {
                src: 'https://img.moviepostershop.com/your-name-movie-poster-2016-1010777234.jpg',
                name: 'Your name',
            },
            {
                src: 'http://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/70/26/56/20078341.jpg',
                name: 'El viaje de chihiro',
            }
        ]
      }
    },
  }
</script>
