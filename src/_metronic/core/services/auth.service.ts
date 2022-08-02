import {Ticketing} from "@/apps/ticketing/models/ticketing";
import {HttpService} from "@/_core/services/http-service";

export class AuthService extends HttpService<Ticketing> {
	url = "/ticketing/backend/tickets";
}
