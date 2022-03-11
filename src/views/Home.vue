<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <div class="grid">
      <div class="logo1">
        <img
          src="../assets/dotclub1.png"
          alt="logo"
          style="width: 35vw; height: auto; padding-top: vh"
        />
        <div class="phrase">
          30 minute valuation work takes 30 seconds with greenlines
        </div>
      </div>

      <!-- <h1 style="font-family: poppins; font-weight:700; color:black;" >Greenlines.club</h1> -->

      <div class="search">
        <div class="searchbox_home">
          <input
            type="text"
            class="search-bar"
            style="text-transform: uppercase"
            placeholder="Enter Ticker (eg., MSFT )"
            @keyup.enter="handleClick(message.toUpperCase())"
            v-model="message"
          />
        </div>
      </div>

      <div class="buttondiv">
        <button class="button" @click="handleClick(message.toUpperCase())">
          GO
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },

  methods: {


    new() {
      this.$router.push("/new");
    },

    handleClick(ticker) {
      if (this.isMobile()) {
        this.$router.push({
          path: "go/" + ticker,
        }),
          this.clicked();
      } else {
        this.$router.push({
          path: "dashboard/" + ticker,
        }),
          this.clicked();
      }
    },


      the_go: function (ticker) {
      this.ticker_list.push(ticker);
      this.collect_tickers(ticker);
      this.popup = false;
      this.international = false;
      // this.$router.push({
      //   path: "/dashboard/" + ticker,
      // });

      // this.$forceUpdate();
      // location.reload();
      // this.$router.go(this.$router.currentRoute);
    },
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
    login() {
      this.$gtag.event("login", { method: "Google" });
    },
    clicked() {
      this.$gtag.event("clicked search", { method: "Google" });
    },
    clickedback() {
      this.$gtag.event("clicked back", { method: "Google" });
    },
  },

  //  mounted() {
  //     window.addEventListener("keypress", function(enter) {
  //       console.log(String.fromCharCode(enter.keyCode));
  //       alert(String.fromCharCode(enter.keyCode));
  //       // handleClick(message.toUpperCase());
  //     }.bind(this));
  //   }
};
</script>

<style scoped>
:root {
  --primary-color: #ffc107;
  --secondary-color: #ffc107;
}

.searchbox_home .search-bar {
  /* margin-top: 15%; */
  display: block;
  width: 70vw;

  padding: 15px;
  border-radius: 10px 0px 10px 0px;
  border: 0px solid rgb(0, 228, 19);
  box-shadow: 0px 0px 10px 0px rgb(83, 255, 83);
  /* box-shadow: 0px 0px 10px 0px rgba(143, 143, 143, 0.2); */

  font-size: 20px;
}

.h5 {
  color: aqua;
}

.phrase {
  font-family: poppins;

  color: black;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.h1 {
  margin-top: 60%;
}

.searchbox_home .search-bar:focus {
  display: block;

  padding: 15px;
  border-radius: 10px;
  border: 1px solid rgb(0, 255, 85);
  outline: none;
  border-radius: 0px 10px 0px 10px;
  box-shadow: 0px 0px 20px 0px rgb(83, 255, 83);

  font-size: 20px;
}

.grid {
  /* margin-top: 30px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  /* display: grid;
    grid-template-areas: 
        "header1 header header2"
        "left   middle right"
        "footer footer footer";
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr 2fr 1fr; */
  /* grid-template-rows: 4fr 1fr 1fr; */
}

.logo1 {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.button {
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-radius: 0px 5px 0px 5px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 1px solid transparent;
  letter-spacing: 2px;
  min-width: 160px;
  text-transform: uppercase;
  white-space: normal;
  font-weight: 700;
  text-align: center;
  padding: 17px 48px;
  color: black;
  background-color: rgb(0, 255, 0);
  height: 48px;
  /* position: absolute; */
  /* top: 50%;
                    left: 50%; */
  /* transform: translate(-50%, -50%); */
  /* :hover{
                        transform: scale(1.04);
                        background-color: #21e065;
                    } */
}

@media screen and (max-width: 728px) {
  .searchbox .search-bar {
    width: 85vw;
  }

  .logo1 {
    margin-top: 10%;
  }
}
</style>
