export interface ICustomDomain {
  domain: string;
  readonly validated: boolean;
  verification_values: {
    type: 'CNAME' | 'TXT',
    value: string
  }[]
}
