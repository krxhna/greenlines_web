<template>
  <div class="flex"> 
    <div class="navbar">   
      <ul>
        <li class="navbarnav">
          <router-link :to="{ path: '/' }" class="thing" replace>
            ←Back</router-link
          >
          <div class="searchbox">
            <input
              :key="$route.fullPath"
              type="text"
              class="search-bar1"
              :placeholder="'$' + ticker"
              @keyup.enter="the_go(message.toUpperCase())"
              v-model="message"
            />
          </div>

          <div class="buttondiv">
            <div class="a" style="color: white"></div>
            <button
              :key="$route.fullPath"
              class="gobutton"
              @click="the_go(message.toUpperCase())"
            >
              GO
            </button>
          </div>
          <div class="rectangle"></div>
          <h5
            v-if="user == null"
            style="color: green; text-transform: capitalize"
          >
            login/signup for free to get acess
          </h5>
          <h5 v-else style="color: green; text-transform: capitalize"></h5>

          <router-link
            :to="{ path: '/dashboard/' + ticker }"
            class="thing"
            replace
            >Dashboard</router-link
          >
          <router-link
            :to="{ path: '/industry/' + ticker }"
            class="thing"
            replace
            >Industry</router-link
          >
                    <router-link
            :to="{ path: '/macro/' + ticker }"
            class="thing"
            replace
            >macro</router-link
          >
          <div class="current">workspace</div>
          <router-link
            :to="{ path: '/funds/' + ticker }"
            class="thing"
            replace
            >Funds</router-link
          >
          <h6 class="thing">News( coming soon)</h6>
          <!-- <h6 class="thing">Macroview( coming soon)</h6> -->

          <h1 v-if="user == null">
            
          </h1>

          <h1>
            <a style="color: #0f0f0f">,</a>
            <div class="fg" style="display: flex; flex-direction: column">
              <b-button
                @click="openstripe()"
                class="btn btn-success"
                style="color: black; background-color: #38ea41"
                >GO pro <i class="fas fa-crown"></i
              ></b-button>
              <b-button
                @click="logout"
                class="btn btn-success"
                style="color: gray; background-color: #0f0f0f; border: none"
                >logout</b-button
              >
            </div>
          </h1>
          <div class="footernotes" style="display:flex; ">
            <a
              style="color: white"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=krish@greenlines.club"
              target="_blank"
              >📧contact</a
            >
            <a
              style="color: white"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=krish@greenlines.club"
              target="_blank"
              >🐞Report a bug</a
            >
          </div>
        </li>
      </ul>
    </div>

    <div class="container pt-5 text-danger" style="background-color: #212121;">
      <!-- {{user.email}} -->
      
    {{test}}
    doing
    {{arrInProgress}}
    <div class="row">
      <div class="col form-inline">
        <b-form-input
        
          id="input-2 rounded shadow-sm"
          v-model="newTask"
          required
          placeholder="Enter Ticker"
          @keyup.enter="add"
        ></b-form-input>
        <b-button @click="add" variant="dark rounded" class="ml-3 bg-dark">Add </b-button>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-3 h-100">
        <div class="p-2 rounded shadow-lg" style="background-color: #383838;">
          <h3 class="text-light text-sm m-2">To do</h3>
          <!-- Backlog draggable component. Pass arrBackLog to list prop -->
          <draggable
            class="list-group kanban-column"
            :list="arrBackLog"
            group="tasks"
          >
            <div
              class="list-group-item m-1 rounded shadow-sm" style="background-color: #212121"
              v-for="element in arrBackLog"
              :key="element"
            >
              <div class="text-3xl text-light">{{ element.toUpperCase() }}</div>
              <button class=" text-sm p-1 rounded" style="color:gray" >dashboard <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
</svg></button>
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-primary">
          <h3>In Progress</h3>
          <!-- In Progress draggable component. Pass arrInProgress to list prop -->
          <draggable
            class="list-group kanban-column"
            :list="arrInProgress"
            group="tasks"
          >
            <div
              class="list-group-item"
              v-for="element in arrInProgress"
              :key="element"
            >
              {{ element}}
            </div>
          </draggable>
        </div>
      </div>



      <div class="col-3">
        <div class="p-2 alert alert-success">
          <h3>Done</h3>
          <!-- Done draggable component. Pass arrDone to list prop -->
          <draggable
            class="list-group kanban-column"
            :list="arrDone"
            group="tasks"
          >
            <div
              class="list-group-item"
              v-for="element in arrDone"
              :key="element.name"
            >
              {{ element }}
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
//import draggable
import firebase from "firebase/compat";
import { db } from "../firebase";


import draggable from "vuedraggable";

export default {
  name: "kanban-board",
  props: ["ticker"],
  components: {
    //import draggable as a component
    draggable
  },

  mounted(){
      console.log(this.arrBackLog);
      this.user = firebase.auth().currentUser;
this.email = this.user.email;





  },

  updated:async  function(){
    console.log("updates");

    
    // let test = await db.collection("users").doc(firebase.auth().currentUser.email).get();

    // if(!test){
    //   test = [];
    // } else{
    //   this.arrBackLog = test.data().todo;
    // }

  },


  created: async function(){
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;

    });

    

    let test = await db.collection("users").doc(firebase.auth().currentUser.email).get();

    if(!test){
      test = [];
    } else{
      this.arrBackLog = test.data().todo;
    }




  },

  watch:{

      arrBackLog(){
        this.writetodo();
          console.log(this.arrBackLog);
      },

      arrInProgress(){
        this.writetodo();
            console.log(this.arrInProgress);
        },

        arrDone(){
          this.writetodo();
              console.log(this.arrDone);
          },




  },
    firestore() {
    return {
      
      // collectiondata: db.doc("users/"+this.email).onSnapshot((doc) => {
      //   this.collectiondata = doc.data();
      // }),

      // arrBackLog: db.collection("users/"+this.email+"/todo").onSnapshot((snapshot) => {
      // arrBackLog: db.collection("users/"+this.email+"/todo").onSnapshot((snapshot) => {
      //   this.arrBackLog = snapshot.docs.map(doc => doc.data().name);
      // }),

    //  arrBackLog: db.doc("users/"+firebase.auth().currentUser.email).onSnapshot((doc) => {
    //     this.arrBackLog = doc.data().todo;
    //   }),

    //  arrInProgress: db.doc("users/"+firebase.auth().currentUser.email).onSnapshot((doc) => {
    //     this.arrInProgress = doc.data().inprogress;
    //   }),

    //   arrDone: db.doc("users/"+firebase.auth().currentUser.email).onSnapshot((doc) => {
    //     this.arrDone = doc.data().done;
    //   }),

      
    };
  },




  data() {
    return {
      // for new tasks
      allusers: [],
      test:["Dfas"],
      newTask: "",
      user:"dfs",
      name:"dsf",
      email:"",
      message:"",
      collectiondata:"",
      // 4 arrays to keep track of our 4 statuses
      arrBackLog: [

      ],
      arrInProgress: [],

      arrDone: []
    };
  },
  methods: {
        logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/signin");
          // alert ("logout");
        })
        .catch((error) => {
          this.error = error;
        });
    },
    the_go: function (ticker) {
      this.$router.push({
        path: "/dashboard/" + ticker,
      });
      this.$forceUpdate();
      // location.reload();
      // this.$router.go(this.$router.currentRoute);
    },

    
       writedata1: function(fullname){
      //write data to firebase
      db.collection("users").doc(this.email).set({
        displayName: fullname,
        uid: String(this.user.uid),
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        
        
        email:String(this.user.email) }).then(function() {
          console.log("Document successfully written!");
        }
        
        
        )

    },

    //add new tasks method
    add: function() {
      if (this.newTask) {
        this.arrBackLog.push(this.newTask );
        this.newTask = "";
        this.writetodo();
      }
    },


    writetodo: function () {
      //write data to firebase
      db.collection("users")
        .doc(this.user.email)
        .update(
            {
                
                todo:this.arrBackLog,
                inprogress:this.arrInProgress,
                done:this.arrDone

            },
            
            
        )
        .then(function () {
          this.test = 1;
          console.log("Document successfully written!");
        });
    },



    
  }
};
</script>

<style>
/* light stylings for the kanban columns */
.kanban-column {
  min-height: 300px;
}
</style>