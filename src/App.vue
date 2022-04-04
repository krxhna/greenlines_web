<template>
  <div id="app">

    <router-view/>
  </div>
</template>



<script>

</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');



.body{
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
    font-family: 'sackers'; /*a name to be used later*/
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
</style>
