/**
 * @public
 */
export interface IPagination {
  page?: number;
  itemsPerPage?: number;
  sortBy?: string;
  q?: string;
  sortDesc?: boolean;
}
