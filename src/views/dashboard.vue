.
<template>
  <div class="dash">
    <div class="navbar">
      <ul>
        <li class="navbarnav">
          <router-link
            :to="{ path: '/'}"
            class="thing"
            replace
            >
            ←Back</router-link
          >
          <div class="rectangle">
           
          </div>
          <h5 v-if="user == null" style="color:green; text-transform: capitalize;">login/signup for free to get acess</h5>
          <h5 v-else style="color:green; text-transform: capitalize;">{{user.displayName}}'s GL terminal</h5>
          <h4 class="current">Dashboard</h4>
          <router-link
            :to="{ path: '/industry/' + ticker }"
            class="thing"
            replace
            >Industry</router-link
          >
          <h7 class="thing">News( coming soon)</h7>
          <h7 class="thing">Macroview( coming soon)</h7>

          <h1 v-if="user == null">
            <b-button @click="googlesigin" class="btn btn-success" style="color: black"
              >Login/signinup</b-button
            >
          </h1>

          <h1 v-else>
            <b-button
              @click="logout"
              class="btn btn-success"
              style="color: black"
              >logout</b-button
            >
          </h1>
        </li>
      </ul>
    </div>
    <div class="options">
      <h1 style="color:white; margin-top:4vh;">${{ ticker }}</h1>
      <div style="display: grid; margin-top:5vh" class="three">
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
        <button class="r_button" @click="kofi">Support💚</button>
        <!-- <button class="r_button" @click=all(ticker)>All</button> -->
      </div>
      <!-- <h1>{{data}}</h1> -->
    </div>

    <div class="chart">
      <div class="somt" style="background-color: #00f85f">
        <VueTradingView
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

export default {
  components: {
    VueTradingView,
  },
  props: ["ticker"],
  data() {
    return {
      user: null,
      error: null,
      awesome: "ds",
      selected: "0",
    };
  },

  methods: {
    return_id: function (id) {
      return id;
    },
    annual: function (ticker) {
      window.open(
        "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" +
          ticker +
          "&type=10-K&dateb=&owner=exclude&count=40#contentDiv"
      );
    },
    quaterly: function (ticker) {
      window.open(
        "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" +
          ticker +
          "&type=10-Q&dateb=&owner=exclude&count=40#contentDiv"
      );
    },
    ir: function (ticker) {
      window.open(
        "https://www.google.com/search?q=" + ticker + " ir" + " relations"
      );
    },
    insider: function (ticker) {
      window.open("http://openinsider.com/search?q=" + ticker + "#results");
    },
    twitter: function (ticker) {
      window.open("https://twitter.com/search?q=$" + ticker + "&f=live");
    },
    seekingalpha: function (ticker) {
      window.open("https://seekingalpha.com/symbol/" + ticker + "/analysis");
    },
    funds: function (ticker) {
      window.open("https://whalewisdom.com/stock/" + ticker + "#frm_filings");
    },
    kofi: function () {
      window.open("https://ko-fi.com/A0A47IK54");
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
