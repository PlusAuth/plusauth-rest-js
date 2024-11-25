import { HttpService } from "../http"
import type { User } from "../models"
import type { CreateUser } from "../models"
import type { UpdateUser } from "../models"
import type { UserRbacTree } from "../models"
import type { Tenant } from "../models"
import type { UserSession } from "../models"
import { encodedQueryString } from "../utils"

export class UserService extends HttpService {
  /**
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getAll(queryParams?: {
    limit?: number
    offset?: number
    q?: string
    sort_by?: string | string[]
    fields?: string | string[]
  }): Promise<Record<string, any>> {
    return await this.http.get(`/users/${encodedQueryString(queryParams)}`)
  }

  /**
 * For user creation at least one of identifier is required. Available identifiers are `username`, `email` and `phone_number`.

 * @param data User object
 */
  async create(data: CreateUser): Promise<User> {
    return await this.http.post(`/users/`, data)
  }

  /**
   * @param userId User identifier
   */
  async get(userId: string): Promise<User> {
    return await this.http.get(`/users/${userId}`)
  }

  /**
   * @param userId User identifier
   * @param data Object containing to be updated values
   */
  async update(userId: string, data: UpdateUser): Promise<User> {
    return await this.http.patch(`/users/${userId}`, data)
  }

  /**
   * @param userId User identifier
   */
  async remove(userId: string): Promise<void> {
    return await this.http.delete(`/users/${userId}`)
  }

  /**
   * @param userId User identifier
   */
  async getRbac(userId: string): Promise<UserRbacTree> {
    return await this.http.get(`/users/${userId}/rbac`)
  }

  /**
   * @param userId User identifier
   */
  async getTenants(userId: string): Promise<Tenant[]> {
    return await this.http.get(`/users/${userId}/tenants`)
  }

  /**
   * @param userId User identifier
   * @param credentialId Credential identifier
   */
  async removeCredential(userId: string, credentialId: string): Promise<void> {
    return await this.http.delete(`/users/${userId}/credentials/${credentialId}`)
  }

  /**
   * @param userId User identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getPermissions(
    userId: string,
    queryParams?: {
      limit?: number
      offset?: number
      q?: string
      sort_by?: string | string[]
      fields?: string | string[]
    },
  ): Promise<Record<string, any>> {
    return await this.http.get(`/users/${userId}/permissions/${encodedQueryString(queryParams)}`)
  }

  /**
   * @param userId User identifier
   * @param permissionIdList List of permission IDs to be assigned
   */
  async assignPermissions(userId: string, permissionIdList: string[]): Promise<void> {
    return await this.http.post(`/users/${userId}/permissions/`, permissionIdList)
  }

  /**
   * @param userId User identifier
   * @param permissionIdList List of permission IDs to be unassigned
   */
  async unassignPermissions(userId: string, permissionIdList: string[]): Promise<void> {
    return await this.http.delete(`/users/${userId}/permissions/`, permissionIdList)
  }

  /**
   * @param userId User identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getRoles(
    userId: string,
    queryParams?: {
      limit?: number
      offset?: number
      q?: string
      sort_by?: string | string[]
      fields?: string | string[]
    },
  ): Promise<Record<string, any>> {
    return await this.http.get(`/users/${userId}/roles/${encodedQueryString(queryParams)}`)
  }

  /**
   * @param userId User identifier
   * @param roleIdList List of role IDs to be assigned
   */
  async assignRoles(userId: string, roleIdList: string[]): Promise<void> {
    return await this.http.post(`/users/${userId}/roles/`, roleIdList)
  }

  /**
   * @param userId User identifier
   * @param roleIdList List of role IDs to be unassigned
   */
  async unassignRoles(userId: string, roleIdList: string[]): Promise<void> {
    return await this.http.delete(`/users/${userId}/roles/`, roleIdList)
  }

  /**
   * @param userId User identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getRoleGroups(
    userId: string,
    queryParams?: {
      limit?: number
      offset?: number
      q?: string
      sort_by?: string | string[]
      fields?: string | string[]
    },
  ): Promise<Record<string, any>> {
    return await this.http.get(`/users/${userId}/role-groups/${encodedQueryString(queryParams)}`)
  }

  /**
   * @param userId User identifier
   * @param roleGroupIdList List of role group IDs to be assigned
   */
  async assignRoleGroups(userId: string, roleGroupIdList: string[]): Promise<void> {
    return await this.http.post(`/users/${userId}/role-groups/`, roleGroupIdList)
  }

  /**
   * @param userId User identifier
   * @param roleGroupIdList List of role groups IDs to be unassigned
   */
  async unassignRoleGroups(userId: string, roleGroupIdList: string[]): Promise<void> {
    return await this.http.delete(`/users/${userId}/role-groups/`, roleGroupIdList)
  }

  /**
   * @param userId User identifier
   */
  async getSessions(userId: string): Promise<UserSession[]> {
    return await this.http.get(`/users/${userId}/session/`)
  }

  /**
   * @param userId User identifier
   */
  async endSessions(userId: string): Promise<void> {
    return await this.http.delete(`/users/${userId}/session/`)
  }

  /**
   * @param userId User identifier
   * @param sessionId Session identifier
   */
  async endSession(userId: string, sessionId: string): Promise<void> {
    return await this.http.delete(`/users/${userId}/session/${sessionId}`)
  }
}
