/*
Curl representation of the request. Change values inside <> accordingly.

curl --location --request POST 'https://<DOMAIN>.plusauth.com/oauth2/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id=<CLIENT_ID>' \
--data-urlencode 'client_secret=<CLIENT_SECRET>' \
--data-urlencode 'audience=https://<DOMAIN>.plusauth.com/api/' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'scope=<scope1> <scope2> <scope3>'

*/
/**
 *
 * @param uri Your token provider uri. For ex: https://tenant.plusauth.com
 * @param clientId Your client ID
 * @param clientSecret Your client secret
 * @param permissions scopes, if any
 * @returns {Promise<{ access_token: string, expires_at: number, scope: string }>}
 */
export default async function (uri, clientId, clientSecret, permissions = []) {
  const response = await fetch(`${uri}/oauth2/token`, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "client_credentials",
      audience: `${uri}/api/`,
      scope: Array.isArray(permissions) ? permissions.join(" ") : permissions
    })
  })

  return response.json()
}
