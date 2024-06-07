<template>
  <Home />
</template>

<script setup lang="ts">
import Home from '@/views/Home.vue'
import API from '@/api';

const requestRes = async()=>{
  let result =
    await API.login("zhangsan", '123456');
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
