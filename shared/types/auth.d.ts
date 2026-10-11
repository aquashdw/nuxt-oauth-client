declare module '#auth-utils' {
  interface User {
    name: string,
    email: string,
    accessToken: string,
    refreshToken: string,
  }
}
