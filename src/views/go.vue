<template>
  <div class="resultls">
    <div class="allview">
      <div class="top">
        <router-link
          class="home link"
          style="grid-area: header1; text-decoration: none; color: inherit"
          to="/"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            fill="currentColor"
            class="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            /></svg
          >Back</router-link
        >
        <h1 style="grid-area: header">{{ "$" + ticker.toUpperCase() }}</h1>
      </div>
      <VueTradingView
        style="grid-area: middle"
        class="view"
        :options="{
          theme: 'Dark',
          symbol: ticker,
          interval: 'D',
          showdetails: true,
          range: '60M',
          width: '100%',
          height: '300px',
        }"
      />
      <div class="navbar">
        <h7
          class="thing1"
          style="
            color: black;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fill-rule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
          home
        </h7>

        <button
          @click="clicked_industry('indus')"
          class="icon"
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-activity"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
            />
          </svg>
          <router-link
            :to="{ path: '/industrym/' + ticker }"
            replace
            style="color: black"
            >Industries</router-link
          >
        </button>
        <button
          @click="clicked_industry('indus')"
          class="icon"
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          "
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-piggy-bank" viewBox="0 0 16 16">
  <path d="M5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.138-1.496A6.613 6.613 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 0 0 .286-.958A7.602 7.602 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962z"/>
  <path fill-rule="evenodd" d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595zM2.516 6.26c.455-2.066 2.667-3.733 5.448-3.733 3.146 0 5.536 2.114 5.536 4.542 0 1.254-.624 2.41-1.67 3.248a.5.5 0 0 0-.165.535l.66 2.175h-.985l-.59-1.487a.5.5 0 0 0-.629-.288c-.661.23-1.39.359-2.157.359a6.558 6.558 0 0 1-2.157-.359.5.5 0 0 0-.635.304l-.525 1.471h-.979l.633-2.15a.5.5 0 0 0-.17-.534 4.649 4.649 0 0 1-1.284-1.541.5.5 0 0 0-.446-.275h-.56a.5.5 0 0 1-.492-.414l-.254-1.46h.933a.5.5 0 0 0 .488-.393zm12.621-.857a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199z"/>
</svg>
          <router-link
            :to="{ path: '/fundsm/' }"
            replace
            style="color: black"
            >funds</router-link
          >
        </button>

        <h1 v-if="user == null">
          <b-button
            @click="googlesigin"
            class="btn"
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              color: black;
              background-color: rgb(0, 245, 94);
              border-color: rgb(0, 245, 94);
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-google"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
              />
            </svg>
            Login</b-button
          >
        </h1>

        <h1 v-else>
          <b-button
            @click="logout"
            class="btn btn-success"
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              color: black;
              background-color: rgb(0, 245, 94);
              border-color: rgb(0, 245, 94);
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-box-arrow-in-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
              />
              <path
                fill-rule="evenodd"
                d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
              />
            </svg>
            logout</b-button
          >
        </h1>
      </div>

      <div style="grid-area: left" class="three">
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
      <footer>cwswjs</footer>

      <!-- <h1>{{data}}</h1> -->
    </div>
  </div>
</template>

<script>
import VueTradingView from "vue-trading-view/src/vue-trading-view";
import firebase from "firebase/compat/app";
import { db } from "../firebase";

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    });
  },

  components: {
    VueTradingView,
  },
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

  props: ["ticker"],

  data() {
    return {
      user: null,
      selected: "",
      width: screen.height,
    };
  },

  methods: {
    clicked_industry: function (yes) {
      console.log(yes);
      this.$gtag.event("clicked industry", { method: "Google" });
    },
    clicked_login() {
      this.$gtag.event("clicked login in home", { method: "Google" });
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
          this.clicked_login();
          console.log("logged in");
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
    return_id: function (id) {
      return id;
    },
    annual: function (ticker) {
      window.open(
        "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" +
          ticker +
          "&type=10-K&dateb=&owner=exclude&count=40#contentDiv"
      );
      this.$gtag.event("clicked annual", { method: "Google" });
    },
    quaterly: function (ticker) {
      window.open(
        "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" +
          ticker +
          "&type=10-Q&dateb=&owner=exclude&count=40#contentDiv"
      );
      this.$gtag.event("clicked quater", { method: "Google" });
    },
    ir: function (ticker) {
      window.open(
        "https://www.google.com/search?q=" + ticker + " ir" + " relations"
      );
      this.$gtag.event("clicked ir", { method: "Google" });
    },
    insider: function (ticker) {
      window.open("http://openinsider.com/search?q=" + ticker + "#results");
      this.$gtag.event("clicked insider", { method: "Google" });
    },
    twitter: function (ticker) {
      window.open("https://twitter.com/search?q=$" + ticker + "&f=live");
      this.$gtag.event("clicked twitter", { method: "Google" });
    },
    seekingalpha: function (ticker) {
      this.$gtag.event("clicked seeking aplha", { method: "Google" });
      window.open("https://seekingalpha.com/symbol/" + ticker + "/analysis");
    },
    funds: function (ticker) {
      this.$gtag.event("clicked funds", { method: "Google" });
      window.open("https://whalewisdom.com/stock/" + ticker + "#frm_filings");
    },

    kofi: function () {
      this.$gtag.event("clicked kofi", { method: "Google" });
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
  },
};
</script>

<style scoped>
:root {
  --main-color: #00a000;
  --second-color: #00ff37;
}

.navbar {
  overflow: hidden;
  justify-content: space-evenly;

  background-color: rgb(0, 245, 94);
  height: 85%;
  position: fixed; /* Set the navbar to fixed position */
  bottom: 0;
  height: 7vh; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}

.h2 {
  border-radius: 0px 15px 0px 15px;
  /* margin-left: 35%; */
  border: 1px solid rgb(168, 168, 168);
  margin-top: 2%;
  text-align: center;
  /* height: 70px; */
  /* width: 200px; */
  /* background-color: rgb(83, 255, 83); */
  color: rgb(0, 0, 0);
  font-size: 2.5rem;
}

.h1 {
  border-radius: 0px 15px 0px 15px;
  margin-left: 35%;
  border: 1px solid rgb(168, 168, 168);
  margin-top: 2%;
  text-align: center;
  height: 70px;
  width: 200px;
  /* background-color: rgb(83, 255, 83); */
  color: black;
  font-size: 2.5rem;
}

.homelink {
  margin-top: 100px;
  padding: 30px;
  color: black;
}

.box1 {
  /* background-color: #00a000; */
  /* color: white; */
  padding: 1%;
  margin-top: 10%;
  margin-bottom: 1%;
  border-radius: 1%;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-areas:
    "header1 header header2"
    "left   middle right"
    "footer footer footer";

  grid-template-columns: 1fr 2.5fr 1fr;
  /* grid-template-rows: 1fr 1fr 1fr; */
}

.view {
  /* box-shadow: 0 4px 14px 0 rgb(0 255 55 / 19%); */

  margin-top: 1.3%;

  height: 300px;
  /* width: 100%; */
  border: 0.1px solid black;
}

.three {
  margin: 10px;
  background-color: rgb(255, 255, 255);
  display: grid;
  height: 400px;
  /* 
      height: 30%;
      width: 50%; */
  /* color: blue; */
}

.r_button {
  /* font-size: 14px;160/48 */
  line-height: 1;
  border-radius: 0px 5px 0px 5px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 1px solid transparent;
  letter-spacing: 2px;
  min-width: 100%;
  /* text-transform: uppercase; */
  white-space: normal;
  font-weight: 700;
  text-align: center;
  padding: 17px 48px;
  color: black;
  border: 1px solid black;
  background-color: rgb(255, 255, 255);
  height: 85%;

  /* 
                   */
}

.r_button:hover {
  /* font-size: 14px; */
  line-height: 1;
  border-radius: 5px 0px 5px 0px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 1px solid transparent;
  letter-spacing: 2px;
  min-width: 100%;
  /* text-transform: uppercase; */
  white-space: normal;
  font-weight: 700;
  text-align: center;
  padding: 17px 48px;
  color: black;

  background-color: rgb(83, 255, 83);
  height: 85%;

  /* 
                   */
}
</style>

// rgb(83, 255, 83)
