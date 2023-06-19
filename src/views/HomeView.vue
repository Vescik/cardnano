<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import SignupForm from '@/components/SignupForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
  const showLogin = ref(true)
  const route = useRouter()

  const handleLogin = () => {
    route.push({name: 'AdminPanel'})
  }

</script>

<template>

    <main>
      <div class="login_container">
    <div v-if="showLogin" >
      <h2>Zaloguj</h2>
      <LoginForm @login="handleLogin" />
      <p>Nie posiadasz konta?<a @click="showLogin = false">Zarejestruj się</a></p>
    </div>
    <div v-else>
      <h2>Zarejestruj</h2>
      <SignupForm @signup="handleLogin" />
      <p>Posiadasz konto?<a @click="showLogin = true">Zaloguj się</a></p>
    </div>
  </div>
    </main>



</template>
<style lang="scss">
@import "../scss/utility/variables.scss";
main{
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
body{
  background-color: $color-dark-secondary;

}
button{
  align-self: center;
  background-color: $color-light-blue;
  border: none;
  padding:  5px 10px;
  margin: 10px;
  border-radius: 5px;
  color: $color-dark-primary;
  font-size: 1.2rem;
  cursor: pointer;
}

.login{
  &_container{
    display: flex;
    justify-content: center;

    padding: 30px;
    background-color: $color-dark-primary;
    border-radius: 10px;

    align-items: center;
      & form{
        width: 300px;
        display: flex;
        flex-direction: column;
      }
      & a{
          cursor: pointer;
          color: $color-light-blue;
        }
  }
}

</style>