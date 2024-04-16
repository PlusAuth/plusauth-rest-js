import type { CreateTicket } from '../models.js';

import { HttpService } from '../http.js';
export declare class TicketService extends HttpService {
  createResetPassword( data: CreateTicket ): Promise<Record<string, any>>;
  createVerifyEmail( data: CreateTicket ): Promise<Record<string, any>>;
}
