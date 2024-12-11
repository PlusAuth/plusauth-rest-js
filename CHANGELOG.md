

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
