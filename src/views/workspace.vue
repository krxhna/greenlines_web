<template>
  <div class="container mt-5">
      {{user}}
      {{name}}
    
    <div class="row">
      <div class="col form-inline">
        <b-form-input
          id="input-2"
          v-model="newTask"
          required
          placeholder="Enter Task"
          @keyup.enter="add"
        ></b-form-input>
        <b-button @click="writetodo" variant="primary" class="ml-3">Add</b-button>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-3">
        <div class="p-2 alert alert-secondary">
          <h3>Back Log</h3>
          <!-- Backlog draggable component. Pass arrBackLog to list prop -->
          <draggable
            class="list-group kanban-column"
            :list="arrBackLog"
            group="tasks"
          >
            <div
              class="list-group-item"
              v-for="element in arrBackLog"
              :key="element.name"
            >
              {{ element }}
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
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-warning">
          <h3>Testing</h3>
          <!-- Testing draggable component. Pass arrTested to list prop -->
          <draggable
            class="list-group kanban-column"
            :list="arrTested"
            group="tasks"
          >
            <div
              class="list-group-item"
              v-for="element in arrTested"
              :key="element.name"
            >
              {{ element.name }}
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
              {{ element.name }}
            </div>
          </draggable>
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
  components: {
    //import draggable as a component
    draggable
  },

  mounted(){
      console.log(this.arrBackLog);

  },

  watch:{

      arrBackLog(){
          console.log(this.arrBackLog);
      },

      arrInProgress(){
            console.log(this.arrInProgress);
        },




  },
    firestore() {
    return {

      name: db.doc("users/katkat@gmail.com").onSnapshot((doc) => {
        this.name = doc.data();
        this.arrBackLog = doc.data().tickers;
        this.email = doc.data().email;
      }),
    };
  },


created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    });
  },

  data() {
    return {
      // for new tasks
      newTask: "",
      user:"dfs",
      name:"dsf",
      email:"",
      // 4 arrays to keep track of our 4 statuses
      arrBackLog: [
        { name: "Code Sign Up Page" },
        { name: "Test Dashboard" },
        { name: "Style Registration" },
        { name: "Help with Designs" }
      ],
      arrInProgress: [],
      arrTested: [],
      arrDone: []
    };
  },
  methods: {

    
       writedata1: function(fullname){
      //write data to firebase
      db.collection("users").doc(this.user.email).set({
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
      this.writedata1("Fsdfds");
      if (this.newTask) {
        this.arrBackLog.push(this.newTask );
        this.newTask = "";
        this.writetodo();
      }
    },


    writetodo: function () {
      //write data to firebase
      db.collection("users")
        .doc(this.email)
        .update(
            {
                
                done:["FDS"]

            },
            
            
        )
        .then(function () {
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