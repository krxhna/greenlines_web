.<template>
  <div class="blog">
    
    <div class="first" style="padding-left:10vw;">
      THE BLOG
    </div>
    .
    
    <div class="sec">
      <!-- the small ones -->

      <div class="secpanel">
        
        </div> 
        <div class="cont">
        <div class="heading">
          heading one 
        </div>
        <div class="content">
          heading one soemthing about hte ocntent that i have  no idea abou thow to do so im just witing shit that just dont make any sense and i am the only person who is gonna see it so why even care
        </div>
        </div> 
    </div>

    <div class="third">
      <div class="cards">
        <div class="img">
           <img
           class="img"
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df" >
        </div>
      <div class="date">
        23/4/1232
      </div>
        <div class="card_title">
          Tab is not working for some reason
        </div>
        <div class="card_des">
          fdsadf ehat ever this is i like typing shit liek this i dk what ithis is it maybe this gonna be fo rseo or soemhting i ofnt liek tht epelase do need to cpomplicate the this this i am yours
        </div>
      </div>
      <div class="cards">
        vard
      </div>
      <div class="cards">
        vard
      </div>
      <div class="cards">
        vard
      </div>
      <div class="cards">
        vard
      </div>
    </div>
  </div>
</template>

<script>


export default {

}
</script>


<style>

.firstdqad {
  /* background-color: aqua; */
  width: 98vw;
  height: 10vh;
  text-align: center;
  color: black;
  font-size: 7rem;
  font-weight: 900;
  font-family: poppins;
}

.cont{
  background-color: white;
  width: 34vw;
}


.card_title{
  font-size: 2rem;
  font-weight: 900;
  font-family: poppins;
}

.secpanel{
 
  border: 10px black;

  background-color: red; 
  height: 50vh;
  width: 40vw;
}

.heading{
  font-size: 5rem;
}


.third{
 

  grid-gap: 2rem;
  overflow: hidden;
 display:grid;
 padding-left: 8vw;
padding-right: 8vw;
padding-top: 5vh;
 grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row; 
}

.content{ 
  font-weight: 300;
  font-size: 1.4rem;
}


.img{
  background-color: blue;
   object-fit: cover;

  height: 20rem;
  
  width: 100%;
}



.carfsadds{
      --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: aqua;
  width: 30rem;
  display: flex;
  flex-direction: column;
  height: 40rem;
}

.sec {

   padding-left: 10vw;
  display: flex;
  flex-direction: row;
  /* background-color: rgb(81, 180, 139); */
  width: 98vw;
  height: 50vh;
  margin-top: 3rem;
  text-align: center;
  color: black;
  font-size: 2rem;
  font-weight: 900;
  font-family: poppins;
}


</style>