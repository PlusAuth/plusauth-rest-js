/**
 * @public
 */
export interface IApi {
  name: string;
  description?: string;
  readonly audience?: string;
  readonly system?: boolean;
}

export interface IAuthorizedClients {
  client_id: string;
  permissions: string[]
}
