# @plusauth/plusauth-rest-js

Helper library for interacting with PlusAuth REST API intent upon to be used in NodeJS and browser environments.

Table Of Content
1. [Installation](#installation)
2. [Usage](#usage)
3. [Docs](#docs)
4. [Examples](#examples)


# Installation
From PlusAuth CDN:
```html
<!-- Latest release -->
<script src="https://unpkg.com/@plusauth/plusauth-rest-js@0.7.0-beta.0/dist/plusauth-rest-js.min.js"></script>
```

With npm:
```shell script
$ npm install @plusauth/plusauth-rest-js
```

or with yarn
```shell script
$ yarn add @plusauth/plusauth-rest-js
```

# Usage

## CDN Usage
The library will be exposed to global as `PlusAuthRestClient`

Initialize it like following:
```js
const authToken = '<ACCESS_TOKEN>'
const plusAuth = new PlusAuthRestClient('https://<YOUR_TENANT_ID>.plusauth.com', { token: authToken })
```

## NPM Usage
```js
import PlusAuthRestClient from '@plusauth/plusauth-rest-js'

const authToken = '<ACCESS_TOKEN>'
const plusAuth = new PlusAuthRestClient('https://<YOUR_TENANT_ID>.plusauth.com', { token: authToken })
```

## Replacing Token
Generally you may need to replace PlusAuth REST API token because its lifetime could end. In this case updating `options.token` will be enough to change used token.

```js
const initialToken = 'INITIAL_TOKEN'
const plusAuth = new PlusAuthRestClient('https://<YOUR_TENANT_ID>.plusauth.com', { token: initialToken })

plusAuth.apis.getAll().then( function (res){
// retrieved with initial token
console.log(res)
})

plusAuth.options.token = 'NEW_TOKEN'

plusAuth.apis.getAll().then(function (res){
// Retrieved with new token
console.log(res)
})
```

## Custom HTTP Client
You may provide your own http client to the library when you need to have more control over your requests.

```js
const axios = require('axios')
const plusAuth = new PlusAuthRestClient('https://<YOUR_TENANT_ID>.plusauth.com', {
    httpClient: function (url, options) {
        options.url = url
        options.data = options.body
        return axios(options)
    }
})
```

# Docs
For API docs visit [here](https://plusauth.github.io/plusauth-rest-js/classes/PlusAuthRestClient.html)

# Examples
For more examples have a look at [examples](/examples) folder in this directory.
