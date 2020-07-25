<template>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="purple white--text"
          v-bind="attrs"
          v-on="on"
          x-large
        >
          ADD NEW DRONE
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" >
          ADD NEW DRONE
        </v-card-title><br><br>

        <v-card-text>
          <v-form class="px-3" ref="form">
              <v-text-field outlined clearable label="droneID" v-model="droneID" :rules="inputRules"></v-text-field>
              <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>Last Location</v-expansion-panel-header>
                <v-expansion-panel-content> 
                    <v-text-field outlined clearable label="Latitude" v-model="Latitude" :rules="inputRules"></v-text-field>
                    <v-text-field outlined clearable label="Longitude" v-model="Longitude" :rules="inputRules"></v-text-field>
                </v-expansion-panel-content>
              </v-expansion-panel>
              </v-expansion-panels>
              <v-switch v-model="live" :label="`Is it live?:  ${live.toString()}`"></v-switch>
              <v-text-field outlined clearable label="type" v-model="type"></v-text-field>
              <v-btn color="success mt-3 mr-5" ref="form" @click="submit">ADD DRONE</v-btn>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

      </v-card>
    </v-dialog>
</template>

<script>
import db from '@/main';
 import firebase from 'firebase'

export default{
    data() {
        return {
            dialog: false,
        // DATA----------------------------- 
            droneID: '',
            Latitude: '',
            Longitude: '',
            live: true,
             type: '',
           inputRules: [
        value => !!value || 'Required',
                ],
        }
        

    },
    methods: { 
        submit() {
            if(this.$refs.form.validate()){
            const user = {
                // NEW DATA--------------------------------------
                  drones: [
                    {droneID: this.droneID, Latitude: this.Latitude, Longitude: this.Longitude, live: this.live, type: this.type}
                  ],
             }
            //================================================================ 
              firebase.auth().onAuthStateChanged( cred => {
                // console.log(user)
                const uid = cred.uid;
                console.log(uid)
              
              // ================================
              var userRef = db.collection('users').doc(uid)
              var setWithMerge = userRef.update({
                drones : firebase.firestore.FieldValue.arrayUnion({droneID: this.droneID, Latitude: this.Latitude, Longitude: this.Longitude, live: this.live, type: this.type}
                )
              });
              //================================
              console.log(setWithMerge)
              console.log(user)
              // =================================================================
              })            
        }       
       }
    }

}
</script>