import {  CitizenHomeCard, PTIcon } from "@egovernments/digit-ui-react-components";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouteMatch } from "react-router-dom";
import CitizenApp from "./pages/citizen";
import Create from "./pages/citizen/create/index";
// import EmployeeApp from "./pages/employee";
import WMSSelectName from "./pagecomponents/WMSSelectName";
import WMSSelectPhoneNumber from "./pagecomponents/WMSSelectPhoneNumber";
import WMSSelectGender from "./pagecomponents/WMSSelectGender";
import SelectEmailId from "./pagecomponents/SelectEmailId";
import WMSSelectPincode from "./pagecomponents/WMSSelectPincode";
import WMSSelectAddress from "./pagecomponents/WMSSelectAddress";
import SelectCorrespondenceAddress from "./pagecomponents/SelectCorrespondenceAddress";
import SelectDocuments from "./pagecomponents/SelectDocuments";
import WMSCard from "./components/config/WMSCard";
// import WMSManageApplication from "./pages/employee/WMSManageApplication";
// import RegisterDetails from "./pages/employee/RegisterDetails";
import Response from "./pages/citizen/create/Response";

const componentsToRegister = {
 Response,
  // RegisterDetails,
  // WMSManageApplication,
  WMSCard,
  SelectDocuments,
  SelectCorrespondenceAddress,
  WMSSelectAddress,
  WMSSelectPincode,
  SelectEmailId,
  WMSSelectGender,
  WMSSelectPhoneNumber,
  WMSSelectName,
  WMSCreate : Create,
};

export const WMSModule = ({ stateCode, userType, tenants }) => {
  const { path, url } = useRouteMatch();

  const moduleCode = "WMS";
  const language = Digit.StoreData.getCurrentLanguage();
  const { isLoading, data: store } = Digit.Services.useStore({ stateCode, moduleCode, language });

  if (userType === "citizen") {
    return <CitizenApp path={path} stateCode={stateCode} />;
  }

  // return <EmployeeApp path={path} stateCode={stateCode} />;
};

export const WMSLinks = ({ matchPath, userType }) => {
  console.log("WMS matchPath",matchPath)
  const { t } = useTranslation();


  const links = [
  
    {
      link: `${matchPath}/birth`,
      i18nKey: t("Create BirthRegistration"),
    },
   
   
  ];

  return <CitizenHomeCard header={t("BirthRegistration")} links={links} Icon={() => <PTIcon className="fill-path-primary-main" />} />;
};

export const initWMSComponents = () => {
  Object.entries(componentsToRegister).forEach(([key, value]) => {
    Digit.ComponentRegistryService.setComponent(key, value);
  });
};

