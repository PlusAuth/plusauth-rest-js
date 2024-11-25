

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
