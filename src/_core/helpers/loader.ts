import NProgress from 'nprogress';
import {createStore, GetterTree, MutationTree} from 'vuex';

interface LoaderState {
	loading: number;
}

const state: LoaderState = {
	loading: 0,
};

const getters: GetterTree<LoaderState, unknown> = {
	loading: state => state.loading,
};

const mutations: MutationTree<LoaderState> = {
	START_LOADING: state => state.loading++,
	FINISH_LOADING: state => state.loading--,
};

export const loader = createStore({state, getters, mutations})

export function executeProgressBarLoader(options?: object) {
	NProgress.configure({easing: 'ease', speed: 500, showSpinner: false, ...options});
	loader.watch(state => state.loading,
		(newVal: number, oldVal: number) => {
			if (newVal === 0) return NProgress.done();
			if (oldVal === 0) return NProgress.start();
			NProgress.set(1.8 / Math.max(oldVal, newVal));
		},
	);
}
