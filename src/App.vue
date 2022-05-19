<template>
  <div id="app">
    <div class="newhome">
      <div class="centre">
        <div class="d">
          <div class="" style="display:flex; flex-direction: column; justify-items: center; align-items: center;" >
          <!-- <img
            src="./assets/dotclub1.png"
            alt="logo"
            style="width: 5rem; height: auto; padding-top: vh"
          />

          <div class="d">is now</div> -->

          <img
            src="./assets/dotclub1.png"
            alt="logo"
            style="width: 10rem; height: auto; padding-top: vh"
          />
          
          
          </div>
          <h1 class="home_title">We Moved New Home 🏠</h1>
          <a href="https://www.greenlines.pro" class="titlehome">
            Go to new home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- <router-view/> -->
  </div>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.centre {
  background-color: #f5f5f5;
  height: 65vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 60vw;
}

.home_title {
  font-size: 4rem;
  margin: 1rem;
}

.titlehome {
  font-size: 1rem;
  color:black;
  border: solid gainsboro;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
}

.newhome {
  background: rgb(238, 174, 202);
  background: linear-gradient(
    90deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.body {
  background-color: #42b983;
}

#app {
  font-family: poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@font-face {
  font-family: "sackers"; /*a name to be used later*/
  src: URL(fonts/sackers.otf); /*URL to font*/
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media screen and (max-width: 728px) {
  .home_title {
    font-size: 2rem;
    margin: 1rem;
  }
}
</style>
