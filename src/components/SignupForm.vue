<template>
     <form @submit.prevent="handleSubmit">
    <input v-model="username" type="text" name="username" />
    <input v-model="email" type="text" name="email" />
    <input v-model="password" type="password" id="password" name="password" />
    <div>{{ error }}</div>
    <button  type="submit">Login</button>
  </form>
</template>

<script setup lang="ts">
 import { ref } from 'vue';
 import useSignup from '@/composable/useSignup'
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const { signup,error } = useSignup()

    const handleSubmit = async () => {
      await signup(email.value, password.value)
    }

</script>

<style lang="ts" scoped>

</style>