<template>
  <div class="Alpha">
 

  
    <div class="navbar_Alpha">
    
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
      
      <button
          @click="$router.push('signup')"
          class="a"
          type="submit"
          style="background-color: transparent; color: rgb(255, 255, 255); border: none; font-family: poppins;"
        >
          Signup
        </button>
      </div>
    </div>

    <div class="em"></div>
    <div class="middle_Alpha">
      <div class="slogan_Alpha">
        <div class="alp_text">
          <div class="head_alp">Do Valaution</div>
          
          <div class="colortext"><span1></span1></div>
          <div class="textalp" style="font-family: Arial, Helvetica, sans-serif">
            your complete valuation workspace do everything from checking sec reports, to
            industry averages to macro data all in one place
          </div>
          <div class="buttonsometh">
            <button class="btn_alp" style="color:white; font-family: Arial, Helvetica, sans-serif;" @click="Alpha" >Signup for free</button>
          </div>
        </div>
      </div>
    
      <div  class="frcard">
            <img class="cardfg"  v-tilt="{speed: 500, perspective: 1200}" 
            style="object-fit: Fit; border-radius: 5px; "
            src="../assets/card.png"
          />

      </div>

      
    </div>
    <div class="s" style="color: black;">d</div>
    <div class="s" style="color: black;">d</div>
    <div class="s" style="color: black;">d</div>
    <div class="e">It's Free Forever</div>
  
    <div class="e1">No credit card required</div>
    
    <div class="cards_alp">
        <!-- home -->
        
      <div class="quickline_alp1">
        <div class="textthing">
          <div class="infotext_alp">All useful links in just One Click</div>
        
          <a style="font-weight: 500; color:silver" >
           Enter the ticker get all the infomration plus links in just one
            click, sec fliings, quaterly statements,insider buying twitter
            sentiment and much more
          </a>
          <div class="empty" style="color: rgb(0, 0, 0)">.</div>
          <button
            @click="Alpha"
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
            Signup for free
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
          <div class="infotext_alp">Get access to data on over 90+ Industry</div>
          <a style="font-weight: 500; color:silver" >
            select from more than 90+ industry analysed just for you, get
            industry averages of a industry, all the data point you ever want
            for worldclass valuation presented to you
          </a>
          <div class="empty" style="color: rgb(0, 0, 0)">.</div>
          <button
            @click="Alpha"
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
            Signup for free

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
          <div class="infotext_alp">Get 23 datapoints for every industry</div>
          <a style="font-weight: 500; color:silver" >
            get vital infomration as average groeth reate of the
            industry,effective tax rate, return on investment, return on
            capital,capital expenditures, working capital ratios and much
            more
          </a>
          <div class="empty" style="color: rgb(0, 0, 0)">.</div>
          <button
            @click="Alpha"
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
            Signup for free
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
          <div class="infotext_alp">Macro-econimic data for smart decisions</div>
          <a style="font-weight: 500; color:silver" >
            see whats going on in a macro level, make smart investment
            decisions,all in one place, yield curve, unemploymnet, inflation
            data, comsumer sentiment and much more
          </a>
          <div class="empty" style="color: rgb(0, 0, 0)">.</div>
          <button
            @click="Alpha"
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
            Signup for free
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

      
       <div class="tesit_alp">
        <h1></h1>

        <div class="quotes">" Rock solid! "</div>

        <!-- <div class="names">william</div> -->

        <div class="quotes">" nifty implementation,I like it so much "</div>
        <div class="quotes">"smooth! works like magic"</div>
        <div class="quotes">"Impressive!"</div>
        <div class="quotes">"saved me so much time"</div>

        <button @click="Alpha" type="submit" class="btn_alp" style="background-color: green;">
          Signup for free
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
    <div class="rect_alp4"></div>
    <div class="rect_alp5"></div>
    <div class="rect_alp6"></div>
    <div class="rect_alp7"></div>
    <div class="rect_alp8"></div>
    
    
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

    Alpha: function () {
      this.$router.push("/signup");
      // window.open("https://greenliness.gumroad.com/l/qxwozl");
      this.$gtag.event("clicked Alpha", { method: "Google" });
    },

    writeandnavigated: function () {
      if (this.email.length > 0) {
        this.writeemail();
      } else {
        console.log("no email");
      }

      this.Alpha();

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


.tesit_alp{
  margin-top: 1vh;
  /* background-color: #f5f5f5; */
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 1%;
}

.body{
  background-color: black;
}

.Alpha {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  background-color: black;
  width: 99.75vw;
  height: 100%;
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

.middle_Alpha {
    display: flex;
  margin-left: 10vh;
  width: 80vw;
  height: 60vh;
  background-color: transparent;
}

re

.slogan_Alpha {
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

.rect_alp4 {
    
  position: absolute;
  width: 25vw;
  height: 30vh;
  left: 55%;
  top: 7%;

  background: rgba(85, 0, 35, 0.91);
  filter: blur(150px);
}


.rect_alp5{
    
  position: absolute;
  width: 15vw;
  height: 20vh;
  right: 1%;
  top: 207%;

  background: rgba(0, 60, 100, 0.91);
  filter: blur(170px);
}

.rect_alp6{
    
  position: absolute;
  width: 25vw;
  height: 20vh;
  left: 1%;
  top: 284%;

  background: rgba(0, 78, 30, 0.91);
  filter: blur(170px);
}



.rect_alp7{
    
  position: absolute;
  width: 25vw;
  height: 20vh;
  right: 1%;
  top: 450%;

  background: rgba(0, 60, 100, 0.91);
  filter: blur(170px);
}

.rect_alp8{
    
  position: absolute;
  width: 25vw;
  height: 20vh;
  left: 1%;
  top: 390%;

  background: rgba(0, 78, 30, 0.91);
  filter: blur(170px);
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
  border-radius: 30px;
  
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 1.5rem;
  color: rgb(0, 0, 0);
  font-family: Roboto;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.1rem;
  margin-top: 10px;
}

/* .btn_alp:hover {
  border-radius: 30px;
  
  box-shadow: 0 4px 30px rgba(255, 255, 255, 0.4);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 0px solid rgba(255, 255, 255, 0.3);
  font-size: 1.5rem;
  color: rgb(0, 0, 0);
  font-family: Roboto;
  padding: 10px;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.1rem;
  margin-top: 10px;
} */


  




.e{
  padding: 2px;

  color:silver;
        font-size: 1.3rem;
      }

      .e1{
  padding-bottom: 2vh;

  color:silver;
        font-size: 1rem;
      }

.head_alp {
  text-align: start;
  font-size: 5rem;
  font-weight: 500;
  font-family: poppins;
}

span1:before{
  animation: animate 3s linear infinite;
 content: "";
}

@keyframes animate {
  50% {
    content: 'Better.';
  }
  100% {
    content: 'Faster.';
  }
  
  0% {
    content: 'Smarter.';
  
  }
}

.modal_1{
  color: white;
  background-color: green;
  width: 100vw;
  position: absolu;
  height: 100vh;
  z-index:98;
}

.colortext {
  content: 'gh';
  
  color: #12e000;
  text-align: start;
  font-size: 5rem;
  font-weight: 600;
  font-family: poppins;
}

.navbar_Alpha{
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

  .cardfg{
    transform: translateZ(20px);
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

    .quickline_alp1{

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






      .Alpha{
        height: 600vh;
        padding: 0;
        margin: 0;
          width: 99.9vw;
      }

      .head_alp{
        font-size: 4.5rem;
      }

      .textalp{
        font-family: Roboto;
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

      .middle_Alpha{
          height: 100vh;
          margin-left: 8vw;
          flex-direction: column;
      }

      .quickline_alp{
        margin-top: 20vh;
          flex-direction: column;

      }
      .quickline_alp1{
        margin-top: 5vh;
          flex-direction: column;

      }

        .imgbox_alp{
        
        width: 100vw;
       
      
        background-color: #000000;
      }

      .bbox{
        width: 50vw;
        height: 100vh;
        background-color: #ff0000;

      }



    
      .tesit_alp{
        background-color: black;
        margin-top: 30vh;
      }

      .infotext_alp{
        font-size: 3rem;
      }

      .frcard{
   
width: 60vw;


}

  }
</style>
