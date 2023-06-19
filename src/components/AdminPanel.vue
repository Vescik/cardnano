<template>
    <div v-if="modalStore.showModal">
    <AddOrganizationModal />
    </div>
    <div class="panel_container">
        <nav class="panel_nav">
            <h2>Organizacje</h2>
            <button @click="modalStore.openModal()" class="panel_button">Dodaj Organizacje</button>
        </nav>
    <div class="orgainzations">
        <table class="table">
      <thead>
        <tr>
          <th>Numer ID</th>
          <th>Typ Organizacji</th>
          <th>Adres organizacji</th>
          <th>Nazwa organizacji</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="organization in organizations" :key="organization.id">
          <td>{{ organization.id }}</td>
          <td>{{ organization.orgType }}</td>
          <td>{{ organization.orgAddress }}</td>
          <td>{{ organization.orgName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
    </div>
</template>

<script setup lang="ts">
import MainMenu from './MainMenu.vue';
import { RouterView } from 'vue-router';
import { collection, addDoc,getDocs } from "firebase/firestore";
import {datebase} from '@/db/settings'
import { ref,onMounted } from 'vue';
import {useModalStore} from '../stores/OrganizationStore';
import AddOrganizationModal from './AddOrganizationModal.vue';

const modalStore = useModalStore();
const organizations = ref([]);
onMounted(async () => {
        const organizationsCollectionRef = collection(datebase, 'organizations');
        const organizationsSnapshot = await getDocs(organizationsCollectionRef);
        organizations.value = organizationsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(organizations.value);
        console.log(organizations.value);
        
    })


</script>

<style lang="scss" >
@import "../scss/utility/variables.scss";
.panel{
    &_container{
        width: clamp(300px, 80%, 1000px);
        height: 600px;
        background-color: $color-dark-primary;
        border-radius: 20px;
    }
    &_nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;     
        font-size: 1.2rem;
        font-weight: 700;
        text-transform: uppercase;
    }
}
.table {
  width: 100%;
  border-collapse: collapse;

  th {
    background-color: $color-dark-secondary;
    color: $color-light-blue;
    padding: 10px;
    text-align: left;
  }

  td {
    background-color: $color-dark-primary;
    color: $color-white;
    padding: 10px;
  }

  tr:nth-child(even) {
    background-color: $color-dark-secondary;
  }

  tr:hover {
    background-color: $color-gray;
  }
}
</style>