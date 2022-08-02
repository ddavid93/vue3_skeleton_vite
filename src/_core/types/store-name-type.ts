import {storesNameConf} from "@/_core/conf/stores-name-conf";
import {_ActionsTree, _GettersTree, StateTree, StoreDefinition} from "pinia";
import {IModel} from "@/_core/interfaces/i-model";

export type StoreNameType = typeof storesNameConf[number];

export type StoreDefinitionType<Model extends IModel, StoreName extends StoreNameType> =
    StoreDefinition<StoreName, StateType<Model>, _GettersTree<StateTree>, ActionType>

export type StateType<Model extends IModel> = StateTree & { loading: boolean, items: Model[] }

export type ActionType = {
    fetch(refresh?: boolean): Promise<void>
    remove(id?: number): void
    removeAll(numbers: number[]): void
} & _ActionsTree;
