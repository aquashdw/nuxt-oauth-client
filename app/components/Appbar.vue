<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">Home</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <div class="navbar-nav">
          <NuxtLink class="nav-link active" to="/servers">Servers</NuxtLink>
          <NuxtLink class="nav-link active" to="/register">Register Server</NuxtLink>
        </div>
        <div class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">{{ name }}</a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><span class="dropdown-item-text">{{ name }}</span></li>
            <li><a href="#" class="dropdown-item" @click="$emit('logout')">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  name: String,
})
</script>

<style scoped>

</style>