import { HttpService } from '../http';
import { CreateTicket } from '../models';

export class TicketService extends HttpService {
  async createResetPassword( data: CreateTicket ): Promise<Record<string, any>> {
    return this.http.post( '/tickets/reset-password', data );
  }

  async createVerifyEmail( data: CreateTicket ): Promise<Record<string, any>> {
    return this.http.post( '/tickets/verify-email', data );
  }
}
