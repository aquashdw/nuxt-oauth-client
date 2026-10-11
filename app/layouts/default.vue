<template>
  <div>
    <Appbar :name="user.name" @logout="onLogout" />
    <div class="container mt-3">
      <NuxtPage/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Appbar from '@/components/Appbar.vue'

const { user, clear } = useUserSession()

const onLogout = async function () {
  await clear()  
  await navigateTo('/')
}

</script>

<style scoped>

</style>
