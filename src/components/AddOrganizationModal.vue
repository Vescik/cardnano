<template>
    <div @click="modalStore.closeModal" class="backdrop"></div>
    <div class="modal_container" >
        <div class="modal-content">
    <h2>Stwórz profil organizacji</h2>
    <form @submit.prevent="addToDatebase" id="organizationForm">
      <div class="form-group">
        <span @click="modalStore.closeModal" class="close">&times</span>
        <label for="orgName">Nazwa organizacji</label>
        <input v-model="organization.orgName" type="text" id="orgName" name="orgName" required>
      </div>
      <div class="form-group">
        <label for="orgType">Typ organizacji</label>
        <select v-model="organization.orgType" id="orgType" name="orgType" required>
          <option value="">Wybierz typ</option>
          <option value="Siłownia">Siłownia</option>
          <option value="Basen">Basen</option>
          <option value="Inne">Inne</option>
        </select>
      </div>
      <div class="form-group">
        <label for="orgAddress">Adres organizacji</label>
        <input v-model="organization.orgAddress" type="text" id="orgAddress" name="orgAddress" required>
      </div>
      <!-- Add more input fields as needed for additional organization information -->

      <div class="form-group">
        <button type="submit" >Stwórz profil</button>
      </div>
    </form>
  </div>
  
    </div>
</template>

<script setup lang="ts">
   import { useModalStore } from '@/stores/OrganizationStore';
   import { collection, addDoc } from "firebase/firestore"; 
   import {datebase} from '@/db/settings'
   import { ref,onMounted } from 'vue';
    const modalStore = useModalStore();

    const organization = ref({
        orgName: '',
        orgType: '',
        orgAddress: '',
        // Add more fields as needed
    })
    const addToDatebase = async () => {
        const organizationsCollectionRef = collection(datebase, 'organizations');
        const newDocumentRef = await addDoc(organizationsCollectionRef, { ...organization.value });
        modalStore.closeModal()
    }
    
</script>

<style lang="scss" scoped>
@import "../scss/utility/variables.scss";
.backdrop{
    position: absolute;
    display: inline;
    top: 0;
    left: 0;
    background-color:#242323a8;
    z-index: 5;
    width: 100vw;
    height: 100vh;
}
.modal{
    &_container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: $color-dark-primary;
        border-radius: 20px;
        height: 550px;
        width: 500px;
        z-index: 6;

        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.modal-content {
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
  }

  .close:hover,
  .close:focus {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }

  /* Additional CSS Styling as needed */

  .form-group {
    margin-bottom: 15px;
  }

  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .form-group input,
  .form-group select {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  .btn-create {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }

  .btn-create:hover {
    background-color: #45a049;
  }
</style>