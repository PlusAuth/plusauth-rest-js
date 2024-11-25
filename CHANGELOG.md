## 2.0.0 (2024-11-25)

### Breaking Changes
* tenant administrator methods moved to separate entity
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

