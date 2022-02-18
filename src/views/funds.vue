.
<template>
  <div class="dash">
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
          <h4 class="current">industry</h4>
          <router-link :to="{ path: '/macro/' + ticker }" class="thing" replace
            >Macro view</router-link
          >
          <h6 class="thing">News( coming soon)</h6>
          <!-- <h7 class="thing">Macroview( coming soon)</h7> -->

          <h1 v-if="user == null">
            <b-button
              @click="googlesigin"
              class="btn btn-success"
              style="color: black"
              >Login/signinup</b-button
            >
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
          <div class="footernotes" style="display: flex">
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

    <div class="fundsview">
        <ul id="funds_grid">
  <li v-for="item in items1" :key="item.message" style="color:aliceblue; list-style: none;">
    
          <div class="card3" style="width: 18rem; margin:2rem; ">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <a href="#" class="btn btn-primary" style="background-color: #38ea41; color: #0f0f0f; font-weight: 600; border: none;">Go somewhere</a>
        </div>
      </div>
  </li>
</ul>



    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import names from "./data.js";
import { db } from "../firebase";

export default {
  props: ["ticker"],
  firestore() {
    return {
      ispro: db.doc("users/katkat@gmail.com").onSnapshot((doc) => {
        this.ispro = doc.data().pro;
      }),
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
        items1: [
      { message: 'Foo' },
      { message: 'Bar' },
       { message: 'Foo' },
      { message: 'Bar' },
       { message: 'Foo' },
      { message: 'Bar' }
    ],
        fundnames:['oaktree','bob','katkat'],
      ispro: [],
      user: null,
      error: null,
      awesome: "ds",
      selected: "0",
      map1: [],

      items: names,
      // loading: firebase.auth.currentuser
    };
  },

  methods: {
    openstripe: function () {
      window.open("https://greenliness.gumroad.com/l/qxwozl", "_blank");
      // window.open("https://buy.stripe.com/aEUfZkel41YJ6FW5kk");
      this.$gtag.event("clicked on pro", { method: "Google" });
    },

    return_items: function (sel, name) {
      console.log(sel);
      return this.items[sel][name];
    },
    return_items1: function (sel, name, map) {
      console.log(sel);
      return map[sel][name];
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
    the_go: function (ticker) {
      this.$router.push({
        path: "/dashboard/" + ticker,
      });
      this.$forceUpdate();
      // location.reload();
      // this.$router.go(this.$router.currentRoute);
    },

    googlesigin: function () {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          // alert("signin");
          // this.$router.push({
          //   path: "results/" + this.user.uid,
          // });
        })
        .catch((err) => {
          console.log(err);
        });
      // This gives you a Google Access Token. You can use it to access the Google API.
    },
  },

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    });
  },
};
</script>

<style>
@import url("../style/dashboard.css");
</style>
