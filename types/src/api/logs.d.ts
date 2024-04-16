import { HttpService } from '../http.js';
export declare class LogService extends HttpService {
  getAll( queryParams?: {
    limit?: number;
    offset?: number;
    from?: string;
    to?: string;
    type?: string;
    operation?: string;
  } ): Promise<string[]>;
}
