const allowed = [
  '/',
]

export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useUserSession()

  // redirect the user to the login screen if they're not authenticated
  if (!allowed.includes(to.path) && !loggedIn.value) {
    return navigateTo('/')
  }
})
