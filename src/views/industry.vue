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
            <input :key="$route.fullPath" type="text" class="search-bar1" :placeholder="'$'+ticker"  @keyup.enter="the_go(message.toUpperCase())" v-model="message" >
          </div>
          
          <div class="buttondiv">
            <button :key="$route.fullPath" class="gobutton" @click="the_go(message.toUpperCase())">
            GO</button>
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
          <router-link
            :to="{ path: '/macro/' + ticker }"
            class="thing"
            replace
            >Macro view</router-link
          >
          <h7 class="thing">News( coming soon)</h7>
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

    
    <div class="view">
      <div class="area">
        
        <div class="thentext" style="color: green">
          
            <div class="thentext" style="color: green">
          Select industry

          <!-- {{return_items1(selected,"Unlevered Beta",map1)}} -->
        </div>


          <!-- {{return_items1(selected,"Unlevered Beta",map1)}} -->
        </div>
        <h1 v-if="user == null">
          <select v-model="selected" class="select" style="width: 30vw">
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
            <option class="pro" value="10">Broadcasting </option>
            <option class="pro" disabled value="34">Food Processing</option>
            <option class="pro" value="35">Food Wholesalers</option>
            <option class="pro" value="36">Furn/Home Furnishings</option>
            <option class="pro" value="37">Green & Renewable Energy</option>
            <option class="pro" value="38">Healthcare Products</option>
            <option class="pro" disabled value="39">
              Healthcare Support Services
            </option>
            <option class="pro" disabled value="40">
              Heathcare Information and Technology
            </option>
            <option class="pro" disabled value="41">Homebuilding</option>
            <option class="pro" disabled value="42">
              Hospitals/Healthcare Facilities
            </option>
            <option class="pro" disabled value="43">Hotel/Gaming</option>
          </select>
        </h1>
        <h1 v-else>
          <select v-model="selected" class="select" style="width: 30vw">
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
      <div class="cards">
        <div class="infocards">
          <h4>Industry Name</h4>
          <h1 class="per">
            {{ return_items1(selected, "Industry Name", map1) }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Number of firms</h4>
          <h1 class="per">
            {{ return_items1(selected, "Number of firms", map1) }}
          </h1>
        </div>
        <div class="infocards">

          <h4 >Annual Average Revenue growth - Last 5 years</h4>
          
           <h1 v-if="ispro" class="per">
            {{
              return_items1(
                selected,
                "Annual Average Revenue growth - Last 5 years",
                map1
              )
            }}
          </h1>
          <div v-else class="blur1dfs"> <b-button
@click="openstripe()"
class="btn btn-success"
style="color: black; background-color: #38ea41"
>pro <i class="fas fa-lock"></i
></b-button></div>

        </div>
        <div class="infocards">
          <h4>Pre-tax Operating Margin (Unadjusted)</h4>
          <h1 class="per">
            {{
              return_items1(
                selected,
                "Pre-tax Operating Margin (Unadjusted)",
                map1
              )
            }}
          </h1>
        </div>
        <div class="infocards">
          <h4>After-tax ROC</h4>
          <h1 class="per">
            {{ return_items1(selected, "After-tax ROC", map1) }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Average effective tax rate</h4>
          <h1 class="per">
            {{ return_items1(selected, "Average effective tax rate", map1) }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Unlevered Beta</h4>
          <h1 class="per">
            {{ return_items1(selected, "Unlevered Beta", map1) }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Equity (Levered) Beta</h4>
          <h1 v-if="ispro" class="per">
            {{ return_items1(selected, "Equity (Levered) Beta", map1) }}
          </h1>
          <div v-else class="blur1dfs"> <b-button
@click="openstripe()"
class="btn btn-success"
style="color: black; background-color: #38ea41"
>pro <i class="fas fa-lock"></i
></b-button></div>

        </div>
        <div class="infocards">
          <h4>Cost of equity</h4>
          <h1 class="per">
            {{ return_items1(selected, "Cost of equity", map1) }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Std deviation in stock prices</h4>
          <h1 class="per">
            {{ return_items1(selected, "Std deviation in stock prices", map1) }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Pre-tax cost of debt</h4>
          <h1 v-if="ispro" class="per">
            {{ return_items1(selected, "Pre-tax cost of debt", map1) }}
          </h1>
          <div v-else class="blur1dfs"> <b-button
@click="openstripe()"
class="btn btn-success"
style="color: black; background-color: #38ea41"
>pro <i class="fas fa-lock"></i
></b-button></div>


        </div>
        <div class="infocards">
          <h4>Market Debt/Capital</h4>
          <h1 class="per">
            {{ return_items1(selected, "Market Debt/Capital", map1) }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Cost of capital</h4>
          <h1 class="per">
            {{ return_items1(selected, "Cost of capital", map1) }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Sales/Capital</h4>
          <h1 v-if="ispro" class="per">
            {{ return_items1(selected, "Sales/Capital", map1) }}
          </h1>
          <div v-else class="blur1dfs"> <b-button
@click="openstripe()"
class="btn btn-success"
style="color: black; background-color: #38ea41"
>pro <i class="fas fa-lock"></i
></b-button></div>

        </div>
        <div class="infocards">
          <h4>EV/Sales</h4>
          <h1 v-if="ispro" class="per">{{ return_items1(selected, "EV/Sales", map1) }}</h1>
         <div v-else class="blur1dfs"> <b-button
                @click="openstripe()"
                class="btn btn-success"
                style="color: black; background-color: #38ea41"
                >pro <i class="fas fa-lock"></i
              ></b-button></div>
        </div>
        <div class="infocards">
          <h4>EV/EBITDA</h4>
          <h1 class="per">{{ return_items1(selected, "EV/EBITDA", map1) }}</h1>
        </div>
        <div class="infocards">
          <h4>EV/EBIT</h4>
          <h1 v-if="ispro" class="per">{{ return_items1(selected, "EV/EBIT", map1) }}</h1>
          <div v-else class="blur1dfs"> <b-button
@click="openstripe()"
class="btn btn-success"
style="color: black; background-color: #38ea41"
>pro <i class="fas fa-lock"></i
></b-button></div>

        </div>
        <div class="infocards">
          <h4>Price/Book</h4>
          <h1 class="per">{{ return_items1(selected, "Price/Book", map1) }}</h1>
        </div>
        <div class="infocards">
          <h4>Trailing PE</h4>
          <h1 v-if="ispro" class="per">
            {{ return_items1(selected, "Trailing PE", map1) }}
          </h1>
          <div v-else class="blur1dfs"> <b-button
@click="openstripe()"
class="btn btn-success"
style="color: black; background-color: #38ea41"
>pro <i class="fas fa-lock"></i
></b-button></div>

        </div>
        <div class="infocards">
          <h4>Non-cash WC as % of Revenues</h4>
          <h1 v-if="ispro" class="per">
            {{ return_items1(selected, "Non-cash WC as % of Revenues", map1) }}
          </h1>
          <div v-else class="blur1dfs"> <b-button
@click="openstripe()"
class="btn btn-success"
style="color: black; background-color: #38ea41"
>pro <i class="fas fa-lock"></i
></b-button></div>

        </div>
        <div class="infocards">
          <h4>Cap Ex as % of Revenues</h4>
          <h1 class="per">
            {{ return_items1(selected, "Cap Ex as % of Revenues", map1) }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Net Cap Ex as % of Revenues</h4>
          <h1 class="per">
            {{ return_items1(selected, "Net Cap Ex as % of Revenues", map1) }}
          </h1>
        </div>
        <div class="infocards">
          <h4>Reinvestment Rate</h4>
          <h1 v-if="ispro" class="per">
            {{ return_items1(selected, "Reinvestment Rate", map1) }}
          </h1>
          
<div v-else class="blur1dfs"> <b-button
@click="openstripe()"
class="btn btn-success"
style="color: black; background-color: #38ea41"
>pro <i class="fas fa-lock"></i
></b-button></div>

        </div>
        <div class="infocards">
          <h4>ROE</h4>
          <h1 class="per">{{ return_items1(selected, "ROE", map1) }}</h1>
        </div>
        <div class="infocards">
          <h4>Dividend Payout Ratio</h4>
          <h1 v-if="ispro" class="per">
            {{ return_items1(selected, "Dividend Payout Ratio", map1) }}
          </h1>
          <div v-else class="blur1dfs"> <b-button
@click="openstripe()"
class="btn btn-success"
style="color: black; background-color: #38ea41"
>pro <i class="fas fa-lock"></i
></b-button></div>

        </div>
        <div class="infocards">
          <h4>Equity Reinvestment Rate</h4>
          <h1  v-if="ispro" class="per">
            {{ return_items1(selected, "Equity Reinvestment Rate", map1) }}
          </h1>
          
<div v-else class="blur1dfs"> <b-button
@click="openstripe()"
class="btn btn-success"
style="color: black; background-color: #38ea41"
>pro <i class="fas fa-lock"></i
></b-button></div>

        </div>
        <div class="infocards">
          <h4>Pre-tax Operating Margin (Lease & R&D adjusted)</h4>
          <h1 class="per">
            {{
              return_items1(
                selected,
                "Pre-tax Operating Margin (Lease & R&D adjusted)",
                map1
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
      ispro:[],
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
     the_go:function(ticker){
      this.$router.push({
        path: '/dashboard/'+ ticker,
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
