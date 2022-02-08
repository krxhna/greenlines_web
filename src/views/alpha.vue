<template>
  <div class="alpha">
    
    <div class="navbar_alpha" >
    
      <div class="a" style="padding-left:4vw">Greenlines</div>
      <div class="navc">
      <div class="a">About</div>
      <div class="a" >Contact</div>
      <button
          @click="$router.push('signin')"
          class="a"
          type="submit"
          style="background-color: transparent; color: rgb(255, 255, 255); border: none"
        >
          Login
        </button>
      </div>
    </div>

    <div class="em"></div>
    <div class="middle_alpha">
      <div class="slogan_alpha">
        <div class="alp_text">
          <div class="head_alp">Do Valaution</div>
          <div class="colortext">Faster.</div>
          <div class="textalp">
            your complete valuation workspace do everything from checking sec reports, to
            industry averages to macro data all in one place
          </div>
          <div class="buttonsometh">
            <button class="btn_alp" @click="alpha" >Get Started</button>
          </div>
        </div>
      </div>
    
      <div class="frcard">
            <img
            style="object-fit: Fit; border-radius: 5px "
            src="../assets/card.png"
          />

      </div>

      
    </div>
    
    <div class="cards_alp">
        <!-- home -->
        
      <div class="quickline_alp">
        <div class="textthing">
          <div class="infotext_alp">90+ Industry analysis in just One click</div>
          <a style="font-weight: 500; color:silver" >
            select from more than 90+ industry analysed just for you, get
            industry averages of a industry, all the data point you ever want
            for worldclass valuation presented to you
          </a>
          <div class="empty" style="color: rgb(0, 0, 0)">.</div>
          <button
            @click="alpha"
            type="submit"
            class="btn_alp"
            style="
              background-color: green;
              border: none;
              font-family: poppins;
              font-size: 15px;
              font-weight: 700;
              flex-direction: row;
              align-items: center;
              display: flex;
            "
          >
            Get Aplha Acsess
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
            style="object-fit: Fit; border-radius: 10px; margin-top:10vh;"
            src="../assets/side_home.png"
          />
        </div>
      
      
      
      
      
      
      
      </div>

<!-- industry analysis -->

      <div class="quickline_alp">
        <div class="textthing">
          <div class="infotext_alp">90+ Industry analysis in just One click</div>
          <a style="font-weight: 500; color:silver" >
            select from more than 90+ industry analysed just for you, get
            industry averages of a industry, all the data point you ever want
            for worldclass valuation presented to you
          </a>
          <div class="empty" style="color: rgb(0, 0, 0)">.</div>
          <button
            @click="alpha"
            type="submit"
            class="btn_alp"
            style="
              background-color: green;
              border: none;
              font-family: poppins;
              font-size: 15px;
              font-weight: 700;
              flex-direction: row;
              align-items: center;
              display: flex;
            "
          >
            Get Aplha Acsess
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
            style="object-fit: Fit; border-radius: 10px; margin-top:10vh;"
            src="../assets/side_avg.png"
          />
        </div>
      
      
      
      
      
      
      
      </div>
      <div class="quickline_alp">
        <div class="textthing">
          <div class="infotext_alp">90+ Industry analysis in just One click</div>
          <a style="font-weight: 500; color:silver" >
            select from more than 90+ industry analysed just for you, get
            industry averages of a industry, all the data point you ever want
            for worldclass valuation presented to you
          </a>
          <div class="empty" style="color: rgb(0, 0, 0)">.</div>
          <button
            @click="alpha"
            type="submit"
            class="btn_alp"
            style="
              background-color: green;
              border: none;
              font-family: poppins;
              font-size: 15px;
              font-weight: 700;
              flex-direction: row;
              align-items: center;
              display: flex;
            "
          >
            Get Aplha Acsess
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
            style="object-fit: Fit; border-radius: 10px; margin-top:10vh;"
            src="../assets/side_industries.png"
          />
        </div>
      
      
      
      
      
      
      
      </div>
      <div class="quickline_alp">
        <div class="textthing">
          <div class="infotext_alp">90+ Industry analysis in just One click</div>
          <a style="font-weight: 500; color:silver" >
            select from more than 90+ industry analysed just for you, get
            industry averages of a industry, all the data point you ever want
            for worldclass valuation presented to you
          </a>
          <div class="empty" style="color: rgb(0, 0, 0)">.</div>
          <button
            @click="alpha"
            type="submit"
            class="btn_alp"
            style="
              background-color: green;
              border: none;
              font-family: poppins;
              font-size: 15px;
              font-weight: 700;
              flex-direction: row;
              align-items: center;
              display: flex;
            "
          >
            Get Aplha Acsess
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
            style="object-fit: Fit; border-radius: 10px; margin-top:10vh;"
            src="../assets/side_macro_2.png"
          />
        </div>
      
      
      
      
      
      
      
      </div>

       <div class="tesit">
        <h1>what people are saying</h1>

        <div class="quotes">" Rock solid! "</div>

        <!-- <div class="names">william</div> -->

        <div class="quotes">" nifty implementation, I like it so much "</div>
        <div class="quotes">"smooth! works like magic"</div>
        <div class="quotes">"Impressive!"</div>
        <div class="quotes">"saved me so much time"</div>

        <button @click="alpha" type="submit" class="btn-grad">
          Get Aplha Acsess
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
    <div class="rect_alp"></div>
    <div class="rect_alp2"></div>
    <div class="rect_alp3"></div>
    
  </div>
</template>

<script>
import { db } from "../firebase";
    
export default {



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

    alpha: function () {
      window.open("https://greenliness.gumroad.com/l/qxwozl");
      this.$gtag.event("clicked alpha", { method: "Google" });
    },

    writeandnavigated: function () {
      if (this.email.length > 0) {
        this.writeemail();
      } else {
        console.log("no email");
      }

      this.alpha();

      //  this.$router.push("signup");

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

.body{
  background-color: black;
}

.alpha {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  background-color: black;
  width: 99.75vw;
  height: 500vh;
  text-align: center;
  color: white;
  /* font-size: 7rem;
    font-weight: 900; */
  font-family: poppins;
}

.em {
  height: 10vh;
}

.a{
    padding-top: 1rem;
}

.middle_alpha {
    display: flex;
  margin-left: 10vh;
  width: 80vw;
  height: 60vh;
  background-color: transparent;
}

re

.slogan_alpha {
  background-color: #000000;

  display: flex;
  justify-content: flex-start;
}

.textalp {
  text-align: start;
  width: 40vw;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
}

.buttonsometh {
  display: flex;
  justify-content: flex-start;
  margin-top: 3vh;

  background-color: rgb(0, 0, 0);
  width: 45vw;
  place-content: flex-start;
}

.frcard{
    margin-top: 2rem;
width: 50vw;
height: 80vh;

}

/* .rect_alp {
   
  position: fixed;
  width: 344px;
  height: 273px;
  left: 939px;
  top: 167px;

  background: #12e000;
  filter: blur(150px);
} */
.rect_alp2 {
    
  position: absolute;
  width: 25vw;
  height: 30vh;
  left: 55%;
  top: 37%;

  background: rgba(0, 75, 85, 0.91);
  filter: blur(150px);
}

.cards_alp{
    display: flex;
    flex-direction: column;
    background-color: transparent;
}

.rect_alp3 {
    
  position: absolute;
  width: 15vw;
  height: 20vh;
  left: 0%;
  top: 37%;

  background: rgba(0, 105, 56, 0.91);
  filter: blur(150px);
}


.btn_alp {
  border: none;
  font-size: 1.5rem;
  color: black;
  font-family: Roboto;
  padding: 10px;
  background: #c4c4c4;
  border-radius: 0.1rem;
  margin-top: 10px;
}

.head_alp {
  text-align: start;
  font-size: 5rem;
  font-weight: 900;
  font-family: poppins;
}

.colortext {
    color: #12e000;
  text-align: start;
  font-size: 5rem;
  font-weight: 900;
  font-family: poppins;
}

.navbar_alpha{
    padding: 1rem;
    display: flex;
    justify-content: space-between;
}


.navc{
    width: 30vw;
    display: flex;
    justify-content: space-around;
}

.infotext_alp{
     
    
      font-weight: 400;
      font-family: poppins;
      color: rgb(119, 119, 119);
      font-size: 4rem;

  }


.morethan{
    height: 20vh;
    color: #495248;
}


  .quickline_alp{

    /* display:grid; */
    /* grid-template-columns: repeat(auto-fit, minmax(240px,1fr)); */

    
    
   
    display: flex;
    flex-direction: row;
    color: white;
    margin-left: 3vw;

    /* margin: 3% 10% 0 10%; */

    height: 74vh;
    width: 85vw;
    background-color: rgb(0, 0, 0);
    
  }

    .quickline_alp_1{

    /* display:grid; */
    /* grid-template-columns: repeat(auto-fit, minmax(240px,1fr)); */

    
    
   
    display: flex;
    flex-direction: row;
    color: white;
    margin-left: 3vw;

    /* margin: 3% 10% 0 10%; */

    height: 74vh;
    width: 85vw;
    background-color: rgb(0, 0, 0);
    
  }





  @media screen and (max-width:728px) {

      .alpha{
        padding: 0;
        margin: 0;
          width: 99.9vw;
      }

      .head_alp{
        font-size: 4.5rem;
      }

      .textalp{
          width: 80vw;
        font-size: 1.3rem;
      }

      .a{
          display: flex;
          
          padding-left: 0.5rem;
          font-size: 1rem;
      }
      .navc{
          width: 50vw;
      }

      .colortext{
        font-size: 4.5rem;
      }

      .middle_alpha{
          height: 100vh;
          margin-left: 8vw;
          flex-direction: column;
      }

      .quickline_alp{
        margin-top: 20vh;
          flex-direction: column;

      }

      .infotext_alp{
        font-size: 3rem;
      }

      .frcard{
   
width: 60vw;


}

  }
</style>
