<template>
  <div class="homesearch">
    <div class="nav bg-dark text-light" style="display:flex; justify-content:space-evenly;">
      <div class="flex justify-content-centre" style="display:flex; justify-content:center; align-items:center; gap:1vw;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
</svg><div class="d">Desktop version requires signup to function properly </div><b-button @click="push2signup">signup</b-button>
      </div>
    </div>
    <div class="homewrapper" style="margin: 3vw">
      <div class="home_nav">
        <div class="logoholder" style="background-color: transparent">
          <img
            src="../assets/shortlogo.png"
            style="height: 10vh; margin-right: 1rem"
          />
        </div>
        <div class="search_home">
          <input
            type="text"
            class="search_home"
            style="text-transform: uppercase"
            placeholder="Enter Ticker (eg., MSFT )"
            @keyup.enter="handleClick(message.toUpperCase())"
            v-model="message"
          />
        </div>
        <div class="search_icon" @click="handleClick(message.toUpperCase())"> <div >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></div></div>
      </div>
      <div class="middlebox" style="display: flex; margin-top: 2rem">
        
        <div class="popular" style="height: 30vw; width: 20vw">
          <div class="tagy">greenlines.club</div>
          
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
          
        <div class="trending" style="height: 30vw; width: 20vw">
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
      <div class="f">
        <div style="color: lime; font-size: x-large">www.greenlines.club</div>
        <div style="color: white; font-weight: 700; font-size: xx-large">
          Valuation Suite
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


  data(){
    return{

      clickedsignup: false,

    }
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

    push2signup(){
      this.$router.push("/signup");
      this.clickedsignup = true;
  
    

    }
,


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
  background: linear-gradient(180deg, #000000 50.01%, #001303 86.37%);
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

.search_icon{
  padding-left: 2rem ;
  justify-items: center;
  align-items: center;
  display: flex;
  color: white;
  height: 7vh;
  border-radius: 0px 7px 0px 0px;
  width: 6vw;
  background: linear-gradient(
    147.36deg,
    rgba(255, 255, 255, 0.49) -6.58%,
    rgba(196, 196, 196, 0.39) 100%
  );

}


.trending {
  margin: 0rem;
  align-items: flex-start;
  justify-items: flex-start;
  display: flex;
  flex-direction: column;
}

.f {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
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
  border-radius: 0px 0px 0px 7px;
  width: 36vw;
  background: linear-gradient(
    147.36deg,
    rgba(255, 255, 255, 0.49) -6.58%,
    rgba(196, 196, 196, 0.39) 100%
  );
}


.search_home:hover {
  height: 7vh;
  box-shadow: #04c700;
  border-radius: 0px 0px 0px 7px;
  width: 36vw;
  background: linear-gradient(
    147.36deg,
    rgba(255, 255, 255, 0.49) -6.58%,
    rgba(196, 196, 196, 0.39) 100%
  );
}


.tagy{
  display: none;
}

@media screen and (max-width: 728px) {
  .trending {
    width: 100vw;
    display: none;
  }


  
.search_icon{
  
  justify-items: center;
  align-items: center;
  display: flex;
  padding-left: 1rem ;
  color: white;
  height: 7vh;
  border-radius: 0px 7px 0px 0px;
  width: 15vw;
  background: linear-gradient(
    147.36deg,
    rgba(255, 255, 255, 0.49) -6.58%,
    rgba(196, 196, 196, 0.39) 100%
  );

}

  .search_home {
    width: 65vw;
  }

  .search_home:hover {
    width: 65vw;
  }
  .f{
    display: none;
    position: absolute;
    bottom: 0;
    padding-bottom: 2.1rem;
  }


  .tagy{
    display: block;
    color: white;
    font-family: "poppins";
   
  }



}
</style>
