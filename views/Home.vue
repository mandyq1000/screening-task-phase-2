<template> 
     <v-main>
       <v-container class="fill-height blue lighten-5" fluid transition="slide-x-transition" app>           
              <v-row wrap>
                <v-col cols="12" md="8" sm="12" lg="8">
                  <iframe width=100% height=100%
                  src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                  </iframe>
                </v-col>
                <v-col cols="12" sm="12" lg="4" md="4" >
                  <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7" contain></v-img><br>
                  <v-row>
                    <v-col>
                      <v-card
                      :elevation ="selected"
                       outlined>
                      <v-card-text cols="6" md="4" sm="12" lg="4">
                      Inspired by one off the all time greats, QUEEN, the Muppets present their rendition of the classic, "Bohemian Rhapsody." Originally released in 1975, this classic with a Muppets Twist is sure to keep every music lover, and Muppet fan satisfied.</v-card-text> 
                  </v-card></v-col></v-row>
                  <v-row>
                  <v-col>
                  <v-card 
                  outlined
                  :elevation ="selected"
                  >
                    <v-card-text  cols="6" md="4" sm="12" lg="4" class="fill-height blue lighten-4"><v-row><v-btn center large class="primary">Primary</v-btn></v-row><br>
                    <v-row><v-switch class="mx-2" label="Toggle Button"></v-switch></v-row>
                    <v-row>
                    <v-col cols="6" sm="12" md="4" lg="6">
                    <v-slider
                      v-model="selected"
                      min="0"
                      max="24"
                      label="slider"
                    ></v-slider>
                    </v-col>
                    </v-row>
                    </v-card-text>
                  </v-card>
                    </v-col>
                  </v-row>
                    </v-col>
                    </v-row>
                    
           
          </v-container>
     </v-main>
  
         
</template>

  <script>

    export default {
      name: 'Home',
    data: () => ({
    
    selected: 0,
    })
 
  
    }
  </script>
