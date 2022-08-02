import {useTicketsStore} from "@/apps/ticketing/stores/ticketing.store";
import {StoreDefinitionType, StoreNameType} from "@/_core/types/store-name-type";
import {IModel} from "@/_core/interfaces/i-model";

const storeMap = {
    'tickets': useTicketsStore
} as Record<StoreNameType, StoreDefinitionType<IModel, StoreNameType>>;

export const storeMapFactory =
    <Model extends IModel>(name: StoreNameType) =>
        storeMap[name] as StoreDefinitionType<Model, StoreNameType> | undefined