import VueTradingView from "vue-trading-view/src/vue-trading-view";

export default {
  components: {
    VueTradingView,
  },

  data() {
    return {

      selected: "",
      width: screen.height,
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