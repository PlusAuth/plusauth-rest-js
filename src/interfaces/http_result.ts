/**
 * @public
 */
export interface PaginatedResult<T> {
  results: T[];
  total: number;
}
