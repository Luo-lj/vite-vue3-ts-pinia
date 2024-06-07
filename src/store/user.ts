import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: '张三李四',
      age: 0,
    }
  },
  getters: {
    doubleAge: (state) => state.age * 2,
  },
  actions: {
    updateName(name: string) {
      this.name = name
    },
  },
})