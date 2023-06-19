<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import SignupForm from '@/components/SignupForm.vue';
import { ref } from 'vue';
  const showLogin = ref(true)

</script>

<template>
  <div class="logn_container">
    <div v-if="showLogin">
      <h2>Log in</h2>
      <LoginForm />
      <p>Don't have an account? <a @click="showLogin = false">Sign up</a></p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm />
      <p>Already have an account? <a @click="showLogin = true">Log in</a></p>
    </div>

  </div>

</template>