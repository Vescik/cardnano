<template>
     <form @submit.prevent="handleSubmit">
    <input placeholder="Podaj adres email" v-model="email" type="text" name="email" />
    <input placeholder="Podaj nazwę użytkownika" v-model="displayName" type="text" name="email" />
    <input placeholder="Hasło" v-model="password" type="password" id="password" name="password" />
    <div>{{ error }}</div>
    <button  type="submit">Zarejestruj</button>
  </form>
</template>

<script setup lang="ts">
 import { ref } from 'vue';
 import useSignup from '@/composable/useSignup'
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const displayName = ref('')
    const emit = defineEmits(['signup'])

    const { signup,error } = useSignup()

    const handleSubmit = async () => {
      await signup(email.value, password.value,displayName.value)
        if(!error.value){
            emit('signup')
        }
    }

</script>

<style lang="scss" scoped>
input{
  margin: 10px 0;
  font-size: 1.15rem;
}
</style>