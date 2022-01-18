<template>
  <div class="macro">
    <!-- macro
    {{ map1 }} -->
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
          <router-link
            :to="{ path: '/industry/' + ticker }"
            class="thing"
            replace
            >Industry</router-link
          >
          <h4 class="current">Macro view</h4>
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

    <div class="view_macro">
      <!-- {{retail_sales_dates}} -->
      <div class="area">
        <div class="char">
          <h3>Yield Curve</h3>
          <!-- updated weekly -->
          <lineChart_nofill
            :newdata="[
              0.05, 0.06, 0.08, 0.22, 0.4, 0.78, 1.04, 1.37, 1.55, 1.63, 2.05,
              2.01,
            ]"
            :labels="yield_years"
          ></lineChart_nofill>
          <h3>Retail sales</h3>
          <BarChart
            :newdata="retail_sales_value"
            :labels="retail_sales_dates"
          ></BarChart>

          <h3>Unemployment rate</h3>

          <lineChart_nofill
            :newdata="Unemployment_value"
            :labels="Unemployment_dates"
          ></lineChart_nofill>
          <h3>Total Nonfarm Payroll</h3>
          <BarChart :newdata="Nonfarm_value" :labels="Nonfarm_dates"></BarChart>

          <h3>new orders of durable goods</h3>
          <BarChart :newdata="durable_value" :labels="durable_dates"></BarChart>

          <h3>Consumer Sentiment</h3>

          <lineChart_nofill 
            :newdata="Sentiment_value"
            :labels="Sentiment_dates"
          ></lineChart_nofill>

          <h3>consumer price index (CPI)</h3>

          <lineChart_nofill :newdata="cpi_value" :labels="cpi_dates"></lineChart_nofill>

          <h3>Intrest Rates</h3>

          <lineChart_nofill :newdata="fed_funds_rate_value" :labels="fed_funds_rate_dates"></lineChart_nofill>

          




         



          <h1></h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "../components/barchart.vue";
// import lineChart from "../components/linechart.vue";
import lineChart_nofill from "../components/linechart_nofill.vue";
import firebase from "firebase/compat/app";
import { db } from "../firebase";

export default {
  components: {
    BarChart,
    // lineChart,
    lineChart_nofill,
    // Linechart,
  },

  methods: {
    openstripe: function () {
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

  props: ["ticker"],

  data() {
    return {
      // date_reverse: this.dates.reverse().slice(Math.max(this.dates.length - 70, 0)),
      // label_reverse: this.labels.reverse().slice(Math.max(this.labels.length - 70, 0)),
      username: "",
      user: null,
      error: null,
      awesome: "ds",
      selected: "0",
      retail_sales_dates: [
        "2019-07-01",
        "2019-08-01",
        "2019-09-01",
        "2019-10-01",
        "2019-11-01",
        "2019-12-01",
        "2020-01-01",
        "2020-02-01",
        "2020-03-01",
        "2020-04-01",
        "2020-05-01",
        "2020-06-01",
        "2020-07-01",
        "2020-08-01",
        "2020-09-01",
        "2020-10-01",
        "2020-11-01",
        "2020-12-01",
        "2021-01-01",
        "2021-02-01",
        "2021-03-01",
        "2021-04-01",
        "2021-05-01",
        "2021-06-01",
        "2021-07-01",
        "2021-08-01",
        "2021-09-01",
        "2021-10-01",
        "2021-11-01",
        "2021-12-01",
      ],
      retail_sales_value: [
        "462097",
        "473482",
        "429556",
        "456436",
        "469003",
        "521467",
        "418734",
        "415511",
        "430527",
        "377210",
        "462286",
        "481205",
        "494905",
        "488949",
        "476247",
        "495722",
        "492362",
        "559932",
        "464362",
        "440019",
        "567933",
        "558181",
        "570641",
        "562929",
        "558031",
        "557018",
        "536229",
        "559399",
        "580162",
        "641659",
      ],
      Unemployment_value: [
        "3.7",
        "3.7",
        "3.5",
        "3.6",
        "3.6",
        "3.6",
        "3.5",
        "3.5",
        "4.4",
        "14.7",
        "13.2",
        "11.0",
        "10.2",
        "8.4",
        "7.9",
        "6.9",
        "6.7",
        "6.7",
        "6.4",
        "6.2",
        "6.0",
        "6.0",
        "5.8",
        "5.9",
        "5.4",
        "5.2",
        "4.7",
        "4.6",
        "4.2",
        "3.9",
      ],
      Unemployment_dates: [
        "2019-07-01",
        "2019-08-01",
        "2019-09-01",
        "2019-10-01",
        "2019-11-01",
        "2019-12-01",
        "2020-01-01",
        "2020-02-01",
        "2020-03-01",
        "2020-04-01",
        "2020-05-01",
        "2020-06-01",
        "2020-07-01",
        "2020-08-01",
        "2020-09-01",
        "2020-10-01",
        "2020-11-01",
        "2020-12-01",
        "2021-01-01",
        "2021-02-01",
        "2021-03-01",
        "2021-04-01",
        "2021-05-01",
        "2021-06-01",
        "2021-07-01",
        "2021-08-01",
        "2021-09-01",
        "2021-10-01",
        "2021-11-01",
        "2021-12-01",
      ],
      Nonfarm_dates: [
        "2019-07-01",
        "2019-08-01",
        "2019-09-01",
        "2019-10-01",
        "2019-11-01",
        "2019-12-01",
        "2020-01-01",
        "2020-02-01",
        "2020-03-01",
        "2020-04-01",
        "2020-05-01",
        "2020-06-01",
        "2020-07-01",
        "2020-08-01",
        "2020-09-01",
        "2020-10-01",
        "2020-11-01",
        "2020-12-01",
        "2021-01-01",
        "2021-02-01",
        "2021-03-01",
        "2021-04-01",
        "2021-05-01",
        "2021-06-01",
        "2021-07-01",
        "2021-08-01",
        "2021-09-01",
        "2021-10-01",
        "2021-11-01",
        "2021-12-01",
      ],

      Nonfarm_value: [
        "150658",
        "151094",
        "151511",
        "152500",
        "153095",
        "152846",
        "150055",
        "150968",
        "149952",
        "130251",
        "133419",
        "138501",
        "139107",
        "140728",
        "141946",
        "143568",
        "144121",
        "143602",
        "140980",
        "142133",
        "143315",
        "144397",
        "145355",
        "146578",
        "146536",
        "147012",
        "147650",
        "149245",
        "150098",
        "150170",
      ],
      durable_value: [
        "255421",
        "233042",
        "251572",
        "251142",
        "251376",
        "227672",
        "246086",
        "211661",
        "228317",
        "211568",
        "153677",
        "175719",
        "209441",
        "205655",
        "219612",
        "236648",
        "233711",
        "222229",
        "242573",
        "222873",
        "236976",
        "279768",
        "246489",
        "247305",
        "276422",
        "240387",
        "265120",
        "271323",
        "259457",
        "257395",
      ],
      durable_dates: [
        "2019-06-01",
        "2019-07-01",
        "2019-08-01",
        "2019-09-01",
        "2019-10-01",
        "2019-11-01",
        "2019-12-01",
        "2020-01-01",
        "2020-02-01",
        "2020-03-01",
        "2020-04-01",
        "2020-05-01",
        "2020-06-01",
        "2020-07-01",
        "2020-08-01",
        "2020-09-01",
        "2020-10-01",
        "2020-11-01",
        "2020-12-01",
        "2021-01-01",
        "2021-02-01",
        "2021-03-01",
        "2021-04-01",
        "2021-05-01",
        "2021-06-01",
        "2021-07-01",
        "2021-08-01",
        "2021-09-01",
        "2021-10-01",
        "2021-11-01",
      ],
      Sentiment_dates: [
        "2019-06-01",
        "2019-07-01",
        "2019-08-01",
        "2019-09-01",
        "2019-10-01",
        "2019-11-01",
        "2019-12-01",
        "2020-01-01",
        "2020-02-01",
        "2020-03-01",
        "2020-04-01",
        "2020-05-01",
        "2020-06-01",
        "2020-07-01",
        "2020-08-01",
        "2020-09-01",
        "2020-10-01",
        "2020-11-01",
        "2020-12-01",
        "2021-01-01",
        "2021-02-01",
        "2021-03-01",
        "2021-04-01",
        "2021-05-01",
        "2021-06-01",
        "2021-07-01",
        "2021-08-01",
        "2021-09-01",
        "2021-10-01",
        "2021-11-01",
      ],
      Sentiment_value: [
        "98.2",
        "98.4",
        "89.8",
        "93.2",
        "95.5",
        "96.8",
        "99.3",
        "99.8",
        "101",
        "89.1",
        "71.8",
        "72.3",
        "78.1",
        "72.5",
        "74.1",
        "80.4",
        "81.8",
        "76.9",
        "80.7",
        "79",
        "76.8",
        "84.9",
        "88.3",
        "82.9",
        "85.5",
        "81.2",
        "70.3",
        "72.8",
        "71.7",
        "67.4",
      ],
      cpi_value: [
        "256.571",
        "256.558",
        "256.759",
        "257.346",
        "257.208",
        "256.974",
        "257.971",
        "258.678",
        "258.115",
        "256.389",
        "256.394",
        "257.797",
        "259.101",
        "259.918",
        "260.280",
        "260.388",
        "260.229",
        "260.474",
        "261.582",
        "263.014",
        "264.877",
        "267.054",
        "269.195",
        "271.696",
        "273.003",
        "273.567",
        "274.310",
        "276.589",
        "277.948",
        "278.802",
      ],
      cpi_dates: [
        "2019-07-01",
        "2019-08-01",
        "2019-09-01",
        "2019-10-01",
        "2019-11-01",
        "2019-12-01",
        "2020-01-01",
        "2020-02-01",
        "2020-03-01",
        "2020-04-01",
        "2020-05-01",
        "2020-06-01",
        "2020-07-01",
        "2020-08-01",
        "2020-09-01",
        "2020-10-01",
        "2020-11-01",
        "2020-12-01",
        "2021-01-01",
        "2021-02-01",
        "2021-03-01",
        "2021-04-01",
        "2021-05-01",
        "2021-06-01",
        "2021-07-01",
        "2021-08-01",
        "2021-09-01",
        "2021-10-01",
        "2021-11-01",
        "2021-12-01",
      ],

      fed_funds_rate_dates:['2019-07-01',
 '2019-08-01',
 '2019-09-01',
 '2019-10-01',
 '2019-11-01',
 '2019-12-01',
 '2020-01-01',
 '2020-02-01',
 '2020-03-01',
 '2020-04-01',
 '2020-05-01',
 '2020-06-01',
 '2020-07-01',
 '2020-08-01',
 '2020-09-01',
 '2020-10-01',
 '2020-11-01',
 '2020-12-01',
 '2021-01-01',
 '2021-02-01',
 '2021-03-01',
 '2021-04-01',
 '2021-05-01',
 '2021-06-01',
 '2021-07-01',
 '2021-08-01',
 '2021-09-01',
 '2021-10-01',
 '2021-11-01',
 '2021-12-01'],
 fed_funds_rate_value:['2.40',
 '2.13',
 '2.04',
 '1.83',
 '1.55',
 '1.55',
 '1.55',
 '1.58',
 '0.65',
 '0.05',
 '0.05',
 '0.08',
 '0.09',
 '0.10',
 '0.09',
 '0.09',
 '0.09',
 '0.09',
 '0.09',
 '0.08',
 '0.07',
 '0.07',
 '0.06',
 '0.08',
 '0.10',
 '0.09',
 '0.08',
 '0.08',
 '0.08',
 '0.08'],




      dates: this.retail_sales_dates,
      newdata: [40, 2, 12, 39, 10, 40, 2, 40, 40, 20, 12, 11],
      yield_years: [
        "1 Mo",
        "2 Mo",
        "3 Mo",
        "6 Mo",
        "1yr",
        "2yr",
        "3yr",
        "5yr",
        "7yr",
        "10yr",
        "20yr",
        "30yr",
      ],
      labels: [2, 3, 4, 5, 4, 4, 4],
    };
  },

  async mounted() {},

  firestore() {
    return {
      // retail_sales_dates: db.doc("macro/retail_sales_dates").onSnapshot((doc) => {
      //   this.retail_sales_dates = doc.data().data;
      // }),
      // retail_sales_value: db.doc("macro/retail_sales_value").onSnapshot((doc) => {
      //   this.retail_sales_value = doc.data().data;
      // }),
      name: db.doc("users/bob").onSnapshot((doc) => {
        this.name = doc.data();
      }),
    };
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
