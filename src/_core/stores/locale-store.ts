import {defineStore} from "pinia";

export const useLocaleStore = defineStore("locale", {
	state: () => ({
		language: "en-En",
	}),
	actions: {},
});
