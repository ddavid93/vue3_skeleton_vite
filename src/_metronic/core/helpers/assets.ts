import {illustrationsSet} from "@/_metronic/core/helpers/config";

export const getIllustrationsPath = (illustrationName: string): string => {
	return `/media/illustrations/${illustrationsSet.value}/${illustrationName}`;
};
