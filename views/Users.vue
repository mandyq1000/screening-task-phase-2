<template>
    <v-container class="fill-height blue lighten-5 justify-center" fluid>
   <v-row align="center" justify="center">
           <v-col cols="8">
           <v-card
           
           class="mx-auto"
           max-width="500"
           elevation="12"
           >
            <v-toolbar
             dark
             flat
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            >
           <v-toolbar-title>User Log In</v-toolbar-title>
           
           <v-spacer></v-spacer>
           
           <v-btn to="/Newuser" class="my-2" color="purple lighten-2" large >SIGN UP?</v-btn>

           </v-toolbar>
           <v-col class="space-around">
           <v-form>
               <br>
             <v-text-field
                    v-model="email"
                    label="E-mail"
                    name="email"
                    prepend-icon="mdi-account"
                    type="email"
                    outlined
                  ></v-text-field>
               <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    outlined
                  ></v-text-field>
                  <!-- <v-card-actions> -->
                        <v-btn class="mb-10 ml-10" x-large color="success" v-model="login" @click="login">LOG IN</v-btn><br>
                        <v-divider></v-divider>
                        <v-btn class="mb-3" color="red" outlined block x-large @click="socialLogin">Sign In using Google</v-btn>
                         <v-btn color="indigo" outlined block x-large @click="fblogin">Continue with facebook</v-btn>
                          
                        
                        <!-- </v-card-actions> -->
                        
                        
           </v-form>
           </v-col>
           </v-card>
    </v-col>
   </v-row>
    </v-container>
</template>

<script>
/*global FB*/

   window.fbAsyncInit = function() {
      FB.init ({
         appId      : '951790555244430',
         xfbml      : true,
         version    : 'v2.6'
      });
   };

   (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
   } (document, 'script', 'facebook-jssdk'));

    
  import firebase from 'firebase'
  // import db from '@/main'




  export default {
    name: 'login',
    data(){
      return{
        email: '',
        password: '',
      }
    },
    methods: { 
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
          (user) => {
            console.log(user);
            this.$router.replace('dronecollection');
          },
          (error) =>{
            alert('What went wrong...:'+error.message)
          }
        );
      },
      socialLogin: function() {
        // const provider = new firebase.auth.GoogleAuthProvider();
      
        // firebase.auth().sigInWithPopup(provider).then(() => {
        //   this.$router.replace('/dronecollection');
        // }).catch((error) => {
        //   alert('Oops,  ' +error.message)
        // });
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result)=>{
          
          var token = result.credential.accessToken;
           console.log(token)          
           var user = result.user;
           console.log(user)
           this.$router.replace('/dronecollection')
        }).catch((error) => { 
          alert('oops  ' +error.message)
        });
      },
      fblogin: function(){
      var fprovider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(fprovider).then((result)=> {
        var token = result.credential.accessToken;
        console.log(token)
        var user = result.user;
        console.log(user)
        this.$router.replace('/dronecollection')
      }).catch((error) => {
        alert('oops something went wrong   ' +error.message )
      });
      },
    },
    logout: function(){
      // firebase.auth().signOut().then(() => {
        firebase.Auth().getInstance().signOut().then(() => {
        this.$router.replace('/users')
      }).catch(() => {});
    },
    
  }
</script>

