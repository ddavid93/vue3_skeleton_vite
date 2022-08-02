import {IAxios} from "@/_core/interfaces/i-axios";
import {IRequestBuilder} from "@/_core/interfaces/i-request-builder";
import {AxiosService} from "@/_core/services/axios-service";
import {RequestBuilderService} from "@/_core/services/request-builder-service";

export class FacadeHttpService<T> {
	private readonly _axiosService: IAxios;
	private readonly _requestBuilderService: IRequestBuilder<T>;

	constructor(
		private readonly _axios?: IAxios,
		private readonly _requestBuilder?: IRequestBuilder<T>
	) {
		this._axiosService = _axios || new AxiosService();
		this._requestBuilderService = _requestBuilder || new RequestBuilderService();
	}

	get axiosService() {
		return this._axiosService
	}

	get requestBuilderService() {
		return this._requestBuilderService
	}
}
