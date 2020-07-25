    <template>
     <v-container class="fill-height blue lighten-5 justify-center" fluid>
   <v-row align="center" justify="center">
           <v-col cols="8">
           <v-card
           color="blue lighten-5"
           class="mx-auto"
           max-width="500"
           elevation="12"
           >
            <v-toolbar
             dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            >
           <v-toolbar-title>Create new ID</v-toolbar-title>
          

           </v-toolbar>
           <v-col class="space-around">
           <v-form>
               <br>
             <v-text-field
                    label="E-mail"
                    v-model="email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="email"
                  ></v-text-field>
                  <br>
               <v-text-field
                    id="password"
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field><br><br>
                   <v-text-field
                    label="Enter a username to create a document for you :)"
                    v-model="username"
                    name="username"
                    prepend-icon="mdi-account-box"
                    type="string"
                  ></v-text-field>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                        <v-btn v-model="signUp" @click="signUp" class="my-2" outlined x-large block color="success" dark>SIGN UP</v-btn><br><br>
                        <router-link to="/users"></router-link>
                        </v-card-actions><br>
                        <p>Already have an account?</p><v-btn to="/users" class="my-2" large block color="indigo lighten-1" dark>LOG IN</v-btn><br><br>
                        <p align="center">OR</p>
                        <v-btn elevation-24 color="white" x-large block>SIGN IN with Google</v-btn><br>
                        <v-btn elevation-24 color="indigo white--text" x-large block>SIGN IN with FACEBOOK</v-btn>
           </v-form>
           </v-col>
           </v-card>
    </v-col>
   </v-row>
    </v-container>
</template>

<script>
  import firebase from 'firebase';
  import db from '@/main'

  export default {
    name: 'signUp',
    data(){
      return{
        email: '',
        password: ''
      }
    },
    methods: { 
      signUp: function(){
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(cred =>{
          //delte below  
          const uid = cred.user.uid;
          //  delete below
          return db.collection('users').doc(uid).set({
           email: this.email,
           username: this.username
         });
          }).then(() =>{
          alert("Account added successfully ^_^ - Go ahead and click on log in")
        })  
          .catch(function(error){
           var errorMessage = error.message;
              alert(errorMessage)
          }
          )            
      }
    }
  }
</script>
   