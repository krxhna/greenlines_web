<template>
  <div class="homesearch">
    <div class="homewrapper" style="margin: 3vw">
      <div class="home_nav">
        <div class="logoholder" style="background-color: transparent">
          <img
            src="../assets/shortlogo.png"
            style="height: 10vh; margin-right: 1rem"
          />
        </div>
        <div class="search_home"></div>
      </div>
      <div class="middlebox" style="display: flex; margin-top: 2rem">
        <div class="popular" style="height: 30vw; width: 20vw">
          <div class="boxheading">Popular</div>
          <div class="hometicker" @click="handleClick('MSFT')">
            $MSFT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="1.7rem"
              fill="#04c700"
              class="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
              />
            </svg>
          </div>
           <div class="hometicker" @click="handleClick('AAPL')">
            $AAPL
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="1.7rem"
              fill="#04c700"
              class="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
              />
            </svg>
          </div>
           <div class="hometicker" @click="handleClick('BABA')">
            $BABA
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="1.7rem"
              fill="#04c700"
              class="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
              />
            </svg>
          </div>
           <div class="hometicker" @click="handleClick('AMD')">
            $AMD
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="1.7rem"
              fill="#04c700"
              class="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
              />
            </svg>
          </div>
       
        </div>

        <div class="popular" style="height: 30vw; width: 20vw">
          <div class="boxheading">Trending</div>
            <div class="hometicker" @click="handleClick('aa v')">
            $AA
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="1.7rem"
              fill="#04c700"
              class="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
              />
            </svg>
          </div>
              <div class="hometicker" @click="handleClick('NIO')">
            $NIO
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="1.7rem"
              fill="#04c700"
              class="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
              />
            </svg>
          </div>
              <div class="hometicker" @click="handleClick('SBUX')">
            $SBUX
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="1.7rem"
              fill="#04c700"
              class="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
              />
            </svg>
          </div>
              <div class="hometicker" @click="handleClick('KO')">
            $KO
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="1.7rem"
              fill="#04c700"
              class="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
              />
            </svg>
          </div>
        </div>
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
.homesearch {
  display: flex;
  flex-direction: column;
  background-color: #000000;
  height: 100vh;
  background: linear-gradient(180deg, #000000 50.01%, #0c5718 86.37%);
}

.home_nav {
  align-items: center;
  justify-items: center;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: row;
}

.popular {
  margin: 0rem;
  align-items: flex-start;
  justify-items: flex-start;
  display: flex;
  flex-direction: column;
}

.hometicker {
  cursor: pointer;
  font-family: "poppins";
  font-size: 2rem;
  font-style: normal;
  color: #ffffff;
  font-weight: 700;
}

.boxheading {
  margin-bottom: 1rem;
  font-style: normal;
  font-weight: 400;
  color: #04c700;

  font-family: "poppins";
  font-size: 2.5rem;
}

.search_home {
  height: 7vh;
  border-radius: 0px 7px;
  width: 36vw;
  background: linear-gradient(
    147.36deg,
    rgba(255, 255, 255, 0.49) -6.58%,
    rgba(196, 196, 196, 0.39) 100%
  );
}
</style>
