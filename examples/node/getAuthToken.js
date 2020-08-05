const axios = require('axios')
const querystring = require("querystring");

module.exports = function (domain, clientId, clientSecret){
  return new Promise((resolve, reject) => {
    axios({
      url: `${domain}/oauth/token`,
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: querystring.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: 'client_credentials',
          audience: `${domain}/api/`
        })
    }).then(function (result){
      resolve(result.data)
    }).catch(reject)
  })
}
