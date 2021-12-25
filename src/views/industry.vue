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
          <div class="rectangle"></div>
           <h5 v-if="user == null" style="color:green; text-transform: capitalize;">login/signup for free to get acess</h5>
          <h5 v-else style="color:green; text-transform: capitalize;">{{user.displayName}}'s GL terminal</h5>
          
          <router-link
            :to="{ path: '/dashboard/' + ticker }"
            class="thing"
            replace
            >Dashboard</router-link
          >
          <h4 class="current">industry</h4>
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
    <div class="view">
      <div class="area">
        <div class="thentext" style="color:green">
          Select an industry
        </div>
        <h1 v-if="user == null">
          <select v-model="selected">
            <option disabled value="">login to get datas</option>
          </select>
        </h1>
        <h1 v-else>
          <select v-model="selected" class="select" style="width:30vw">
            <option value="0">Advertising</option>
            <option value="1">Aerospace/Defense</option>
            <option value="2">Air Transport</option>
            <option value="3">Apparel</option>
            <option value="4">Auto & Truck</option>
            <option value="5">Auto Parts</option>
            <option value="6">Bank (Money Center)</option>
            <option value="7">Banks (Regional)</option>
            <option value="8">Beverage (Alcoholic)</option>
            <option value="9">Beverage (Soft)</option>
            <option value="10">Broadcasting</option>
          </select>
        </h1>
      </div>
      <div class="cards">
        <div class="infocards">
          <h4>Industry Name</h4>
          <h1 class="per">{{ return_items(selected, "Industry Name") }}</h1>
        </div>
        <div class="infocards">
          <h4>Number of firms</h4>
          <h1 class="per">{{ return_items(selected, "Number of firms") }}</h1>
        </div>
        <div class="infocards">
          <h4>Annual Average Revenue growth - Last 5 y ears</h4>
          <h1 class="per">
            {{
              return_items(
                selected,
                "Annual Average Revenue growth - Last 5 years"
              )
            }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Pre-tax Operating Margin (Unadjusted)</h4>
          <h1 class="per">
            {{
              return_items(selected, "Pre-tax Operating Margin (Unadjusted)")
            }}
          </h1>
        </div>
        <div class="infocards">
          <h4>After-tax ROC</h4>
          <h1 class="per">{{ return_items(selected, "After-tax ROC") }}</h1>
        </div>
        <div class="infocards">
          <h4>Average effective tax rate</h4>
          <h1 class="per">
            {{ return_items(selected, "Average effective tax rate") }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Unlevered Beta</h4>
          <h1 class="per">{{ return_items(selected, "Unlevered Beta") }}</h1>
        </div>
        <div class="infocards">
          <h4>Equity (Levered) Beta</h4>
          <h1 class="per">
            {{ return_items(selected, "Equity (Levered) Beta") }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Cost of equity</h4>
          <h1 class="per">{{ return_items(selected, "Cost of equity") }}</h1>
        </div>
        <div class="infocards">
          <h4>Std deviation in stock prices</h4>
          <h1 class="per">
            {{ return_items(selected, "Std deviation in stock prices") }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Pre-tax cost of debt</h4>
          <h1 class="per">
            {{ return_items(selected, "Pre-tax cost of debt") }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Market Debt/Capital</h4>
          <h1 class="per">
            {{ return_items(selected, "Market Debt/Capital") }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Cost of capital</h4>
          <h1 class="per">{{ return_items(selected, "Cost of capital") }}</h1>
        </div>
        <div class="infocards">
          <h4>Sales/Capital</h4>
          <h1 class="per">{{ return_items(selected, "Sales/Capital") }}</h1>
        </div>
        <div class="infocards">
          <h4>EV/Sales</h4>
          <h1 class="per">{{ return_items(selected, "EV/Sales") }}</h1>
        </div>
        <div class="infocards">
          <h4>EV/EBITDA</h4>
          <h1 class="per">{{ return_items(selected, "EV/EBITDA") }}</h1>
        </div>
        <div class="infocards">
          <h4>EV/EBIT</h4>
          <h1 class="per">{{ return_items(selected, "EV/EBIT") }}</h1>
        </div>
        <div class="infocards">
          <h4>Price/Book</h4>
          <h1 class="per">{{ return_items(selected, "Price/Book") }}</h1>
        </div>
        <div class="infocards">
          <h4>Trailing PE</h4>
          <h1 class="per">{{ return_items(selected, "Trailing PE") }}</h1>
        </div>
        <div class="infocards">
          <h4>Non-cash WC as % of Revenues</h4>
          <h1 class="per">
            {{ return_items(selected, "Non-cash WC as % of Revenues") }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Cap Ex as % of Revenues</h4>
          <h1 class="per">
            {{ return_items(selected, "Cap Ex as % of Revenues") }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Net Cap Ex as % of Revenues</h4>
          <h1 class="per">
            {{ return_items(selected, "Net Cap Ex as % of Revenues") }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Reinvestment Rate</h4>
          <h1 class="per">{{ return_items(selected, "Reinvestment Rate") }}</h1>
        </div>
        <div class="infocards">
          <h4>ROE</h4>
          <h1 class="per">{{ return_items(selected, "ROE") }}</h1>
        </div>
        <div class="infocards">
          <h4>Dividend Payout Ratio</h4>
          <h1 class="per">
            {{ return_items(selected, "Dividend Payout Ratio") }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Equity Reinvestment Rate</h4>
          <h1 class="per">
            {{ return_items(selected, "Equity Reinvestment Rate") }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Pre-tax Operating Margin (Lease & R&D adjusted)</h4>
          <h1 class="per">
            {{
              return_items(
                selected,
                "Pre-tax Operating Margin (Lease & R&D adjusted)"
              )
            }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import firebase from "firebase/compat/app";
import names from "./data.js";


export default {
    props: ["ticker"],
  data() {
    return {
      user: null,
      error: null,
      awesome: "ds",
      selected: "0",

      items: names
      // loading: firebase.auth.currentuser
    };
  },

  methods: {
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
