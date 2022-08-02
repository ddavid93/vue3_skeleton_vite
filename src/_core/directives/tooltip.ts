import {Tooltip} from "bootstrap";
import {useLocaleStore} from "@/_core/stores/locale-store";
import moment from "moment";

const store = useLocaleStore();
const lang = store.language;
moment().locale(lang);
export const toolTip = {
	mounted: (el: Element, binding) => {
		const tooltip = new Tooltip(el, {
			trigger: "hover",
		});
		el.addEventListener("click", (l) => tooltip.hide());
	},
};
