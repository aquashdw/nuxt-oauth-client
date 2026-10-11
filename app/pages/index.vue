<template>
  <div>
    <h1>Landing Page</h1>
    <template v-if="loggedIn">
      <p>user: {{ user.name }}</p>
      <button @click="logout">Logout</button>
    </template>
    <button v-else @click="toLogin">Login</button>
  </div>
</template>
<script setup>
definePageMeta({
  layout: false,
})
const { oauthClientId: clientId } = useRuntimeConfig().public
const { loggedIn, user, clear } = useUserSession()
const toLogin = async () => {
  console.log('move to auth')
  await navigateTo(`http://localhost:8000/oauth/authorize/?clientid=${clientId}&callback=http://localhost:3000/oauth/callback&response_type=code`, {
    external: true,
  })
}

async function logout () {
  await clear()
  await navigateTo('/')
}
</script>
