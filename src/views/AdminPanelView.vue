<template>
    <div class="panel" >
        <AdminPanel />
    </div>
</template>

<script setup lang="ts">
import AdminPanel from '@/components/AdminPanel.vue';
</script>

<style scoped>
    .panel{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: $color-dark-primary;
    }
</style>