
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
              style="text-transform: uppercase"
              @keyup.enter="the_go(search.toUpperCase())"
              v-model="search"
            />
          </div>

          <div class="buttondiv">
            <div class="a" style="color: white"></div>
            <button
              :key="$route.fullPath"
              class="gobutton"
              @click="the_go(search.toUpperCase())"
            >
              GO
            </button>
            <!-- <button
              :key="$route.fullPath"
              class="gobutton"
              @click="setpopup"
            >
              test
            </button> -->
          </div>

          <div class="rectangle"></div>

          <h5
            v-if="user.name == null"
            style="color: green; text-transform: capitalize"
          >
            {{ username }}
          </h5>
          <h5 v-else style="color: green; text-transform: capitalize">
            <!-- {{ user.email }}'s GL terminal -->
          </h5>

          <h4 class="current">Dashboard</h4>
          <router-link
            :to="{ path: '/industry/' + ticker }"
            class="thing"
            replace
            >Industry</router-link
          >
          <router-link :to="{ path: '/macro/' + ticker }" class="thing" replace
            >Macro view</router-link
          >
          <!-- <router-link :to="{ path: '/workspace/' + ticker }" class="thing" replace
            >Workspace</router-link
          > -->
          <router-link :to="{ path: '/funds/' + ticker }" class="thing" replace
            >Funds</router-link
          >
          <h6 class="thing">News( coming soon)</h6>
          <a class="thing" @click="openstripe()">Pro  <i  style="padding: 0.3rem;" class="fas fa-crown"></i
              ></a>
          <a class="thing"  @click="logout">Logout</a>

          <!-- 
          <h1 v-if="user == null">
            <b-button  class="btn btn-success" style="color: black"
              >Login/signinup</b-button
            >
          </h1> -->

          <!-- <h1>
            <a style="color: #0f0f0f">,</a>
            <div class="fg" style="display: flex; flex-direction: column">
              <b-button
                @click="openstripe()"
                class="btn btn-success"
                style="color: black; background-color: #38ea41"
                >Start Your Free Trail </b-button>
              <b-button
                @click="logout"
                class="btn btn-success"
                style="color: gray; background-color: #0f0f0f; border: none"
                >logout</b-button
              >
            </div>
          </h1> -->
          <div class="dwe" style="color:black">.</div>
          <a style="color: rgba(245, 245, 220, 0.466); text-align: start; padding: 0.4rem; ">History 
            <i class="fas fa-history" style="padding: 0.4rem;"></i>

          </a>
          
        <!-- <h5>{{ticker_list.slice(-3)}}</h5> -->
        <!-- <ul style="list-style-type: none; text-align: start; background-color: red;  padding: 0.3rem; cursor: pointer;">
       <li v-for="n in ticker_list.slice(-4).reverse()" :key="n.id" > 
           <h5 style="color: #08f06198; padding: 0.1rem;" @click="the_go(n)" :to="{ path: `/dashboard/${n}` }"  replace
            >${{n}} > </h5>
       </li>
    </ul> -->

          
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
    <div class="options">
      <!-- {{user}} -->
      <h1 style="color: white; margin-top: 4vh">${{ ticker }}</h1>
      <!-- <h1 style="color: white; margin-top: 4vh">${{ ticker_list }}</h1>
      <h1 style="color: white; margin-top: 4vh">${{ dummy_list }}</h1> -->
      <div class="custom-control custom-switch" style="color: gray">
        <input
          @change="onChangeEventHandler"
          :key="$route.fullPath"
          type="checkbox"
          class="custom-control-input"
          id="customSwitches"
        />
        <label
          style="color: rgb(24, 209, 24); font-weight: 500"
          v-if="international"
          class="custom-control-label"
          for="customSwitches"
          >International Company<i class="fas fa-globe-asia"></i
        ></label>
        <label v-else class="custom-control-label" for="customSwitches"
          >International Company<i class="fas fa-globe-asia"></i
        ></label>
      </div>

      <div style="display: grid; margin-top: 5vh" class="three">
        <button
          v-if="international"
          class="r_button"
          @click="annual_int(ticker)"
        >
          Annual Statement international
        </button>
        <button v-else class="r_button" @click="annual(ticker)">
          Annual Statement
        </button>
        <button
          v-if="!international"
          class="r_button"
          @click="quaterly(ticker)"
        >
          Quarterly Statement
        </button>
        <!-- <button v-else class="r_button" @click="quaterly(ticker)">
          Quarterly Statement
        </button> -->
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
            style: '1',
            
           
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
import { db } from "../firebase";

export default {
  components: {
    VueTradingView,
  },
  props: ["ticker"],
  data() {
    return {
      popup: false,
      international: false,
      username: "",
      search:"",
      user: null,
      ispro: 'ispro?',
      ticker_list: ["msft"],
      ticker_list_length: [],
      dummy_list: ["dum","gh","dumd"],

      error: null,
      awesome: "ds",
      selected: "0",
    };
  },

  methods: {
    onChangeEventHandler() {
      this.international = !this.international;
    },
    openstripe: function () {
      window.open("https://greenliness.gumroad.com/l/qxwozl", "_blank");
      // window.open("https://buy.stripe.com/aEUfZkel41YJ6FW5kk");
      this.$gtag.event("clicked on pro", { method: "Google" });
    },

    return_id: function (id) {
      return id;
    },

    setpopup: function () {
      alert("popup");
      this.popup = !this.popup;
    },

    meowalert: function () {
      alert("meow");
    },
    annual: function (ticker) {
      window.open(
        "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" +
          ticker +
          "&type=10-K&dateb=&owner=exclude&count=40#contentDiv"
      );
      this.$gtag.event("clicked annaul desktop", { method: "Google" });
    },
    annual_int: function (ticker) {
      window.open(
        "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" +
          ticker +
          "&type=20-f&dateb=&owner=exclude&count=40#contentDiv"
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
    quaterly_int: function (ticker) {
      window.open(
        "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" +
          ticker +
          "&type=13F&dateb=&owner=exclude&count=40#contentDiv"
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




    collect_tickers: function(ticker){
      console.log(ticker);
      //write data to firebase
      db.collection("users").doc(this.user.email).update({
        tickers:  this.ticker_list,
        total_ticker_search: this.ticker_list.length,

       
       
       }).then(function() {
          console.log("tickers added");
        }
        
        
        );

    },


    


    the_go: function(ticker){
      // this.ticker_list.push(ticker);
      // this.collect_tickers(ticker);
      // this.popup = false;
      // this.international = false;
      this.$router.push({
        path: "/dashboard/" + ticker,
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


  created:async function() {
    firebase.auth().onAuthStateChanged((user) => {
    this.user = user;
    });

    let test = await db.collection("users").doc(firebase.auth().currentUser.email).get();

    if(!test){
      test = [];
    } else{
      
      console.log(test.data().tickers);
      this.ticker_list = test.data().tickers;
    }


  },

  firestore(){
    return{
    //   ticker_list: db.doc("users/"+this.user.email).onSnapshot((doc) => {
    //     this.ticker_list = doc.data().tickers;
    //   }),
    //  ticker_list_length: db.doc("users/"+this.user.email).onSnapshot((doc) => {
    //     this.ticker_list_length = doc.data().tickers.length;
    //   }),
    username: "fda",
    }
  },

};
</script>

<style>
@import url("../style/dashboard.css");
</style>
