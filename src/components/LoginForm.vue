<script setup lang="ts">
import useLogin from '@/composable/useLogin'
import { ref } from 'vue';
const username = ref('')
const password = ref('')

const handleSubmit = async () => {
      await login(username.value, password.value)
    }

const { login,error } = useLogin()
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="username" type="text" id="username" name="username" />
    <input v-model="password" type="password" id="password" name="password" />
    <div>{{ error }}</div>
    <button  type="submit">Login</button>
  </form>
</template>