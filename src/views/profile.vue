<template>
 <div class="profile" style="display:flex; flex-direction: column; justify-content: center; align-items: center;">
   <div class="card" style="display: flex; justify-content: center; align-items: center;" >
     <img :src="return_id(user.photoURL)" class="rounded-circle z-depth-2" style="width:10rem">
  <div class="card-body">
    <h5 class="card-title">{{user.displayName}}</h5>
    <h6 class="card-title">{{user.email}}</h6>

   
    <a href="#" class="btn btn-primary">

      Edit ✏️
    </a>
  </div>
</div>
 
    <div class="d" style="width: 70vh; overflow: hidden;">
        {{user}}
    </div>
 </div>
</template>

<script>
import firebase from "firebase/compat/app";

// import { db } from "../firebase";

export default {

  data() {
    return {
      popup: false,
      international: false,
      username: "",
      user: null,

      error: null,
      awesome: "ds",
      selected: "0",
    };
  },

  methods: {
    onChangeEventHandler() {
      this.international = !this.international;
    },
    openstripe: function () {
      window.open("https://greenliness.gumroad.com/l/qxwozl", "_blank");
      // window.open("https://buy.stripe.com/aEUfZkel41YJ6FW5kk");
      this.$gtag.event("clicked on pro", { method: "Google" });
    },

    return_id: function (id) {
      return id;
    },

    setpopup: function () {
      alert("popup");
      this.popup = !this.popup;
    },


    all: function (ticker) {
      window.open(
        "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" +
          ticker +
          "&type=10-K&dateb=&owner=exclude&count=40"
      ),
        window.open(
          "https://www.google.com/search?q=" + ticker + " ir" + " relations"
        );
    },
    return_items: function (sel, name) {
      console.log(sel);
      return this.items[sel][name];
    },

    the_go: function (ticker) {
      this.popup = false;
      this.international = false;
      this.$router.push({
        path: "/dashboard/" + ticker,
      });

      this.$forceUpdate();
      // location.reload();
      // this.$router.go(this.$router.currentRoute);
    },

    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/signin");
          // alert("logout");
        })
        .catch((error) => {
          this.error = error;
        });
    },

    googlesigin: function () {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          // alert("signin");
          // this.$router.push({
          //   path: "results/" + this.user.uid,
          // });
        })
        .catch((err) => {
          console.log(err);
        });
      // This gives you a Google Access Token. You can use it to access the Google API.
    },
  },

  firestore: {
    username: "fda",
  },

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    });
  },
};
</script>

<style>


.card{
  width: 18rem;
}

</style>