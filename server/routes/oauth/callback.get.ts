const config = useRuntimeConfig()
const { oauthClientSecret: clientSecret } = config
const { appUrl, oauthHost } = config.public

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event)
  const { access_token: accessToken, refresh_token: refreshToken } = await fetch(
    `${oauthHost}/oauth/token/`,
    {
      method: 'post',
      body: JSON.stringify({
        code,
        grant_type: 'code',
        client_secret: clientSecret,
        redirect_uri: `${appUrl}/oauth/callback`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then(res => res.json())
  .catch(err => console.error(err))

  const { nickname, email } = await fetch(
    `${oauthHost}/oauth/user-info/`,
    {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    },
  ).then(res => res.json())
  .catch(err => console.error(err))
  await setUserSession(event, {
    user: {
      name: nickname,
      email,
      accessToken,
      refreshToken,
    },
  })

  await sendRedirect(event, '/')
})
