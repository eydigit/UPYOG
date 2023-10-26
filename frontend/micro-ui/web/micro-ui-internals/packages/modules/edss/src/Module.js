import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Loader, PrivateRoute, BreadCrumb } from "@egovernments/digit-ui-react-components";
import DashBoard from "./pages";
import DashBoardPT from "./pages";
import { Route, Switch, useRouteMatch, useLocation } from "react-router-dom";

const DssBreadCrumb = ({ location }) => {
  const { t } = useTranslation();
  const {fromModule=false,title}= Digit.Hooks.useQueryParams();
  const moduleName=Digit.Utils.dss.getCurrentModuleName();

  const crumbs = [
    {
      path: fromModule?`/digit-ui/employee/edss/dashboard/${fromModule}`:`/digit-ui/employee/edss/dashboard/${Digit.Utils.dss.getCurrentModuleName()}`,
      content: t(`ES_COMMON_DSS_${Digit.Utils.locale.getTransformedLocale(fromModule?fromModule:moduleName)}`),
      show: location.pathname.includes("dashboard") ? true : false,
    }
    ]
  return <BreadCrumb crumbs={crumbs?.filter(ele=>ele.show)} />;
};

const Routes = ({ path, stateCode}) => {
  const location = useLocation();
  const isMobile = window.Digit.Utils.browser.isMobile();
  console.log("isMobileEDSS =" + isMobile + " path =" + path + " statecode =" + stateCode);

  useEffect(() => {
    console.log('Current route path:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="chart-wrapper" style={isMobile ? {marginTop:"unset"} : {}}>
      <DssBreadCrumb location={location} />
      <Switch>
         <PrivateRoute path={`${path}/dashboard/:moduleCode`} component={() => <DashBoard stateCode={stateCode} />} />
      </Switch>
    </div>
  );
};

const EDSSModule = ({ stateCode, userType, tenants }) => {
  const moduleCode = "EDSS";
  const moduleName=Digit.Utils.dss.getCurrentModuleName();
  const { path, url } = useRouteMatch();
  const language = Digit.StoreData.getCurrentLanguage();
  const { isLoading, data: store } = Digit.Services.useStore({ stateCode, moduleCode, language });

  if (isLoading) {
    return <Loader />;
  }

  Digit.SessionStorage.set("DSS_TENANTS", tenants);

  if (userType !== "citizen") {
    return <Routes path={path} stateCode={stateCode} />;
  }
};

const componentsToRegister = {
  EDSSModule
};

export const initEDSSComponents = () => {
  Object.entries(componentsToRegister).forEach(([key, value]) => {
    Digit.ComponentRegistryService.setComponent(key, value);
  });
};
