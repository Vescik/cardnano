<script setup lang="ts">
import useLogin from '@/composable/useLogin'
import { ref } from 'vue';
const username = ref('')
const password = ref('')
const emit = defineEmits(['login'])

const handleSubmit = async () => {
        await login(username.value, password.value)
        if(!error.value){
            emit('login')
        }
    }

const { login,error } = useLogin()
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="username" placeholder="E-mail" type="text" id="username" name="username" />
    <input v-model="password" placeholder="Hasło" type="password" id="password" name="password" />
    <div>{{ error }}</div>
    <button  type="submit">Zaloguj</button>
  </form>
</template>
<style>
input{
  margin: 10px 0;
  font-size: 1.2rem;
}
</style>