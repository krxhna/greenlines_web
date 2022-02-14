.
<template>
  <div  v-if="user == null" class="signup">
          <div class="nav12">
     
        <span style="color: rgb(255, 255, 255)">
          greenlines</span
        >

        <div class="bb">
           <a style="color:white;">Don't have an account?     </a>
           
            <button
          class="btn btn-primary"
          @click="$router.replace('signup')"
          type="submit"
          style="background-color: #14e20d; border: none; color:black;"
        >
          SIGN UP
          
        </button>
        </div>
     
    </div>

    <h3 style="color:rgb(0, 0, 0);">.</h3>
    <div class="grid">
      <div class="login-page-new__main-form">
        <div class="tit">
            <h1>Welcome back!</h1>
        </div>
        <a style="color:rgb(224, 209, 209);">.</a>
        <form>
                      <div class="mb-3">
                          
            
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
            v-model="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            
          </div>
          <div class="mb-3">
            
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
            v-model="password"
              type="password"
              class="form-control"
              
            />
          </div>
       
           <b-button @click="emailsignin" class="btn_login" style="background-color: #14e20d; border: none; color:black; padding: 10px;">
              signin</b-button
            >
          <div class="or" style="text-align: center;">
              
              or
          </div>
          

          <div class="jk">
             <b-button  class="google-btn" @click="googlesigin"  style="background-color: white; color:black; padding: 10px;">
               <span class="nsm">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
            Continue with Google</span>

</b-button>
          </div>
        </form>
      </div>
    </div>
       <div class="rect_alp"></div>
    <div class="rect_alp2"></div>
    <div class="rect_alp3"></div>
  </div>

  <div v-else>
      <div class="logun">
        Logged in

    <router-link
            :to="{ path: '/dashboard/' + ticker }"
            class="thing"
            replace
            > click me!</router-link
          >
   
      </div>
    </div>
</template>

<script>

import firebase from "firebase/compat/app";
import names from "./data.js";
import { db } from "../firebase";


export default {
   
    firestore() {
    return {
      map1: db.doc("industry/data_new").onSnapshot((doc) => {
        this.map1 = doc.data().roic;
      }),
      name: db.doc("users/bob").onSnapshot((doc) => {
        this.name = doc.data();
      }),
    };
  },
  data() {
    return {
      email: "",
      password: "",
      user: null,
      error: null,
      awesome: "ds",
      selected: "0",
      map1: [],

      items: names
      // loading: firebase.auth.currentuser
    };
  },

  methods: {
    return_items: function (sel, name) {
      console.log(sel);
      return this.items[sel][name];
    },
    return_items1: function (sel, name,map) {
      console.log(sel);
      return map[sel][name];
    },
    navigate: function() {
      this.$router.push("/signup");
    },

    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // alert("logout");
        })
        .catch((error) => {
          this.error = error;
        });
    },

    googlesigin: function () {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          // alert("signin");
          this.$router.push({
            path: "/"
          });
        })
        .catch((err) => {
          console.log(err);
        });
      // This gives you a Google Access Token. You can use it to access the Google API.
    },

    emailsignin:function(){
      //login with email and password
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          
          this.$router.push({
            path: "/" 
          });
        })
        .catch((err) => {
          alert(err);
        });
    }




  },

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    });
  },
};


</script>


<style>
@import url("../style/signup.css");

</style>
