import { HttpService } from "../http"
import type { CreateRole, Permission, Role, UpdateRole, User } from "../models"
import { encodedQueryString } from "../utils"

export class RoleService extends HttpService {
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
  }): Promise<{ total: number; results: Role[] }> {
    return await this.http.get(`/roles/${encodedQueryString(queryParams)}`)
  }

  /**
   * @param data Role object
   */
  async create(data: CreateRole): Promise<Role> {
    return await this.http.post(`/roles/`, data)
  }

  /**
   * @param roleId Role identifier
   */
  async get(roleId: string): Promise<Role> {
    return await this.http.get(`/roles/${roleId}`)
  }

  /**
   * @param roleId Role identifier
   * @param data Object containing to be updated values
   */
  async update(roleId: string, data: UpdateRole): Promise<Role> {
    return await this.http.patch(`/roles/${roleId}`, data)
  }

  /**
   * @param roleId Role identifier
   */
  async remove(roleId: string): Promise<void> {
    return await this.http.delete(`/roles/${roleId}`)
  }

  /**
   * @param roleId Role identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getPermissions(
    roleId: string,
    queryParams?: {
      limit?: number
      offset?: number
      q?: string
      sort_by?: string | string[]
      fields?: string | string[]
    },
  ): Promise<{ total: number; results: Permission[] }> {
    return await this.http.get(`/roles/${roleId}/permissions${encodedQueryString(queryParams)}`)
  }

  /**
   * @param roleId Role identifier
   * @param permissionIdList List of permission ID's to be assigned to the role
   */
  async assignPermissions(roleId: string, permissionIdList: string[]): Promise<void> {
    return await this.http.post(`/roles/${roleId}/permissions`, permissionIdList)
  }

  /**
   * @param roleId Role identifier
   * @param permissionIdList List of permission ID's to be unassigned from the role
   */
  async unassignPermissions(roleId: string, permissionIdList: string[]): Promise<void> {
    return await this.http.delete(`/roles/${roleId}/permissions`, permissionIdList)
  }

  /**
   * @param roleId Role identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getUsers(
    roleId: string,
    queryParams?: {
      limit?: number
      offset?: number
      q?: string
      sort_by?: string | string[]
      fields?: string | string[]
    },
  ): Promise<{ total: number; results: User[] }> {
    return await this.http.get(`/roles/${roleId}/users${encodedQueryString(queryParams)}`)
  }
}
