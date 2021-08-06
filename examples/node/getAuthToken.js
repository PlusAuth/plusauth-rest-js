const axios = require('axios')
const querystring = require("querystring");


/*
Curl representation of the request. Change values inside <> accordingly.

curl --location --request POST 'https://<DOMAIN>.plusauth.com/oauth2/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id=<CLIENT_ID>' \
--data-urlencode 'client_secret=<CLIENT_SECRET>' \
--data-urlencode 'audience=https://<DOMAIN>.plusauth.com/api/' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'scope=permission1 permission2 permission3'

*/
module.exports = function (domain, clientId, clientSecret, permissions = []){
  return new Promise((resolve, reject) => {
    axios({
      url: `${domain}/oauth2/token`,
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: querystring.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: 'client_credentials',
          audience: `${domain}/api/`,
          scope: Array.isArray(permissions) ? permissions.join(' ') : permissions
        })
    }).then(function (result){
      resolve(result.data)
    }).catch(reject)
  })
}
