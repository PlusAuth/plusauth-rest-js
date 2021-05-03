export interface ILogQuery {
  from?: string,
  to?: string,
  type?: ( 'error' | 'warning' | 'info' )[],
  operation?: string[]
}
