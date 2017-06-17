<template>
  <div id="app">
    Hello World!
  </div>
</template>

<script>
  import store from './store';
  import { router } from './bootstrap';

  export default {
    name: 'ChatApplication',

    router,

    store,
  };
</script>

<style>
</style>
