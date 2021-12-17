<template>
  <div class="test">
      {{test}}
  </div>
</template>

<script>

import{db} from '../firebase';          


export default {

    data() {
        return {
            test: 'test'
        }
    },

    firestore() {
        return {
            test: db.collection('users')
        }
    },


}
</script>

<style>

</style>