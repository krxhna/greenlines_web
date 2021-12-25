.
<template>
  <div class="test">
    <div class="som" style="display: flex">
      fasf
      {{ selected }}
      {{ map1[selected] }}
      <!-- {{return_items(0,"Unlevered Beta")}} -->
      <!-- {{list1['list'][selected]}}
    {{list1}}
    {{selected}} -->
    </div>
    <div class="sd">
      <select
        v-model="selected"
        class="select"
        style="width: 30vw"
        @change="reload()"
      >
        
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
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Router from "../router";

import { db } from "../firebase";
import names from "./data.js";
export default {
  data() {
    return {
      items: names,
      name: "nafsdafe",
      list1: "",
      map1: "fasdf",
      micelist: [],
      isLoading: true,
      select: "son",
      selected: "0",
    };
  },

  props: ["ticker"],

  methods: {
    return_son: function () {},

    changeroute: function () {
      Router.push({ path: this.selected });
    },

    reloadPage() {
      Router.push({ path: this.selected });
      window.location.reload();
    },

    getMice() {
      this.isLoading = true;

      firebase
        .firestore()
        .collection("users")
        .get()
        .then(
          (querySnapshot) =>
            (this.miceList = querySnapshot.docs.map((doc) => doc.data()))
        );
    },
  },
  return_items: function (sel, name) {
    console.log(sel);
    return this.items[sel][name];
  },

  map1_update() {
    db.doc("industry/" + this.selected).onSnapshot((doc) => {
      this.map1 = doc.data();
    });
  },

  firestore() {
    return {
      map1: db.doc("industry/data_new").onSnapshot((doc) => {
        this.map1 = doc.data().roic;
      }),
      name: db.doc("users/" + this.ticker).onSnapshot((doc) => {
        this.name = doc.data().name;
      }),
    };
  },

  mounted() {
    this.map1;
    this.getMice();
  },
};
</script>

<style></style>
