import objectPath from "object-path";
import merge from "deepmerge";
import layoutConfig from "@/_metronic/core/config/DefaultLayoutConfig";
import {Mutations} from "@/_metronic/store/enums/StoreEnums";
import {Module, Mutation, VuexModule} from "vuex-module-decorators";
import LayoutConfigTypes from "@/_metronic/core/config/LayoutConfigTypes";

interface StoreInfo {
	config: LayoutConfigTypes;
	initial: LayoutConfigTypes;
}

@Module
export default class ConfigModule extends VuexModule implements StoreInfo {
	config = layoutConfig;
	initial = layoutConfig;

	/**
	 * Get config from layout config
	 * @returns {function(path, defaultValue): *}
	 */
	get layoutConfig() {
		return (path, defaultValue) => {
			return objectPath.get(this.config, path, defaultValue);
		};
	}

	@Mutation
	[Mutations.SET_LAYOUT_CONFIG](payload): void {
		this.config = payload;
	}

	@Mutation
	[Mutations.RESET_LAYOUT_CONFIG]() {
		this.config = Object.assign({}, this.initial);
	}

	@Mutation
	[Mutations.OVERRIDE_LAYOUT_CONFIG](): void {
		this.config = this.initial = Object.assign(
			{},
			this.initial,
			JSON.parse(window.localStorage.getItem("config") || "{}")
		);
	}

	@Mutation
	[Mutations.OVERRIDE_PAGE_LAYOUT_CONFIG](payload): void {
		this.config = merge(this.config, payload);
	}
}
