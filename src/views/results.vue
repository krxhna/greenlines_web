<template>
  <div class="resultls">
    <div class="grid">
      <h1 style="grid-area: header" class="h1">
        {{ "$" + ticker.toUpperCase() }}
      </h1>

      <div class="box1">
        <router-link
          class="home link"
          style="grid-area: header1; text-decoration: none; color: inherit"
          to="/"
          >🡰 Back</router-link
        >
        <i class="fas fa-cloud"></i>
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
          height: '500px',
        }"
      />

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
      <!-- <h1>{{data}}</h1> -->
      <h1 style="grid-area: right" class="three">
        <!-- <select></select>
        
           


              
            <h1></h1>
            <h1></h1> -->
      </h1>
    </div>
  </div>
</template>

<script>
import VueTradingView from "vue-trading-view/src/vue-trading-view";

export default {
  components: {
    VueTradingView,
  },

  data() {
    return {
      data: [
        {
          id: 2,
          name: "Orval McLaughlin",
          email: "okoch@example.org",
          contacts: "09083692343",
          created_at: "2018-09-05 15:08:54",
          updated_at: "2018-09-05 15:08:54",
          deleted_at: null,
        },
      ],

      selected: "",
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
  },

  props: ["ticker"],
};
</script>

<style scoped>
:root {
  --main-color: #00a000;
  --second-color: #00ff37;
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

  grid-area: middle;
  margin-top: 1.3%;
  height: 100%;
  width: 100%;
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

.donate {
  display: inline-block;
  /* outline: none; */
  cursor: pointer;
  font-weight: 600;
  border-radius: 3px;
  padding: 12px 24px;
  margin-left: 30%;
  margin-top: 5%;
  border: 0;
  color: #000021;
  height: 50px;
  width: 100px;
  background: #1de95a;
  line-height: 1.15;
  border: black;
  font-size: 16px;
  /* :hover {
                        transition: all .1s ease;
                        box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
                    }
                 */
}

.donate:hover {
  transition: all 0.1s ease;
  box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
}

@keyframes slideIn {
  0% {
    transform: translateX(500px) scale(0.2);
  }
  100% {
    transform: translateX(0px) scale(1);
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(300px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes expand {
  0% {
    transform: translateX(1400px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>

// rgb(83, 255, 83)
