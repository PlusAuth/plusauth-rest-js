# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.2.0 (2024-08-20)

### Bug Fixes

* connection cannot be null for user credentials ([dbd3669](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/dbd3669f05e59094edaf749e035deccaa11eaf96))
* hook flows validation ([15d8ef5](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/15d8ef53739cd5d8c75fef71ca88b4d53631a039))
* incorrect role group paths ([10145fd](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/10145fdb50518db7175bdc0826220833c4e8935e))
* invalid function name for role permissions ([307121d](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/307121d495c9190c3f1fc473a71a5d3e60209547))
* invalid types for rest js lib ([da611d6](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/da611d63ccb47d64c6f4ab057e75801053e3e408))
* invalid user session auth ([9be4095](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/9be4095a79c595035208aab9600662c51294f10d))
* pagination options missing while fetching user roles ([5f52988](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/5f52988b06bab01b78eda6207f40824283231cd5))
* regression in refactor ([60dd510](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/60dd510438dbd0292eddda1c717d4d42aba5c2f5))
* settings is optional in resources ([00a8043](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/00a80430c6e54c6efa63d61724a9c0e5dee32325))
* timestamp triggers fails on existing columns ([b3748ca](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/b3748ca1f329b60d46903f27842554a77b4c9b88))

### Features

* 3gbilisim sms provider and provider testing component ([056fa93](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/056fa93a4a15fc5f8c3fbd418dd9373db10c591d))
* ability to define tenant administrator permissions ([649b569](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/649b56974acf6aaae3c8bed3eb0717f3796c23cf))
* ability to remove user credential ([7b233c4](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/7b233c4524cc893231e1e0a465896fdb75b5c65a))
* add basic stats collection ([01ea726](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/01ea726fa21b0a5770dde125b83c2c387c4a6684))
* add email provider settings ([8795a14](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/8795a140e1e97e05b35af682e9e8175084b06138))
* add mfa grants ([df020a8](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/df020a8dded24d02146b6e7b697ebb42e5ae5b2b))
* add relay state to saml sp ([1d977ae](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/1d977ae8a04d733e0205fdebb3180aa62ad7b3d2))
* add resource based access token ttl ([862c37c](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/862c37c2df724ce0175652ea3b8e5797a367502e))
* add secure option for smtp provider ([12466d0](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/12466d0fffcd1c071443edc9007b23bf560771ec))
* add signed requests flag to saml provider ([cfdff31](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/cfdff319921456f1b61ea0856cefd36b33949477))
* add soap mode to 3gbilisim sms adapter ([1ae542c](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/1ae542c32200ec1ef14a62e111c344d75adf8cde))
* auth plus endpoints ([e6c8a25](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/e6c8a25fc4acc6618f52fb63f5069ffaafe6668d))
* **authenticator:** bind sim setting ([2de7515](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/2de7515a5b080e29bafe6d9b5d15fc668383cc5c))
* **authenticator:** update auth plus account scheme ([975ad11](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/975ad1162287cf2c1ec67016334546236bbf6522))
* better passwordless login management ([11d2017](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/11d201758487e901968b49069e7e8d528fcaa94b))
* connection branding options ([af41509](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/af41509f2c29547415a38e8d8ef2a76ae114859a))
* custom sms provider ([267bebd](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/267bebd41d1cc46ced07efd18e15058e4c59774e))
* edevlet strategy ([3ad94db](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/3ad94db05bdf51d6b68c9223cd8c84bd9c24ff2c))
* edevlet test mode ([cc4cba3](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/cc4cba3bd1ab45e16bbcbc7a3779e3a6df9d6dd3))
* include plusauth-rest-js ([d8313b3](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/d8313b38429c6ac17f2c8d2c15e7b279894cd490))
* include_api option for fetching logs ([01267d1](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/01267d18a56b0205631be7e691e4a226be1e05cf))
* **ldap:** ability to define search scope ([7e91c02](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/7e91c02ca236d3a4b3edcfb4ef94d2bf1ef14b07))
* netgsm sms provider ([7caf49e](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/7caf49e3dd842d8694ef9c154f1678637225a95d))
* push mfa and passwordless support ([4def242](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/4def2428e15b954b18d113256d6e72496253fccf))
* rest-js as git submodule ([a6cc169](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/a6cc1696153751a3ca232f5947a7f844f0eed868))
* wsfed protocol and saml improvements ([ad7bbe8](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/ad7bbe89cfa768ae6d3b6ca64119ae99c9e5a2d3))
* yine kendimizi tutamadik ([037b39b](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/037b39b3e147ed32aa40360228ca6870a3554603))

### Performance Improvements

* single redis client for rate limit ([ba6709b](https://gitlab.ekinoks.biz/plusauth/plusauth/commit/ba6709b352774cd81bfadce348974956c2452f26))

## 1.1.0 (2024-07-03)

* build: include commonjs builds ([eda3c29](https://github.com/PlusAuth/plusauth-rest-js/commit/eda3c29))
* feat: configurable pkce enforcement ([1038ac5](https://github.com/PlusAuth/plusauth-rest-js/commit/1038ac5))
* feat: include_api option for fetching logs ([ac9068f](https://github.com/PlusAuth/plusauth-rest-js/commit/ac9068f))
* refactor: use faster deepmerge library ([2b66c33](https://github.com/PlusAuth/plusauth-rest-js/commit/2b66c33))
* type: change hook context headers type ([481e57c](https://github.com/PlusAuth/plusauth-rest-js/commit/481e57c))

## [1.0.0](https://github.com/PlusAuth/plusauth-rest-js/compare/v0.7.5...v1.0.0) (2024-04-16)

### Refactors

* migrate to openapi ([1e68d5f](https://github.com/PlusAuth/plusauth-rest-js/commit/1e68d5ff2127d75916ca66f72e7725aafd9253ef))
