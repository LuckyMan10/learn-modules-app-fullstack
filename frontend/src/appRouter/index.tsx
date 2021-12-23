import React, { useRef } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { SubHeaderNav } from "@/components/subHeaderNav";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { authRoutes, publicRoutes } from "./routes";
import {useContentHeight} from "@/app/hooks";
import { appRouterEnum } from "./enum";
import {AppStyle} from "./style";


const AppRouter: React.FC = () => {
    const auth = false;
    const appRef = useRef() as React.RefObject<HTMLDivElement>;
    const pageSize = useContentHeight(appRef);
    return (
        <AppStyle
            ref={appRef}
            pageSize={pageSize}
        >
            <Header />
            {auth && <SubHeaderNav />}
            <div className="content">
                <Switch>
                    {auth && authRoutes.map(({ path, Component }) =>
                        <Route key={path} path={path} component={Component} />
                    )}
                    {!auth && publicRoutes.map(({ path, Component }) =>
                        <Route key={path} path={path} component={Component} exact />
                    )}
                    {auth && <Redirect to={appRouterEnum.ALL_MODULES} />}
                    {!auth && <Redirect to={appRouterEnum.AUTH} />}
                </Switch>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </AppStyle>
    )
}

export {
    AppRouter
}