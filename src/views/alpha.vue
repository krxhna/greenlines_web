<template>
  <div class="alpha">
    
    <div class="navbar_alpha" >
      <div class="a" style="padding-left:4vw">Greenlines</div>
      <div class="navc">
      <div class="a">about</div>
      <div class="a">contact</div>
      <div class="a">login</div>
      </div>
    </div>

    <div class="em"></div>
    <div class="middle_alpha">
      <div class="slogan_alpha">
        <div class="alp_text">
          <div class="head_alp">Do Valaution</div>
          <div class="colortext">Faster.</div>
          <div class="textalp">
            your valuation workspace do everything from checking sec reports, to
            industry averages to amcro data all in one place
          </div>
          <div class="buttonsometh">
            <button class="btn_alp">Get Started</button>
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
    
    <div class="dec">
        <div class="rect_alp"></div>
    <div class="rect_alp2"></div>
    <div class="rect_alp3"></div>
    </div>
    
    
  </div>
</template>

<script>
export default {};
</script>

<style>
.alpha {
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
      color: rgb(255, 255, 255);
      font-size: 5vw;

  }



  .quickline_alp{

    /* display:grid; */
    /* grid-template-columns: repeat(auto-fit, minmax(240px,1fr)); */

    
    
   
    display: flex;
    flex-direction: row;
    color: white;
    margin-left: 10vw;

    /* margin: 3% 10% 0 10%; */

    height: 74vh;
    width: 80vw;
    background-color: rgb(0, 0, 0);
    
  }




  @media screen and (max-width:728px) {

      .middle_alpha{
          margin-left: 8vw;
          flex-direction: column;
      }

      .frcard{
   
width: 60vw;


}

  }
</style>
