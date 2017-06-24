<template>
  <div id="app">
    Hello World!!
    <input
      type="text"
      v-model="message"
      placeholder="message">
    <button @client.prevent="addMessage(message)">
      Send Message
    </button>
  </div>
</template>

<script>
  import store from './store';
  import { router } from './bootstrap';

  export default {
    name: 'ChatApplication',

    router,

    store,

    data(){
      return {
        message: null,
      };
    },

    methods: {
      addMessage() {
        this.$store.dispatch('newMessage', message);
      }
    },
  };
</script>

<style>
</style>
