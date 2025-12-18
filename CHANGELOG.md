# Changelog

## [2.4.0](https://github.com/PlusAuth/plusauth-rest-js/compare/v2.3.0...v2.4.0) (2025-12-18)

### Features

* add job service ([ece41bb](https://github.com/PlusAuth/plusauth-rest-js/commit/ece41bbc4f70e6bd25a8e7a599c9e7301f34bfae))
* add job service ([180ac2a](https://github.com/PlusAuth/plusauth-rest-js/commit/180ac2addcc4a9ce49d4ff74b6531cead162ac7b))

### Type Improvements

* client_ip_attr for radius ([a42cd79](https://github.com/PlusAuth/plusauth-rest-js/commit/a42cd79dd5816a880fba00f5933aebb2c2078035))
* incorrect value for android sha25 fingerprint setting ([9241999](https://github.com/PlusAuth/plusauth-rest-js/commit/924199955aae19d8d54caf6265d84bb702b590fa))
* invalid key for android sha25 fingerprint setting ([01ab62f](https://github.com/PlusAuth/plusauth-rest-js/commit/01ab62ff7d2a292ffa84d3881ed04eeefa1b1705))
* log response model ([f84c1d1](https://github.com/PlusAuth/plusauth-rest-js/commit/f84c1d1b39171a39da117b66fc85b94badaea981))
* remove updated_at from update client schema ([6f627c7](https://github.com/PlusAuth/plusauth-rest-js/commit/6f627c7514c3e6d1c277df05037ea83173723bd8))
* tenant branding settings ([8ac4647](https://github.com/PlusAuth/plusauth-rest-js/commit/8ac46477562b283b6df23d925175d33b7864106d))
* update job execution log interface ([e03d2d4](https://github.com/PlusAuth/plusauth-rest-js/commit/e03d2d46455dab05c79985f4e60da2fcacc5fdef))
* update user schema ([af42feb](https://github.com/PlusAuth/plusauth-rest-js/commit/af42feb51080f7bfab95cad842412bf38a992fff))

## [2.3.0](https://github.com/PlusAuth/plusauth-rest-js/compare/v2.2.0...v2.3.0) (2025-05-22)

### Features

* add module settings ([cf30a05](https://github.com/PlusAuth/plusauth-rest-js/commit/cf30a0595e87475f1b50c128c0b66aa25328913f))

### Type Improvements

* add branding settings for connections ([221e1eb](https://github.com/PlusAuth/plusauth-rest-js/commit/221e1ebb6f5d7e7a58e8dbf195b76884a3ccfe8b))
* add radius plan metadata ([ae658f3](https://github.com/PlusAuth/plusauth-rest-js/commit/ae658f3f58a04fbdbb6c93d731a6a95ecee5c816))
* include array max items ([7afc130](https://github.com/PlusAuth/plusauth-rest-js/commit/7afc130da1430dc2cf17c3b41d053c3888ff9744))
* include radius server port in metadata ([2247f75](https://github.com/PlusAuth/plusauth-rest-js/commit/2247f75c1c3b8c1f7348873dfb2a62e75a02e876))
* remove vonage sms adapter ([8513e9d](https://github.com/PlusAuth/plusauth-rest-js/commit/8513e9d6da19c6b1afffd7e027feae3552c78517))
* search all filter for ad/ldap user synchronizing ([4f895c3](https://github.com/PlusAuth/plusauth-rest-js/commit/4f895c3ec713f2657dd4a68f028e61656e8c5762))

### Bug Fixes

* combobox always display chips ([4bea193](https://github.com/PlusAuth/plusauth-rest-js/commit/4bea193e90f027eb04dc16b4b401dc1248380629))
* ldap sync job fails when split tcp packets ([8ac2387](https://github.com/PlusAuth/plusauth-rest-js/commit/8ac23875807b800cee5313cd007366125d2b79e0))
* **regression:** create user missing data parameter ([b6f2fce](https://github.com/PlusAuth/plusauth-rest-js/commit/b6f2fced916d3e86c8512fe19b07b1a2cbea69e5))
* runtime error when trying to create financial client ([e8b185f](https://github.com/PlusAuth/plusauth-rest-js/commit/e8b185f2400e3e40c9371893e1d84b98008d7518))

## [2.2.0](https://github.com/PlusAuth/plusauth-rest-js/compare/v2.1.0...v2.2.0) (2024-12-20)

### Features

* allow user self deletion ([e1ac3ea](https://github.com/PlusAuth/plusauth-rest-js/commit/e1ac3ea7d097cc8d4df29fddbcd4bde77a208718))

### Type Improvements

* well-known endpoint configuration for universal links support in mobile devices ([6b07433](https://github.com/PlusAuth/plusauth-rest-js/commit/6b074339c7140eb9f2dc3c9c81445c2a1a9903cd))

## 2.1.0 (2024-12-11)

* type: more specific types ([f9372fe](https://github.com/PlusAuth/plusauth-rest-js/commit/f9372fe))
* type: use correct type for client permissions ([744617b](https://github.com/PlusAuth/plusauth-rest-js/commit/744617b))
* feat: user account linking method ([fa74984](https://github.com/PlusAuth/plusauth-rest-js/commit/fa74984))
* feat: account linking views, hooks ([590fd97](https://github.com/PlusAuth/plusauth-rest-js/commit/590fd97))
* fix: create connection schema missing some required props ([1a1d891](https://github.com/PlusAuth/plusauth-rest-js/commit/1a1d891))

## <small>2.0.3 (2024-11-25)</small>

* fix: incorrect variable interpolation ([4e99e8e](https://github.com/PlusAuth/plusauth-rest-js/commit/4e99e8e))
* chore: lint ([34b2f54](https://github.com/PlusAuth/plusauth-rest-js/commit/34b2f54))

## <small>2.0.2 (2024-11-25)</small>

* fix: regression in tenant administrator methods ([7751875](https://github.com/PlusAuth/plusauth-rest-js/commit/7751875))
* fix: regression in tenant administrator methods ([b5b25d0](https://github.com/PlusAuth/plusauth-rest-js/commit/b5b25d0))
* chore: lint ([fc46872](https://github.com/PlusAuth/plusauth-rest-js/commit/fc46872))

## <small>2.0.1 (2024-11-25)</small>

* chore: update changelog ([3e42a04](https://github.com/PlusAuth/plusauth-rest-js/commit/3e42a04))
* fix: regression in getter method namings ([1c5cd76](https://github.com/PlusAuth/plusauth-rest-js/commit/1c5cd76))
* fix: regression in getter method namings ([c502ddf](https://github.com/PlusAuth/plusauth-rest-js/commit/c502ddf))

## 2.0.0 (2024-11-25)
This version brings usability improvements along with some breaking changes.

### Fixes
* error stacktraces don't include the method call

### Features
* every method now contains jsdoc
* better parameter namings for better autocompletion


### Breaking Changes
* tenant administrator methods refactored to be under separate entity
* Sub entity method names are changed to be more user friendly and descriptive.
  List of changed methods:

  | old               | new                 |
  |-------------------|---------------------|
  | `roles`           |                     |
  | addPermissions    | assignPermissions   |
  | removePermissions | unassignPermissions |
  | removeRoles       | unassignRoles       |
  | `roleGroups`      |                     |
  | addRoles          | assignRoles         |
  | addRoleGroups     | assignRoleGroups    |
  | removeRoles       | unassignRoles       |
