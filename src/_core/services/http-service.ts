import {AxiosInstance, AxiosResponse} from "axios";
import {IRequestParams} from "@/_core/interfaces/i-request-params";
import {IApiData} from "@/_core/interfaces/i-api-data";
import {FacadeHttpService} from "@/_core/services/facade/facade-http-service";
import {IModel} from "@/_core/interfaces/i-model";
import {IHttp} from "@/_core/interfaces/i-http";

export abstract class HttpService<T extends IModel> implements IHttp<T> {

    private readonly _instance: AxiosInstance;
    private readonly _httpFacade: FacadeHttpService<T>;

    protected abstract url: string;

    constructor(private readonly _httpFacadeService?: FacadeHttpService<T>) {
        this._httpFacade = _httpFacadeService || new FacadeHttpService<T>()

        this._instance = this._httpFacade.axiosService.instance;
    }

    get(config: IRequestParams<T>): Promise<AxiosResponse<T>> {
        return this._instance.get(this._getRequest(config));
    }

    getItems(config: IRequestParams<T>): Promise<AxiosResponse<IApiData<T>>> {
        return this._instance.get(this._getRequest(config));
    }

    post(config: IRequestParams<T>): Promise<AxiosResponse<T>> {
        return this._instance.post(this._getRequest(config));
    }

    patch(config: IRequestParams<T>): Promise<AxiosResponse<T>> {
        return this._instance.patch(this._getRequest(config));
    }

    delete(config: IRequestParams<T>): Promise<AxiosResponse<T>> {
        return this._instance.delete(this._getRequest(config));
    }

    private _getRequest(config: IRequestParams<T>) {
        config.url = this.url;
        return this._httpFacade.requestBuilderService.buildRequest(config);
    }
}
