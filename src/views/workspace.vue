<template>

<div class="flex">
    
    <div class="navbar">
      <ul>
        <li class="navbarnav">
          <router-link :to="{ path: '/' }" class="thing" replace>
            ←Back</router-link
          >
          <div class="searchbox">
            <input
              :key="$route.fullPath"
              type="text"
              class="search-bar1"
              :placeholder="'$' + ticker"
              @keyup.enter="the_go(message.toUpperCase())"
              v-model="message"
            />
          </div>

          <div class="buttondiv">
            <div class="a" style="color: white"></div>
            <button
              :key="$route.fullPath"
              class="gobutton"
              @click="the_go(message.toUpperCase())"
            >
              GO
            </button>
          </div>
          <div class="rectangle"></div>
          <h5
            v-if="user == null"
            style="color: green; text-transform: capitalize"
          >
            login/signup for free to get acess
          </h5>
          <h5 v-else style="color: green; text-transform: capitalize"></h5>

          <router-link
            :to="{ path: '/dashboard/' + ticker }"
            class="thing"
            replace
            >Dashboard</router-link
          >
          <router-link
            :to="{ path: '/industry/' + ticker }"
            class="thing"
            replace
            >Industry</router-link
          >
          <h4 class="current">Macro view</h4>
          <router-link
            :to="{ path: '/funds/' + ticker }"
            class="thing"
            replace
            >Funds</router-link
          >
          <h7 class="thing">News( coming soon)</h7>
          <!-- <h7 class="thing">Macroview( coming soon)</h7> -->

          <h1 v-if="user == null">
            <b-button
              @click="googlesigin"
              class="btn btn-success"
              style="color: black"
              >Login/signinup</b-button
            >
          </h1>

          <h1>
            <a style="color: #0f0f0f">,</a>
            <div class="fg" style="display: flex; flex-direction: column">
              <b-button
                @click="openstripe()"
                class="btn btn-success"
                style="color: black; background-color: #38ea41"
                >GO pro <i class="fas fa-crown"></i
              ></b-button>
              <b-button
                @click="logout"
                class="btn btn-success"
                style="color: gray; background-color: #0f0f0f; border: none"
                >logout</b-button
              >
            </div>
          </h1>
          <div class="footernotes" style="display:flex; ">
            <a
              style="color: white"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=krish@greenlines.club"
              target="_blank"
              >📧contact</a
            >
            <a
              style="color: white"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=krish@greenlines.club"
              target="_blank"
              >🐞Report a bug</a
            >
          </div>
        </li>
      </ul>
    </div>
    <div class="container-fluid bg-light row p-3 m-0 justify-content-center ">
        <div class="m-3 w-25 shadow-lg rounded p-2 w-40  text-info bg-dark">to do

            <draggable class="bg-light p-4 text-dark shadow-lg"> make soemthing</draggable>
            <div class="d"> make soemthing</div>
            <div class="d"> make soemthing</div>



        </div>
        <div class="m-3 w-25 shadow-lg rounded p-2 bg-danger">doing</div>
        <div class="m-3 w-25 shadow-lg rounded p-2 bg-info">done</div>
    </div>

</div>  


</template>

<script>

import draggable from 'vuedraggable'

export default {

            components: {
            draggable,
        },



    data(){
        return{
            user: "sdf",
        }
    }

}
</script>

<style>

</style>