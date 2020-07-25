<template>
<v-main>   
    <v-container class="fill-height blue lighten-5" fluid >
    <v-row>
    <v-col class="pr-5" align="end">
        <Popup />&nbsp;&nbsp;&nbsp;
    <v-btn class = "ml-5" color="purple" @click = "logout" outlined x-large ref="back"><v-icon>mdi-export</v-icon>LOGOUT</v-btn></v-col>
    </v-row>
         <h1 class ="header">Your Drones: </h1>
         <v-expansion-panels multiple>
                 <v-expansion-panel
                 v-for="user in users"
                 :key="user.id"
                >                
                <v-expansion-panel-header>DocumentID:{{user.id}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                <div class="d-flex justify-space-between"><p>username:{{user.username}}</p><p>email:{{user.email}}</p></div>
                <v-divider></v-divider>
                <div v-for="drone in user.drones" :key="drone.droneID" class="d-flex justify-space-between">
                    <p>droneID:{{drone.droneID}}</p> 
                    <p>lastLocation:[{{drone.Latitude}},{{drone.Longitude}}]</p>  
                    <p>live:{{drone.live}}</p> 
                    <p>type:{{drone.type}}</p>
                </div>
                </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>

    </v-container>
</v-main>

</template>

<script>
import Popup from '@/components/Popup'
import db from '@/main'
import firebase from 'firebase'
    

export default {
    components: { Popup },
    name: 'Home',
    methods: { 
        logout: function() {
            firebase.auth().signOut().then(() => {
            this.$router.replace('/')
            // this.$refs.back.logout();
            })
        }, 
    },
    data() {
            return {
                users: [],
            }
    },
    
        
    //  REAL-TIME DATABASE  ================================ old data
    //    created() {
    //         db.collection('users').onSnapshot(res => {
    //             const changes = res.docChanges();

    //             changes.forEach(change => {
    //                 if(change.type === 'added'){
    //                     this.users.push({
    //                         ...change.doc.data(),
    //                         id: change.doc.id

    //                     })
    //                 }
    //             })
    //         })
    //     }
        // =================================================================old data
    created(){
        db.collection('users')
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then(snapshot => {
        const document = snapshot.data()
        this.users.push(document)
        console.log(document)
    // do something with document
  })
    }
    
    



    }
 
  </script>

  <style scoped>
    .header{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: bolder;
        color-interpolation-filters: linearRGB;
    }

  </style>