import { HttpService } from "../http"
import type { RoleGroup } from "../models"
import type { CreateRoleGroup } from "../models"
import type { UpdateRoleGroup } from "../models"
import { encodedQueryString } from "../utils"

export class RoleGroupService extends HttpService {
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
    return await this.http.get(`/role-groups/${encodedQueryString(queryParams)}`)
  }

  /**
   * @param data Role Group object
   */
  async create(data: CreateRoleGroup): Promise<RoleGroup> {
    return await this.http.post(`/role-groups/`, data)
  }

  /**
   * @param roleGroupId Role Group identifier
   */
  async get(roleGroupId: string): Promise<RoleGroup> {
    return await this.http.get(`/role-groups/${roleGroupId}`)
  }

  /**
   * @param roleGroupId Role Group identifier
   * @param data Object containing to be updated values
   */
  async update(roleGroupId: string, data: UpdateRoleGroup): Promise<RoleGroup> {
    return await this.http.patch(`/role-groups/${roleGroupId}`, data)
  }

  /**
   * @param roleGroupId Role Group identifier
   */
  async remove(roleGroupId: string): Promise<void> {
    return await this.http.delete(`/role-groups/${roleGroupId}`)
  }

  /**
   * @param roleGroupId Role Group identifier
   */
  async getRoles(roleGroupId: string): Promise<Record<string, any>> {
    return await this.http.get(`/role-groups/${roleGroupId}/roles`)
  }

  /**
   * @param roleGroupId Role Group identifier
   * @param roleIdList List of role ID's to be assigned to the role group
   */
  async assignRoles(roleGroupId: string, roleIdList: string[]): Promise<void> {
    return await this.http.post(`/role-groups/${roleGroupId}/roles`, roleIdList)
  }

  /**
   * @param roleGroupId Role Group identifier
   * @param roleIdList List of role ID's to be unassigned from the role group
   */
  async unassignRoles(roleGroupId: string, roleIdList: string[]): Promise<void> {
    return await this.http.delete(`/role-groups/${roleGroupId}/roles`, roleIdList)
  }

  /**
   * @param roleGroupId Role Group identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getUsers(
    roleGroupId: string,
    queryParams?: {
      limit?: number
      offset?: number
      q?: string
      sort_by?: string | string[]
      fields?: string | string[]
    },
  ): Promise<Record<string, any>> {
    return await this.http.get(
      `/role-groups/${roleGroupId}/users${encodedQueryString(queryParams)}`,
    )
  }
}
