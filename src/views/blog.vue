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

.first {
  /* background-color: aqua; */
  width: 100vw;
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
 padding-left: 8vw;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
}

.content{
  font-weight: 300;
  font-size: 1.4rem;
}


.cards{
  background-color: aqua;
  width: 15rem;
  height: 15rem;
}

.sec {
   padding-left: 10vw;
  display: flex;
  flex-direction: row;
  /* background-color: rgb(81, 180, 139); */
  width: 100vw;
  height: 50vh;
  margin-top: 3rem;
  text-align: center;
  color: black;
  font-size: 2rem;
  font-weight: 900;
  font-family: poppins;
}


</style>