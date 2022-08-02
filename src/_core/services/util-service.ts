import {useI18n} from "vue-i18n";
import {inject, InjectionKey} from "vue";
import {storeMapFactory} from "@/_core/factory/store-map-factory";
import {StoreNameType} from "@/_core/types/store-name-type";
import {IModel} from "@/_core/interfaces/i-model";
import {IApiData} from "@/_core/interfaces/i-api-data";
import {AxiosResponse} from "axios";

export class UtilService {

    static mergeLocaleMessage(module, messages) {
        for (const k in messages) {
            useI18n().mergeLocaleMessage(k, {[module]: messages[k]});
        }
    }

    static getStore<Model extends IModel>(store: StoreNameType) {
        const storeFactory = storeMapFactory<Model>(store)
        if (!storeFactory) {
            throw Error(`Store ${store} does not exist, you must add it to: storeMapFactory`);
        }
        return storeFactory;
    }

    static injectStrict<T>(key: InjectionKey<T>, fallback?: T) {
        const resolved = inject(key, fallback);
        if (!resolved) {
            throw new Error(`Could not resolve ${key.description}`);
        }
        return resolved;
    }

    static defaultPaginationContent<Model extends IModel>(data: Model[]): AxiosResponse {
        return {
            data: {
                data,
                meta: {
                    pagination: {
                        total: data.length,
                        per_page: 10,
                        current_page: 1,
                        total_pages: 1,
                    }
                }
            },
            status: 0,
            statusText: 'Ok',
            headers: {},
            config: {}
        }
    }

}
