<template>
  <div class="new">
    <div class="nav">
      <router-link
        :to="{ path: '/go/' + ticker }"
        style="
          color: black;
          background-color: rgb(0, 245, 94);
          border-color: rgb(0, 245, 94);
        "
        replace
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
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

      <h1 v-if="user == null">
        <b-button
          @click="googlesigin"
          class="btn"
          style="color: black; background-color: white; border-color: white"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-box-arrow-in-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
            />
            <path
              fill-rule="evenodd"
              d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
          Login/signinup</b-button
        >
      </h1>

      <h1 v-else>
        <b-button
          @click="logout"
          class="btn btn-success"
          style="
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

    <div class="tit" style="font-weight: 700; font-size: 20px">
      Industry averages
    </div>
    <div class="s">{{ width1 }}</div>
    <div class="sel">
      <h1 v-if="user == null">
        <select v-model="selected" class="select1">
          <option value="0">Advertising</option>
          <option value="1">Aerospace/Defense</option>
          <option value="2">Air Transport</option>
          <option value="3">Apparel</option>
          <option value="4">Auto & Truck</option>
          <option value="5">Auto Parts</option>
          <option value="8">Beverage (Alcoholic)</option>
          <option value="9">Beverage (Soft)</option>
          <option value="10">Broadcasting</option>
          <option disabled value="">login to view 90+ other industries</option>
        </select>
      </h1>
      <h1 v-else>
        <select v-model="selected" class="select1" style="width: 30vw">
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
          <option value="11">Brokerage & Investment Banking</option>
          <option value="12">Building Materials</option>
          <option value="13">Business & Consumer Services</option>
          <option value="14">Cable TV</option>
          <option value="15">Chemical (Basic)</option>
          <option value="16">Chemical (Diversified)</option>
          <option value="17">Chemical (Specialty)</option>
          <option value="18">Coal & Related Energy</option>
          <option value="19">Computer Services</option>
          <option value="20">Computers/Peripherals</option>
          <option value="21">Construction Supplies</option>
          <option value="22">Diversified</option>
          <option value="23">Drugs (Biotechnology)</option>
          <option value="24">Drugs (Pharmaceutical)</option>
          <option value="25">Education</option>
          <option value="26">Electrical Equipment</option>
          <option value="27">Electronics (Consumer & Office)</option>
          <option value="28">Electronics (General)</option>
          <option value="29">Engineering/Construction</option>
          <option value="30">Entertainment</option>
          <option value="31">Environmental & Waste Services</option>
          <option value="32">Farming/Agriculture</option>
          <option value="33">Financial Svcs. (Non-bank & Insurance)</option>
          <option value="34">Food Processing</option>
          <option value="35">Food Wholesalers</option>
          <option value="36">Furn/Home Furnishings</option>
          <option value="37">Green & Renewable Energy</option>
          <option value="38">Healthcare Products</option>
          <option value="39">Healthcare Support Services</option>
          <option value="40">Heathcare Information and Technology</option>
          <option value="41">Homebuilding</option>
          <option value="42">Hospitals/Healthcare Facilities</option>
          <option value="43">Hotel/Gaming</option>
          <option value="44">Household Products</option>
          <option value="45">Information Services</option>
          <option value="46">Insurance (General)</option>
          <option value="47">Insurance (Life)</option>
          <option value="48">Insurance (Prop/Cas.)</option>
          <option value="49">Investments & Asset Management</option>
          <option value="50">Machinery</option>
          <option value="51">Metals & Mining</option>
          <option value="52">Office Equipment & Services</option>
          <option value="53">Oil/Gas (Integrated)</option>
          <option value="54">Oil/Gas (Production and Exploration)</option>
          <option value="55">Oil/Gas Distribution</option>
          <option value="56">Oilfield Svcs/Equip.</option>
          <option value="57">Packaging & Container</option>
          <option value="58">Paper/Forest Products</option>
          <option value="59">Power</option>
          <option value="60">Precious Metals</option>
          <option value="61">Publishing & Newspapers</option>
          <option value="62">R.E.I.T.</option>
          <option value="63">Real Estate (Development)</option>
          <option value="64">Real Estate (General/Diversified)</option>
          <option value="65">Real Estate (Operations & Services)</option>
          <option value="66">Recreation</option>
          <option value="67">Reinsurance</option>
          <option value="68">Restaurant/Dining</option>
          <option value="69">Retail (Automotive)</option>
          <option value="70">Retail (Building Supply)</option>
          <option value="71">Retail (Distributors)</option>
          <option value="72">Retail (General)</option>
          <option value="73">Retail (Grocery and Food)</option>
          <option value="74">Retail (Online)</option>
          <option value="75">Retail (Special Lines)</option>
          <option value="76">Rubber& Tires</option>
          <option value="77">Semiconductor</option>
          <option value="78">Semiconductor Equip</option>
          <option value="79">Shipbuilding & Marine</option>
          <option value="80">Shoe</option>
          <option value="81">Software (Entertainment)</option>
          <option value="82">Software (Internet)</option>
          <option value="83">Software (System & Application)</option>
          <option value="84">Steel</option>
          <option value="85">Telecom (Wireless)</option>
          <option value="86">Telecom. Equipment</option>
          <option value="87">Telecom. Services</option>
          <option value="88">Tobacco</option>
          <option value="89">Transportation</option>
          <option value="90">Transportation (Railroads)</option>
          <option value="91">Trucking</option>
          <option value="92">Utility (General)</option>
          <option value="93">Utility (Water)</option>
          <option value="94">Total Market</option>
          <option value="95">Total Market (without financials)</option>
        </select>
      </h1>
    </div>
    <div class="cards_mobilefds">
      <div class="infocards1"><h4>Industry Name</h4> <h1 class="per1"> {{ return_items1( selected,'Industry Name',map1)}}</h1></div>
<div class="infocards1"><h4>Number of firms</h4> <h1 class="per1"> {{ return_items1( selected,'Number of firms',map1)}}</h1></div>
<div class="infocards1"><h4>Average Revenue growth (5 years)</h4> <h1 class="per1"> {{ return_items1( selected,'Annual Average Revenue growth - Last 5 years',map1)}}</h1></div>
<div class="infocards1"><h4>Pre-tax Operating Margin</h4> <h1 class="per1"> {{ return_items1( selected,'Pre-tax Operating Margin (Unadjusted)',map1)}}</h1></div>
<div class="infocards1"><h4>After-tax ROC</h4> <h1 class="per1"> {{ return_items1( selected,'After-tax ROC',map1)}}</h1></div>
<div class="infocards1"><h4>Average effective tax rate</h4> <h1 class="per1"> {{ return_items1( selected,'Average effective tax rate',map1)}}</h1></div>
<div class="infocards1"><h4>Unlevered Beta</h4> <h1 class="per1"> {{ return_items1( selected,'Unlevered Beta',map1)}}</h1></div>
<div class="infocards1"><h4>Equity (Levered) Beta</h4> <h1 class="per1"> {{ return_items1( selected,'Equity (Levered) Beta',map1)}}</h1></div>
<div class="infocards1"><h4>Cost of equity</h4> <h1 class="per1"> {{ return_items1( selected,'Cost of equity',map1)}}</h1></div>
<div class="infocards1"><h4>Std deviation in stock prices</h4> <h1 class="per1"> {{ return_items1( selected,'Std deviation in stock prices',map1)}}</h1></div>
<div class="infocards1"><h4>Pre-tax cost of debt</h4> <h1 class="per1"> {{ return_items1( selected,'Pre-tax cost of debt',map1)}}</h1></div>
<div class="infocards1"><h4>Market Debt/Capital</h4> <h1 class="per1"> {{ return_items1( selected,'Market Debt/Capital',map1)}}</h1></div>
<div class="infocards1"><h4>Cost of capital</h4> <h1 class="per1"> {{ return_items1( selected,'Cost of capital',map1)}}</h1></div>
<div class="infocards1"><h4>Sales/Capital</h4> <h1 class="per1"> {{ return_items1( selected,'Sales/Capital',map1)}}</h1></div>
<div class="infocards1"><h4>EV/Sales</h4> <h1 class="per1"> {{ return_items1( selected,'EV/Sales',map1)}}</h1></div>
<div class="infocards1"><h4>EV/EBITDA</h4> <h1 class="per1"> {{ return_items1( selected,'EV/EBITDA',map1)}}</h1></div>
<div class="infocards1"><h4>EV/EBIT</h4> <h1 class="per1"> {{ return_items1( selected,'EV/EBIT',map1)}}</h1></div>
<div class="infocards1"><h4>Price/Book</h4> <h1 class="per1"> {{ return_items1( selected,'Price/Book',map1)}}</h1></div>
<div class="infocards1"><h4>Trailing PE</h4> <h1 class="per1"> {{ return_items1( selected,'Trailing PE',map1)}}</h1></div>
<div class="infocards1"><h4>Non-cash WC as % of Revenues</h4> <h1 class="per1"> {{ return_items1( selected,'Non-cash WC as % of Revenues',map1)}}</h1></div>
<div class="infocards1"><h4>Cap Ex as % of Revenues</h4> <h1 class="per1"> {{ return_items1( selected,'Cap Ex as % of Revenues',map1)}}</h1></div>
<div class="infocards1"><h4>Net Cap Ex as % of Revenues</h4> <h1 class="per1"> {{ return_items1( selected,'Net Cap Ex as % of Revenues',map1)}}</h1></div>
<div class="infocards1"><h4>Reinvestment Rate</h4> <h1 class="per1"> {{ return_items1( selected,'Reinvestment Rate',map1)}}</h1></div>
<div class="infocards1"><h4>ROE</h4> <h1 class="per1"> {{ return_items1( selected,'ROE',map1)}}</h1></div>
<div class="infocards1"><h4>Dividend Payout Ratio</h4> <h1 class="per1"> {{ return_items1( selected,'Dividend Payout Ratio',map1)}}</h1></div>
<div class="infocards1"><h4>Equity Reinvestment Rate</h4> <h1 class="per1"> {{ return_items1( selected,'Equity Reinvestment Rate',map1)}}</h1></div>
<div class="infocards1"><h4>Pre-tax Operating Margin (Lease & R&D adjusted)</h4> <h1 class="per1"> {{ return_items1( selected,'Pre-tax Operating Margin (Lease & R&D adjusted)',map1)}}</h1></div>
     
     
     
    </div>


 
    
    <!-- Average of {{ return_items1( selected,'Number of firms',map1)}} firms -->
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
      user: null,
      error: null,
      awesome: "ds",
      selected: "0",
      map1: [],
      width1: screen.width,

      items: names,
      // loading: firebase.auth.currentuser
    };
  },

  methods: {
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
.nav {
  align-items: center;
  display: flex;
  background-color: rgb(0, 245, 94);

  justify-content: space-evenly;
  /* overflow: hidden;
  background-color: rgb(255, 255, 255);
  position: fixed; 
  top: 10; */
  height: 7vh; /* Position the navbar at the top of the page */
  width: screenwidth; /* Full width */
}

.infocards1 {
  padding-left: 10px ;
  border-radius: 0;
  border-bottom: 1px solid rgb(43, 43, 43);
  /* padding: 10px;
  margin: 10px; */
  box-shadow: 0px 10px -14px 14px black;
  
  background-color: rgb(255, 255, 255);
  width: 100%;

  height: 11vh;
  
  
}

.per1{
  color: rgb(0, 0, 0);
}

.select1 {
  position: relative;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 2;
  height: 50px;
  transition: all 200ms linear;
  border-radius: 4px;
  width: 220px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
  border: none;
  background-color: #ffeba7;
  cursor: pointer;
  color: #102770;
  box-shadow: 0 12px 35px 0 rgba(255, 235, 167, 0.15);
  background-color: rgb(0, 245, 94);
  width: screenwidth;
}

/* 
.infocard2{
  width: 100vw;
  height: 10vh;
  
}
 */
</style>
