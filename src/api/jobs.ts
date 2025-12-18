import { HttpService } from "../http"
import type { CreateJob, Job, JobExecutionLogs, JobRun } from "../models"
import { encodedQueryString } from "../utils"

export class JobService extends HttpService {
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
  }): Promise<{ total: number; results: Job[] }> {
    return await this.http.get(`/jobs/${encodedQueryString(queryParams)}`)
  }

  /**
   * @param data Job object
   */
  async create(data: CreateJob): Promise<void> {
    return await this.http.post(`/jobs/`, data)
  }

  /**
   * @param jobId Job identifier
   */
  async get(jobId: string): Promise<Job> {
    return await this.http.get(`/jobs/${jobId}`)
  }

  /**
   * @param jobId Job identifier
   */
  async remove(jobId: string): Promise<void> {
    return await this.http.delete(`/jobs/${jobId}`)
  }

  /**
   * @param jobId Job identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getExecutions(
    jobId: string,
    queryParams?: {
      limit?: number
      offset?: number
      q?: string
      sort_by?: string | string[]
      fields?: string | string[]
    },
  ): Promise<{ total: number; results: JobRun[] }> {
    return await this.http.get(`/jobs/${jobId}/runs${encodedQueryString(queryParams)}`)
  }

  /**
   * @param jobId Job identifier
   * @param executionId Job Execution identifier
   * @param queryParams Query parameters
   * @param queryParams.limit Limit the number of results returned
   * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
   * @param queryParams.q Additional query in [PlusAuth Query Language](/api/core/query-syntax) format.
   * @param queryParams.sort_by Properties that should be ordered by, with their ordering type. To define order type append it to the field with dot. You can pass this parameter multiple times or you can include all values separated by commas.
   * @param queryParams.fields Include only defined fields. You can pass this parameter multiple times or you can include all values separated by commas.
   */
  async getExecutionDetails(
    jobId: string,
    executionId: string,
    queryParams?: {
      limit?: number
      offset?: number
      q?: string
      sort_by?: string | string[]
      fields?: string | string[]
    },
  ): Promise<JobRun> {
    return await this.http.get(
      `/jobs/${jobId}/runs/${executionId}${encodedQueryString(queryParams)}`,
    )
  }

  /**
 * Execution logs may contain additional properties depending on the job type.

 * @param jobId Job identifier
 * @param executionId Job Execution identifier
 * @param queryParams Query parameters
 * @param queryParams.limit Limit the number of results returned
 * @param queryParams.offset Page number of records you wish to skip before selecting records. Final skipped records count would be `limit * offset`.
 */
  async getExecutionLogs(
    jobId: string,
    executionId: string,
    queryParams?: { limit?: number; offset?: number },
  ): Promise<{
    total: number
    results: JobExecutionLogs[]
    limit: number
    offset: number
    length: number
    fields: string[]
  }> {
    return await this.http.get(
      `/jobs/${jobId}/runs/${executionId}/logs${encodedQueryString(queryParams)}`,
    )
  }
}
