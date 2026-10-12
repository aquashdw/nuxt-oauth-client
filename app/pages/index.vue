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
const { oauthHost: oauthHost, oauthClientId: clientId } = useRuntimeConfig().public
const { loggedIn, user, clear } = useUserSession()
const toLogin = async () => {
  console.log('move to auth')
  await navigateTo(`${oauthHost}/oauth/authorize/?clientid=${clientId}&callback=http://localhost:3000/oauth/callback&response_type=code`, {
    external: true,
  })
}

async function logout () {
  await clear()
  await navigateTo('/')
}
</script>
