import {Ticketing} from "@/apps/ticketing/models/ticketing";
import {HttpService} from "@/_core/services/http-service";

export class TicketingService extends HttpService<Ticketing> {
	url = "/ticketing/backend/tickets";
}
