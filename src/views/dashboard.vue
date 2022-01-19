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
            <input :key="$route.fullPath" type="text" class="search-bar1" :placeholder="'$'+ticker" style="text-transform:uppercase" @keyup.enter="the_go(message.toUpperCase())" v-model="message" >
          </div>
          
          <div class="buttondiv">
            <button :key="$route.fullPath" class="gobutton" @click="the_go(message.toUpperCase())">
            GO</button>
          </div>
          
          <div class="rectangle"></div>
          
          <h5
            v-if="user.name == null"
            style="color: green; text-transform: capitalize"
          >
            {{ username }}
          </h5>
          <h5 v-else style="color: green; text-transform: capitalize">
            {{ user.email }}'s GL terminal
          </h5>
          
          <h4 class="current">Dashboard</h4>
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
            >Macro view</router-link
          >
          <h7 class="thing">News( coming soon)</h7>
          
          
          <!-- 
          <h1 v-if="user == null">
            <b-button  class="btn btn-success" style="color: black"
              >Login/signinup</b-button
            >
          </h1> -->

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
          <div class="footernotes">
            <a
              style="color: white"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=krishhkrishhk@gmail.com"
              target="_blank"
              >📧Contact</a
            >
            <a
              style="color: white"
              href="https://forms.clickup.com/f/13jcut-124/CWBEI7U7144EZ8WNHP"
              target="_blank"
              >🐞Report a bug</a
            >
          </div>
        </li>
      </ul>
    </div>
    <div class="options">
      
      <h1 style="color: white; margin-top: 4vh">${{ ticker }}</h1>
      <div style="display: grid; margin-top: 5vh" class="three">
        <button class="r_button" @click="annual(ticker)">
          Annual Statement
        </button>
        <button class="r_button" @click="quaterly(ticker)">
          Quarterly Statement
        </button>
        <button class="r_button" @click="ir(ticker)">Investor Relations</button>
        <button class="r_button" @click="funds(ticker)">Share holders</button>

        <button class="r_button" @click="insider(ticker)">
          Insider Buying
        </button>
        <button class="r_button" @click="twitter(ticker)">Twitter</button>
        <button class="r_button" @click="seekingalpha(ticker)">
          Seeking Alpha Analysis
        </button>
        
        <!-- <button class="r_button" @click="kofi">Support💚</button> -->
        <!-- <button class="r_button" @click=all(ticker)>All</button> -->
      </div>
      <!-- <h1>{{data}}</h1> -->
    </div>

    <div class="chart">
      <div class="somt" style="background-color: #00f85f">
        <VueTradingView
        :key="$route.fullPath"
          style="grid-area: middle"
          class="view1"
          :options="{
            backgroundColor: 'black',
            theme: 'Dark',
            symbol: ticker,
            interval: 'D',
            showdetails: true,
            range: '60M',
            width: '100%',
            height: '100%',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import VueTradingView from "vue-trading-view/src/vue-trading-view";
// import { db } from "../firebase";

export default {
  components: {
    VueTradingView,
  },
  props: ["ticker"],
  data() {
    return {
      username: "",
      user: null,
      error: null,
      awesome: "ds",
      selected: "0",
    };
  },

  methods: {

    openstripe: function(){
     window.open("https://buy.stripe.com/aEUfZkel41YJ6FW5kk");
     this.$gtag.event("clicked on pro", { method: "Google" });
    },



    return_id: function (id) {
      return id;
    },
    annual: function (ticker) {
      window.open(
        "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" +
          ticker +
          "&type=10-K&dateb=&owner=exclude&count=40#contentDiv"
      );
      this.$gtag.event("clicked annaul desktop", { method: "Google" });
    },
    quaterly: function (ticker) {
      window.open(
        "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" +
          ticker +
          "&type=10-Q&dateb=&owner=exclude&count=40#contentDiv"
      );
      this.$gtag.event("clicked quaterly desktop", { method: "Google" });
    },
    ir: function (ticker) {
      window.open(
        "https://www.google.com/search?q=" + ticker + " ir" + " relations"
      );
      this.$gtag.event("clicked ir desktop", { method: "Google" });
    },
    insider: function (ticker) {
      window.open("http://openinsider.com/search?q=" + ticker + "#results");
      this.$gtag.event("clicked insider desktop", { method: "Google" });
    },
    twitter: function (ticker) {
      window.open("https://twitter.com/search?q=$" + ticker + "&f=live");
      this.$gtag.event("clicked twitter desktop", { method: "Google" });
    },
    seekingalpha: function (ticker) {
      window.open("https://seekingalpha.com/symbol/" + ticker + "/analysis");
      this.$gtag.event("clicked seekingalpha desktop", { method: "Google" });
    },
    funds: function (ticker) {
      window.open("https://whalewisdom.com/stock/" + ticker + "#frm_filings");
      this.$gtag.event("clicked funds desktop", { method: "Google" });
    },
    kofi: function () {
      window.open("https://ko-fi.com/A0A47IK54");
      this.$gtag.event("clicked kofi desktop", { method: "Google" });
    },

    all: function (ticker) {
      window.open(
        "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" +
          ticker +
          "&type=10-K&dateb=&owner=exclude&count=40"
      ),
        window.open(
          "https://www.google.com/search?q=" + ticker + " ir" + " relations"
        );
    },
    return_items: function (sel, name) {
      console.log(sel);
      return this.items[sel][name];
    },

    the_go:function(ticker){
      this.$router.push({
        path: '/dashboard/'+ ticker,
      });
      this.$forceUpdate();
      // location.reload();
      // this.$router.go(this.$router.currentRoute);
    },

    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/signin");
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

  firestore: {
    username: "fda",
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
