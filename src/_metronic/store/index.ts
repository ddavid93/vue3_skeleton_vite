import {createStore} from "vuex";
import {config} from "vuex-module-decorators";

import AuthModule from "@/_metronic/store/modules/AuthModule";
import BodyModule from "@/_metronic/store/modules/BodyModule";
import BreadcrumbsModule from "@/_metronic/store/modules/BreadcrumbsModule";
import ConfigModule from "@/_metronic/store/modules/ConfigModule";

config.rawError = true;

const store = createStore({
	modules: {
		AuthModule,
		BodyModule,
		BreadcrumbsModule,
		ConfigModule,
	},
});

export default store;
