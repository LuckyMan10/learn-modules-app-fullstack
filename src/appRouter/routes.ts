import {appRouterEnum} from "./enum";
import {AllModulesPage} from "@/pages/allModules";
import { AuthPage } from "@/pages/auth";
import {ActiveModulesPage} from "@/pages/activeModules";
import { ArchivePage } from "@/pages/archive";

const authRoutes = [
    {
        path: appRouterEnum.ALL_MODULES,
        Component: AllModulesPage
    },
    {
        path: appRouterEnum.ACTIVE_MODULES,
        Component: ActiveModulesPage
    },
    {
        path: appRouterEnum.ARCHIVE,
        Component: ArchivePage
    }
]

const publicRoutes = [
    {
        path: appRouterEnum.AUTH,
        Component: AuthPage
    }
]

export {
    authRoutes,
    publicRoutes
}