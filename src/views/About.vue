<template>
  <div class="login">
    <nav class="navbar navbar-dark bg-dark" style="height: 7vh">
      <li>
        <h1 v-if="user == null">
          <b-button @click="googlesigin">Login</b-button>
        </h1>
        
        <h1 v-else>
          <b-button @click="logout">logout</b-button>
        </h1>
      </li>
      <!-- Navbar content -->
    </nav>
    {{ user }}

    <br />
    <div class="log"></div>

    <h1 v-if="user == null">
      <select v-model="selected">
        <option disabled value="">login to get datas</option>
      </select>
    </h1>
    <h1 v-else>
      <select v-model="selected">
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

      <h1>Industry Name : {{ return_items(selected, "Industry Name") }}</h1>
      <h1>Number of firms : {{ return_items(selected, "Number of firms") }}</h1>
      <h1>
        Annual Average Revenue growth - Last 5 years :
        {{
          return_items(selected, "Annual Average Revenue growth - Last 5 years")
        }}
      </h1>
      <h1>
        Pre-tax Operating Margin (Unadjusted) :
        {{ return_items(selected, "Pre-tax Operating Margin (Unadjusted)") }}
      </h1>
      <h1>After-tax ROC : {{ return_items(selected, "After-tax ROC") }}</h1>
      <h1>
        Average effective tax rate :
        {{ return_items(selected, "Average effective tax rate") }}
      </h1>
      <h1>Unlevered Beta : {{ return_items(selected, "Unlevered Beta") }}</h1>
      <h1>
        Equity (Levered) Beta :
        {{ return_items(selected, "Equity (Levered) Beta") }}
      </h1>
      <h1>Cost of equity : {{ return_items(selected, "Cost of equity") }}</h1>
      <h1>
        Std deviation in stock prices :
        {{ return_items(selected, "Std deviation in stock prices") }}
      </h1>
      <h1>
        Pre-tax cost of debt :
        {{ return_items(selected, "Pre-tax cost of debt") }}
      </h1>
      <h1>
        Market Debt/Capital :
        {{ return_items(selected, "Market Debt/Capital") }}
      </h1>
      <h1>Cost of capital : {{ return_items(selected, "Cost of capital") }}</h1>
      <h1>Sales/Capital : {{ return_items(selected, "Sales/Capital") }}</h1>
      <h1>EV/Sales : {{ return_items(selected, "EV/Sales") }}</h1>
      <h1>EV/EBITDA : {{ return_items(selected, "EV/EBITDA") }}</h1>
      <h1>EV/EBIT : {{ return_items(selected, "EV/EBIT") }}</h1>
      <h1>Price/Book : {{ return_items(selected, "Price/Book") }}</h1>
      <h1>Trailing PE : {{ return_items(selected, "Trailing PE") }}</h1>
      <h1>
        Non-cash WC as % of Revenues :
        {{ return_items(selected, "Non-cash WC as % of Revenues") }}
      </h1>
      <h1>
        Cap Ex as % of Revenues :
        {{ return_items(selected, "Cap Ex as % of Revenues") }}
      </h1>
      <h1>
        Net Cap Ex as % of Revenues :
        {{ return_items(selected, "Net Cap Ex as % of Revenues") }}
      </h1>
      <h1>
        Reinvestment Rate : {{ return_items(selected, "Reinvestment Rate") }}
      </h1>
      <h1>ROE : {{ return_items(selected, "ROE") }}</h1>
      <h1>
        Dividend Payout Ratio :
        {{ return_items(selected, "Dividend Payout Ratio") }}
      </h1>
      <h1>
        Equity Reinvestment Rate :
        {{ return_items(selected, "Equity Reinvestment Rate") }}
      </h1>
      <h1>
        Pre-tax Operating Margin (Lease & R&D adjusted) :
        {{
          return_items(
            selected,
            "Pre-tax Operating Margin (Lease & R&D adjusted)"
          )
        }}
      </h1>
    </h1>
  </div>
</template>

<script>
var nan = "NAN";
import firebase from "firebase/compat/app";

export default {
  data() {
    return {
      user: null,
      error: null,
      awesome: "ds",
      selected: "0",

      items: [
        {
          "Industry Name": "Advertising",
          "Number of firms": 61,
          "Annual Average Revenue growth - Last 5 years": "8.31%",
          "Pre-tax Operating Margin (Unadjusted)": "9.98%",
          "After-tax ROC": "51.51%",
          "Average effective tax rate": "21.47%",
          "Unlevered Beta": 0.77,
          "Equity (Levered) Beta": 1.08,
          "Cost of equity": "6.01%",
          "Std deviation in stock prices": "57.74%",
          "Pre-tax cost of debt": "3.00%",
          "Market Debt/Capital": "43.66%",
          "Cost of capital": "4.34%",
          "Sales/Capital": 5.17,
          "EV/Sales": 1.83,
          "EV/EBITDA": 8.86,
          "EV/EBIT": 16.08,
          "Price/Book": 5.73,
          "Trailing PE": 45.38,
          "Non-cash WC as % of Revenues": "-0.57%",
          "Cap Ex as % of Revenues": "1.75%",
          "Net Cap Ex as % of Revenues": "-1.91%",
          "Reinvestment Rate": "-31.67%",
          ROE: "2.93%",
          "Dividend Payout Ratio": "912.85%",
          "Equity Reinvestment Rate": "912.85%",
          "Pre-tax Operating Margin (Lease & R&D adjusted)": "10.31%",
        },
        {
          "Industry Name": "Aerospace/Defense",
          "Number of firms": 72,
          "Annual Average Revenue growth - Last 5 years": "5.28%",
          "Pre-tax Operating Margin (Unadjusted)": "7.56%",
          "After-tax ROC": "19.11%",
          "Average effective tax rate": "24.62%",
          "Unlevered Beta": 0.91,
          "Equity (Levered) Beta": 1.07,
          "Cost of equity": "5.96%",
          "Std deviation in stock prices": "34.89%",
          "Pre-tax cost of debt": "2.58%",
          "Market Debt/Capital": "24.84%",
          "Cost of capital": "4.95%",
          "Sales/Capital": 2.61,
          "EV/Sales": 2.01,
          "EV/EBITDA": 12.15,
          "EV/EBIT": 20.31,
          "Price/Book": 4.44,
          "Trailing PE": 107.38,
          "Non-cash WC as % of Revenues": "43.56%",
          "Cap Ex as % of Revenues": "2.77%",
          "Net Cap Ex as % of Revenues": "-1.33%",
          "Reinvestment Rate": "36.93%",
          ROE: "8.54%",
          "Dividend Payout Ratio": "120.55%",
          "Equity Reinvestment Rate": "120.55%",
          "Pre-tax Operating Margin (Lease & R&D adjusted)": "7.89%",
        },
        {
          "Industry Name": "Air Transport",
          "Number of firms": 17,
          "Annual Average Revenue growth - Last 5 years": "-6.82%",
          "Pre-tax Operating Margin (Unadjusted)": "-18.99%",
          "After-tax ROC": "-16.07%",
          "Average effective tax rate": "88.76%",
          "Unlevered Beta": 0.92,
          "Equity (Levered) Beta": 1.61,
          "Cost of equity": "8.52%",
          "Std deviation in stock prices": "46.15%",
          "Pre-tax cost of debt": "3.00%",
          "Market Debt/Capital": "61.74%",
          "Cost of capital": "4.61%",
          "Sales/Capital": 0.88,
          "EV/Sales": 1.97,
          "EV/EBITDA": 34.43,
          "EV/EBIT": nan,
          "Price/Book": 3.22,
          "Trailing PE": 13.47,
          "Non-cash WC as % of Revenues": "1.70%",
          "Cap Ex as % of Revenues": "11.83%",
          "Net Cap Ex as % of Revenues": "1.80%",
          "Reinvestment Rate": nan,
          ROE: "-47.03%",
          "Dividend Payout Ratio": "0.09%",
          "Equity Reinvestment Rate": "0.09%",
          "Pre-tax Operating Margin (Lease & R&D adjusted)": "-19.35%",
        },
        {
          "Industry Name": "Apparel",
          "Number of firms": 51,
          "Annual Average Revenue growth - Last 5 years": "-3.56%",
          "Pre-tax Operating Margin (Unadjusted)": "5.49%",
          "After-tax ROC": "7.54%",
          "Average effective tax rate": "31.41%",
          "Unlevered Beta": 0.94,
          "Equity (Levered) Beta": 1.1,
          "Cost of equity": "6.11%",
          "Std deviation in stock prices": "47.84%",
          "Pre-tax cost of debt": "3.00%",
          "Market Debt/Capital": "28.26%",
          "Cost of capital": "5.00%",
          "Sales/Capital": 1.34,
          "EV/Sales": 2.03,
          "EV/EBITDA": 14.69,
          "EV/EBIT": 33.98,
          "Price/Book": 4.11,
          "Trailing PE": 22.76,
          "Non-cash WC as % of Revenues": "24.96%",
          "Cap Ex as % of Revenues": "2.52%",
          "Net Cap Ex as % of Revenues": "0.16%",
          "Reinvestment Rate": "-146.72%",
          ROE: "-8.19%",
          "Dividend Payout Ratio": "0.32%",
          "Equity Reinvestment Rate": "0.32%",
          "Pre-tax Operating Margin (Lease & R&D adjusted)": "5.91%",
        },
        {
          "Industry Name": "Auto & Truck",
          "Number of firms": 19,
          "Annual Average Revenue growth - Last 5 years": "12.19%",
          "Pre-tax Operating Margin (Unadjusted)": "1.93%",
          "After-tax ROC": "1.17%",
          "Average effective tax rate": "28.48%",
          "Unlevered Beta": 1.05,
          "Equity (Levered) Beta": 1.28,
          "Cost of equity": "6.98%",
          "Std deviation in stock prices": "45.24%",
          "Pre-tax cost of debt": "3.00%",
          "Market Debt/Capital": "27.88%",
          "Cost of capital": "5.65%",
          "Sales/Capital": 0.74,
          "EV/Sales": 3.58,
          "EV/EBITDA": 45.73,
          "EV/EBIT": 177.76,
          "Price/Book": 7.58,
          "Trailing PE": 261.56,
          "Non-cash WC as % of Revenues": "-6.94%",
          "Cap Ex as % of Revenues": "10.24%",
          "Net Cap Ex as % of Revenues": "4.61%",
          "Reinvestment Rate": "184.40%",
          ROE: "4.49%",
          "Dividend Payout Ratio": "64.58%",
          "Equity Reinvestment Rate": "64.58%",
          "Pre-tax Operating Margin (Lease & R&D adjusted)": "1.73%",
        },
        {
          "Industry Name": "Auto Parts",
          "Number of firms": 52,
          "Annual Average Revenue growth - Last 5 years": "4.02%",
          "Pre-tax Operating Margin (Unadjusted)": "4.01%",
          "After-tax ROC": "6.46%",
          "Average effective tax rate": "32.65%",
          "Unlevered Beta": 1.09,
          "Equity (Levered) Beta": 1.2,
          "Cost of equity": "6.61%",
          "Std deviation in stock prices": "43.16%",
          "Pre-tax cost of debt": "3.00%",
          "Market Debt/Capital": "19.60%",
          "Cost of capital": "5.74%",
          "Sales/Capital": 1.82,
          "EV/Sales": 1.6,
          "EV/EBITDA": 10.07,
          "EV/EBIT": 23.28,
          "Price/Book": 4.78,
          "Trailing PE": 55.56,
          "Non-cash WC as % of Revenues": "13.84%",
          "Cap Ex as % of Revenues": "3.71%",
          "Net Cap Ex as % of Revenues": "2.09%",
          "Reinvestment Rate": "30.07%",
          ROE: "-14.31%",
          "Dividend Payout Ratio": "0.42%",
          "Equity Reinvestment Rate": "0.42%",
          "Pre-tax Operating Margin (Lease & R&D adjusted)": "3.85%",
        },
        {
          "Industry Name": "Bank (Money Center)",
          "Number of firms": 7,
          "Annual Average Revenue growth - Last 5 years": "-0.78%",
          "Pre-tax Operating Margin (Unadjusted)": "0.00%",
          "After-tax ROC": "-0.01%",
          "Average effective tax rate": "14.04%",
          "Unlevered Beta": 0.6,
          "Equity (Levered) Beta": 0.83,
          "Cost of equity": "4.84%",
          "Std deviation in stock prices": "21.59%",
          "Pre-tax cost of debt": "1.92%",
          "Market Debt/Capital": "68.37%",
          "Cost of capital": "2.49%",
          "Sales/Capital": 0.14,
          "EV/Sales": 5.32,
          "EV/EBITDA": nan,
          "EV/EBIT": nan,
          "Price/Book": 1.0,
          "Trailing PE": 14.86,
          "Non-cash WC as % of Revenues": nan,
          "Cap Ex as % of Revenues": "1.06%",
          "Net Cap Ex as % of Revenues": "1.06%",
          "Reinvestment Rate": nan,
          ROE: "7.41%",
          "Dividend Payout Ratio": "46.95%",
          "Equity Reinvestment Rate": "46.95%",
          "Pre-tax Operating Margin (Lease & R&D adjusted)": "-0.11%",
        },
        {
          "Industry Name": "Banks (Regional)",
          "Number of firms": 598,
          "Annual Average Revenue growth - Last 5 years": "8.82%",
          "Pre-tax Operating Margin (Unadjusted)": "0.00%",
          "After-tax ROC": "-0.08%",
          "Average effective tax rate": "18.95%",
          "Unlevered Beta": 0.6,
          "Equity (Levered) Beta": 0.64,
          "Cost of equity": "3.97%",
          "Std deviation in stock prices": "19.48%",
          "Pre-tax cost of debt": "1.92%",
          "Market Debt/Capital": "37.98%",
          "Cost of capital": "3.00%",
          "Sales/Capital": 0.24,
          "EV/Sales": 4.47,
          "EV/EBITDA": nan,
          "EV/EBIT": nan,
          "Price/Book": 1.08,
          "Trailing PE": 15.39,
          "Non-cash WC as % of Revenues": nan,
          "Cap Ex as % of Revenues": "4.37%",
          "Net Cap Ex as % of Revenues": "2.01%",
          "Reinvestment Rate": nan,
          ROE: "8.22%",
          "Dividend Payout Ratio": "44.35%",
          "Equity Reinvestment Rate": "44.35%",
          "Pre-tax Operating Margin (Lease & R&D adjusted)": "-0.41%",
        },
        {
          "Industry Name": "Beverage (Alcoholic)",
          "Number of firms": 23,
          "Annual Average Revenue growth - Last 5 years": "14.39%",
          "Pre-tax Operating Margin (Unadjusted)": "23.87%",
          "After-tax ROC": "14.43%",
          "Average effective tax rate": "18.36%",
          "Unlevered Beta": 0.68,
          "Equity (Levered) Beta": 0.78,
          "Cost of equity": "4.60%",
          "Std deviation in stock prices": "37.01%",
          "Pre-tax cost of debt": "2.58%",
          "Market Debt/Capital": "18.97%",
          "Cost of capital": "4.09%",
          "Sales/Capital": 0.64,
          "EV/Sales": 5.3,
          "EV/EBITDA": 17.61,
          "EV/EBIT": 22.21,
          "Price/Book": 3.45,
          "Trailing PE": 32.39,
          "Non-cash WC as % of Revenues": "15.25%",
          "Cap Ex as % of Revenues": "6.38%",
          "Net Cap Ex as % of Revenues": "4.49%",
          "Reinvestment Rate": "24.11%",
          ROE: "10.10%",
          "Dividend Payout Ratio": "41.58%",
          "Equity Reinvestment Rate": "41.58%",
          "Pre-tax Operating Margin (Lease & R&D adjusted)": "23.84%",
        },
        {
          "Industry Name": "Beverage (Soft)",
          "Number of firms": 41,
          "Annual Average Revenue growth - Last 5 years": "27.08%",
          "Pre-tax Operating Margin (Unadjusted)": "19.98%",
          "After-tax ROC": "26.74%",
          "Average effective tax rate": "18.60%",
          "Unlevered Beta": 0.71,
          "Equity (Levered) Beta": 0.79,
          "Cost of equity": "4.66%",
          "Std deviation in stock prices": "49.70%",
          "Pre-tax cost of debt": "3.00%",
          "Market Debt/Capital": "17.76%",
          "Cost of capital": "4.22%",
          "Sales/Capital": 1.37,
          "EV/Sales": 5.08,
          "EV/EBITDA": 20.74,
          "EV/EBIT": 25.22,
          "Price/Book": 8.5,
          "Trailing PE": 116.72,
          "Non-cash WC as % of Revenues": "-9.54%",
          "Cap Ex as % of Revenues": "5.42%",
          "Net Cap Ex as % of Revenues": "7.41%",
          "Reinvestment Rate": "37.01%",
          ROE: "28.86%",
          "Dividend Payout Ratio": "74.19%",
          "Equity Reinvestment Rate": "74.19%",
          "Pre-tax Operating Margin (Lease & R&D adjusted)": "20.11%",
        },
      ],
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
::-webkit-scrollbar {
  width: 0.5vh;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(107, 107, 107);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 255, 76);
}
.log {
  color: brown;
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
