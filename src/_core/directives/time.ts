import moment from "moment";
import {useLocaleStore} from "@/_core/stores/locale-store";

const store = useLocaleStore();
const lang = store.language;

moment().locale(lang);
export const timeAgo = {
	mounted: (el: Element, binding) =>
		(el.innerHTML = moment(binding.value).fromNow()),
};
