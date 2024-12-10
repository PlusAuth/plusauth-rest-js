import { HttpService } from "../http"
import type { Permission } from "../models"
import type { CreatePermission } from "../models"
import type { Resource } from "../models"
import type { CreateResource } from "../models"
import type { UpdateResource } from "../models"
import { encodedQueryString } from "../utils"

export class ResourceService extends HttpService {
  /**
   * @param resourceId Resource identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getPermissions(
    resourceId: string,
    queryParams?: {
      limit?: number
      offset?: number
      q?: string
      sort_by?: string | string[]
      fields?: string | string[]
    },
  ): Promise<Record<string, any>> {
    return await this.http.get(
      `/resources/${resourceId}/permissions/${encodedQueryString(queryParams)}`,
    )
  }

  /**
   * @param resourceId Resource identifier
   * @param data Permission object
   */
  async createPermission(resourceId: string, data: CreatePermission): Promise<Permission> {
    return await this.http.post(`/resources/${resourceId}/permissions/`, data)
  }

  /**
   * @param resourceId Resource identifier
   * @param permissionId Permission identifier
   */
  async removePermission(resourceId: string, permissionId: string): Promise<void> {
    return await this.http.delete(`/resources/${resourceId}/permissions/${permissionId}`)
  }

  /**
   * @param resourceId Resource identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getAuthorizedClients(
    resourceId: string,
    queryParams?: {
      limit?: number
      offset?: number
      q?: string
      sort_by?: string | string[]
      fields?: string | string[]
    },
  ): Promise<Record<string, any>> {
    return await this.http.get(
      `/resources/${resourceId}/authorized_clients/${encodedQueryString(queryParams)}`,
    )
  }

  /**
   * @param resourceId Resource identifier
   * @param clientIdList List of client ID's to be authorized
   */
  async authorizeClients(resourceId: string, clientIdList: string[]): Promise<void> {
    return await this.http.post(`/resources/${resourceId}/authorized_clients/`, clientIdList)
  }

  /**
   * @param resourceId Resource identifier
   * @param clientIdList List of client ID's to be unauthorized
   */
  async unauthorizeClients(resourceId: string, clientIdList: string[]): Promise<void> {
    return await this.http.delete(`/resources/${resourceId}/authorized_clients/`, clientIdList)
  }

  /**
   * @param resourceId Resource identifier
   * @param clientId Client identifier
   */
  async getAssignedPermissionsToClient(
    resourceId: string,
    clientId: string,
  ): Promise<Permission[]> {
    return await this.http.get(
      `/resources/${resourceId}/authorized_clients/${clientId}/permissions/`,
    )
  }

  /**
   * @param resourceId Resource identifier
   * @param clientId Client identifier
   * @param permissionIdList List of permission ID's to be authorized
   */
  async authorizePermissionsToClient(
    resourceId: string,
    clientId: string,
    permissionIdList: string[],
  ): Promise<void> {
    return await this.http.post(
      `/resources/${resourceId}/authorized_clients/${clientId}/permissions/`,
      permissionIdList,
    )
  }

  /**
   * @param resourceId Resource identifier
   * @param clientId Client identifier
   * @param permissionIdList List of permission ID's to be unauthorized
   */
  async unauthorizePermissionsFromClient(
    resourceId: string,
    clientId: string,
    permissionIdList: string[],
  ): Promise<void> {
    return await this.http.delete(
      `/resources/${resourceId}/authorized_clients/${clientId}/permissions/`,
      permissionIdList,
    )
  }

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
    return await this.http.get(`/resources/${encodedQueryString(queryParams)}`)
  }

  /**
   * @param data Resource Object with name and description properties.
   */
  async create(data: CreateResource): Promise<Resource> {
    return await this.http.post(`/resources/`, data)
  }

  /**
   * @param resourceId Resource identifier
   */
  async get(resourceId: string): Promise<Resource> {
    return await this.http.get(`/resources/${resourceId}`)
  }

  /**
   * @param resourceId Resource identifier
   * @param data Resource Object with name and description properties.
   */
  async update(resourceId: string, data: UpdateResource): Promise<Resource> {
    return await this.http.patch(`/resources/${resourceId}`, data)
  }

  /**
   * @param resourceId Resource identifier
   */
  async remove(resourceId: string): Promise<void> {
    return await this.http.delete(`/resources/${resourceId}`)
  }
}
