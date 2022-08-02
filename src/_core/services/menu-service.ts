import {menuMapConf} from "@/_core/conf/menu-conf";

export class MenuService {
    static getMenu(pathName) {
        if (!pathName)
            throw new Error("Incorrect route path at some route.ts. Cannot access to a valid route name.");

        const name = pathName.split(".")[0];
        if (!menuMapConf[name])
            throw new Error("Invalid path name or not exist MenuConfig");
        return menuMapConf[name];
    }
}
