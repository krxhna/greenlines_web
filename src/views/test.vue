<template>
<div class="homesearch">
  <div class="homewrapper" style="margin:3vw">
<div class="home_nav" >

   <div class="logoholder" style="background-color: transparent;">
      <img src="../assets/shortlogo.png" style="height: 10vh; margin-right: 1rem;"/>
   </div>
      <div class="search_home">
       
        
      </div>



  </div>


  <div class="popular" style="height: 30vw; width: 20vw;">

    <div class="boxheading">popular</div>
    <div class="hometicker">$MSFT</div>
    <div class="hometicker">$BABA</div>
    <div class="hometicker">$AAPL</div>
    <div class="hometicker">$AMD</div>
  </div>v
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

.homesearch{
  display: flex;
  flex-direction: column;
  background-color: #000000;
  height: 100vh;
  background: linear-gradient(180deg, #000000 50.01%, #0C5718 86.37%);
}

.home_nav{
 
  align-items: center;
  justify-items: center;
  margin-bottom: 1rem;
 
    display: flex;
  flex-direction: row;

}


.popular{
  align-items: flex-start;
  justify-items: flex-start;
  display: flex;
  flex-direction: column;
}

.hometicker{
  font-family: 'poppins';
  font-size: 2.5rem;
font-style: normal;
color: #FFFFFF;
font-weight: 700;
}




.search_home{
 height: 7vh;
 border-radius: 0px 7px;
 width: 50vh;
background: linear-gradient(147.36deg, rgba(255, 255, 255, 0.49) -6.58%, rgba(196, 196, 196, 0.39) 100%);
}

</style>
