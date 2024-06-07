<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>

    <p>用户姓名：{{ userStore.name }}</p>
    <button type="button" @click="updateNameClick">修改姓名</button>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/store/user'

defineProps<{ msg: string }>()

const count = ref(0)
const userStore = useUserStore()
const updateNameClick = () => {
  userStore.updateName('李四')
}



</script>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
</style>
