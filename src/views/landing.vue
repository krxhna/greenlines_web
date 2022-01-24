<template>
  <div class="home">
    <nav class="nav12">
      <!-- <i class="fas fa-slash" style="color:black;"></i> -->
      <span class="navbar-brand mb-0 h1" style="color: black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="30"
          fill="green"
          class="bi bi-slash"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"
          /></svg
        >greenlines</span
      >

      <button
        @click="$router.push('signin')"
        class="btn btn-primary"
        type="submit"
        style="background-color: #14e20d; border: none"
      >
        LOGIN
      </button>
    </nav>

    <div class="middle">
      <div class="title">
        <div class="first">
        <div class="slogan">
          Do
          <a>Worldclass</a>

          <div class="grad1"> Valuation. </div>
        </div>
        
        <div class="vid">
          <!-- <iframe class="yt-player" id="ytplayer-948c2c" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/DyDfgMOUjCI?autoplay=1&amp;cc_load_policy=0&amp;controls=0&amp;disablekb=1&amp;enablejsapi=1&amp;fs=1&amp;iv_load_policy=3&amp;modestbranding=1&amp;origin=https%3A%2F%2Fbillie.withyoutube.com&amp;playsinline=1&amp;rel=1&amp;wmode=opaque&amp;widgetid=1"></iframe> -->
          <iframe class="player" width="672" height="378" src="https://www.youtube.com/embed/8X1e4PnLyR8?rel=0&amp;autoplay=1&mute=1&controls=0&loop=1&modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
</div>
        <form
          style="
            color: black;
            background-color: white;
            display: grid;
            justify-content: start;
            align-content: start;
          "
        >
          <div class="form-group">
            <div class="forminputgroup">
              <input
                v-model="email"
                style="font-family: poppins; font-size: 20px; font-weight: 700"
                class="form-control1"
                id="exampleInputPassword1"
                placeholder=" enter your email adress"
              />
            </div>
            <a style="color: white">.</a>

            <button
              @click="writeandnavigated"
              type="submit"
              class="btn-grad"
              style="background-color: green; border: none font-family:poppins; font-size:15px; font-weight:700; flex-direction: row; align-items:center;
  display: flex; "
            >
              Get Started!
            </button>
          </div>

          <div class="rated">
            <a style="padding-top: 10px; aligh-text: start">
              <span class="rating-star"> </span>
              <span class="rating-star"> </span>
              <span class="rating-star"> </span>
              <span class="rating-star"> </span>
              <span class="rating-star"> </span>
              <a style="color: gray; margin-left: 3px"
                >Trusted by 1,700+ investors</a
              >
            </a>
          </div>
        </form>
      </div>
    </div>

    <div class="joinother">
      join 1.7k+ highly productive investors from 54 countries
      <!-- <a>top contries </a> -->
    </div>

    <div class="featurecards">
      <div class="quickline1">
        <div class="textthing">
          <div class="infotext">All useful links in just</div>
          <div class="infotext">One click</div>
          <a style="font-weight: 500"
            >Enter the ticker get all the infomration plus links in just one
            click, sec fliings, quaterly statements,insider buying twitter
            sentiment and much more</a
          >
          <div class="empty" style="color:white;">.</div>
          <button
            @click="$router.push('signup')"
            type="submit"
            class="btn-grad"
            style="background-color: green; border: none font-family:poppins; font-size:15px; font-weight:700; flex-direction: row; align-items:center;
  display: flex; "
          >
            <a>Get Started</a>
            <div class="gap"></div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>

        <div class="videobox">
          <img
            style="Scale Mode: Fit; border-radius: 5px; "
            src="../assets/ss3.png"
          />
        </div>
      </div>
      <div class="quickline">
        <div class="textthing">
          <div class="infotext">90+ Industry analysis in just One click  </div>
          <a style="font-weight: 500"
            >
            select from more than 90+ industry analysed just for you, get industry averages of a industry, all the data point you ever want for worldclass valuation presented to you
            </a
          >
          <div class="empty"  style="color:white;">.</div>
          <button
            @click="$router.push('signup')"
            type="submit"
            class="btn-grad"
            style="background-color: green; border: none font-family:poppins; font-size:15px; font-weight:700; flex-direction: row; align-items:center;
  display: flex; "
          >
            Get Started
            <div class="gap"></div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>

        <div class="imgbox">
          <img
            style="Scale Mode: Fit; border-radius: 10px;  "
            src="../assets/ss4.png"
          />
        </div>
      </div>
      <div class="quickline">
        <div class="textthing">
          <div class="infotext">Get 23 datapoints for every industry</div>
          <a style="font-weight: 500"
            >get vital infomration as average groeth reate of the industry,effective tax rate, return on investment, return on capital,capital expenditures, working capital ratios and much more</a
          >
          <div class="empty"  style="color:white;">.</div>
          <button
            @click="$router.push('signup')"
            type="submit"
            class="btn-grad"
            style="background-color: green; border: none font-family:poppins; font-size:15px; font-weight:700; flex-direction: row; align-items:center;
  display: flex; "
          >
            Get Started
            <div class="gap"></div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
        <div class="imgbox">
          <img
            style="Scale Mode: Fit; border-radius: 5px; w"
            src="../assets/screenshot1.png"
          />
        </div>
        <!-- <div class="videobox">
         
        </div> -->
      </div>
 <div class="quickline3">
        <div class="textthing">
          <div class="infotext">Macro-econimic data for smart decisions</div>
          <a style="font-weight: 500"
            >
            see whats going on in a macro level, make smart investment decisions,all in one place, yield curve, unemploymnet, inflation data, comsumer sentiment and much more</a
          >
          <div class="empty"  style="color:white;">.</div>
          <button
            @click="$router.push('signup')"
            type="submit"
            class="btn-grad"
            style="background-color: green; border: none font-family:poppins; font-size:15px; font-weight:700; flex-direction: row; align-items:center;
  display: flex; "
          >
            Get Started
            <div class="gap"></div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
        <div class="imgbox3">
          <img
          
            style="Scale Mode:scale-down; border-radius: 5px; w"
            src="../assets/ssmacro.png"
          />
        </div>
        <!-- <div class="videobox">
         
        </div> -->
      </div>
      <div class="tesit">
        <h1>what people are saying</h1>

        <div class="quotes">" Rock solid! "</div>

        <!-- <div class="names">william</div> -->

        <div class="quotes">" nifty implementation, I like it so much "</div>
<div class="quotes">"smooth! works like magic"</div>
        <div class="quotes">"Impressive!"</div>
        <div class="quotes">"saved me so much time"</div>
        

        <button @click="$router.push('signup')" type="submit" class="btn-grad">
          Get Started
          <div class="gap"></div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { db } from "../firebase";

// import firebase from "firebase/compat/app";
export default {
  name: "Home",
  components: {},

  data() {
    return {
      email: "",
    };
  },
  methods: {
    writeemail: function () {
      //write data to firebase
      db.collection("emails")
        .doc(this.email)
        .set({
          email: this.email,
        })
        .then(function () {
          console.log("Document successfully written!");
        });
    },

    writeandnavigated: function () {
      
      if (this.email.length > 0) {
        this.writeemail();}
        else{
          console.log("no email");
        }
      
       this.$router.push("signup");
     

      // if (this.email.length > 0) {
      //   this.writeemail();
      //   this.$router.push("signup");
      // } else {
      //   alert("please enter an email");
      //   this.$router.push("/land");
      // }
    },
  },
};
</script>

<style>
@import url("../style/landing.css");
</style>
