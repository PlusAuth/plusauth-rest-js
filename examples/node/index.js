require('dotenv').config();
const {PlusAuthRestClient} = require('../../')
const getAuthToken = require('./getAuthToken')

const pa = new PlusAuthRestClient(process.env.PLUSAUTH_DOMAIN);

(async function (){

  /**
   * Simple token refresh function. It will resolve on initial call to make sure initial token received than it will call itself to ensure token is not expired anytime.
   * @param expiration - How much seconds remained until token expiration
   * @param skew - seconds to refresh token before expiration
   * @returns {Promise<unknown>}
   */
  function refreshToken(expiration = 30, skew = 30){
    let resolved = false
    return new Promise(function (resolve, reject) {
      setTimeout( () =>{
        getAuthToken(
          process.env.PLUSAUTH_DOMAIN,
          process.env.PLUSAUTH_CLIENT_ID,
          process.env.PLUSAUTH_CLIENT_SECRET
        ).then(({access_token, expires_in}) => {
          pa.options.token = access_token;
          if(!resolved){
            resolved = true
            resolve({token: access_token, expires_in})
          }
          refreshToken(expires_in)
        }).catch(err => {
          if(!resolved){
            resolved = true
            return reject(err)
          }
          console.error(err.message)
        })
      }, (expiration  - skew) * 1000)
    })
  };

  await refreshToken()

  const { results: users, total: totalUsers} = await pa.users.getAll()

  await pa.users.update(users[0].id, {
      password: 'updatedPassword'
    }
  )
  console.log('user updated')

})().catch(console.error)
