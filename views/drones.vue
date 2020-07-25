<template>


        <v-main>   
    <v-container class="fill-height blue lighten-5" fluid >
          <v-row>
          <v-col class="pr-5" align="end">
              <p>want to add a drone?</p>
            <v-btn color="purple white--text" x-large to="/users">Add a Drone to collection
            </v-btn>
          </v-col>
          </v-row>
               
         <v-expansion-panels multiple
             v-for="user in users"
             :key="user.id">
                 <v-expansion-panel
                  v-for="drone in user.drones" 
                  :key="drone.droneID"  
                >                
                <v-expansion-panel-header>DroneType:{{drone.type}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                <v-divider></v-divider>
                <div  class="d-flex justify-space-between">
                    <p>droneID:{{drone.droneID}}</p> 
                    <p>lastLocation:[{{drone.Latitude}},{{drone.Longitude}}]</p>  
                    <p>live:{{drone.live}}</p> 
                    <!-- <p>type:{{drone.type}}</p> -->
                </div>
                </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
    </v-container>
</v-main>



</template>



<script>
import db from '@/main'
import 'firebase/firestore'


export default {
     data() {
            return {
                users: [],
            }
    },
     created() {
            db.collection('users').onSnapshot(res => {
                const changes = res.docChanges();

                changes.forEach(change => {
                    if(change.type === 'added'){
                        this.users.push({
                            ...change.doc.data(),
                            id: change.doc.id

                        })
                    }
                })
            })
        },
}


</script>