import { FormComposer, Loader,Header } from "@egovernments/digit-ui-react-components";
import React, {  useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { newConfig } from "../../../../components/config/dr-config";
import { convertEpochToDate, pdfDownloadLink } from "../../../../components/Utils";
const WmsWsrCreate = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();  
  const [isLoading, setIsLoading] = useState(false);
  const [canSubmit, setSubmitValve] = useState(false);
  const [showToast, setShowToast] = useState(null);
  const onSubmit = (data) => {
    setIsLoading(true);
    let WsrApplications = 
      {
        WsrApplication: [{
          project_name: data?.WmsWsrPrjName?.project_name,  
          work_name: data?.WmsWsrWorkName?.work_name,  
          milestone_name: data?.WmsWsrMLName?.milestone_name,
          percent_weightage: data?.WmsWsrPercent?.percent_weightage,
          tenantId:tenantId
        }],
      };
    
      /* use customiseCreateFormData hook to make some chnages to the Employee object [0].WsreduleOfRateApplication*/
     Digit.WMSService.PHMApplications.create(WsrApplications.WsrApplication[0], tenantId).then((result,err)=>{
      setIsLoading(false);
       history.push("/upyog-ui/citizen/wms/dr-home");
     })
     .catch((e) => {
     console.log("err");
    });
  };

  

  if (isLoading) {
    return <Loader />;
  }
  const configs = newConfig?newConfig:newConfig;

  return (
    <div>
    <Header>{t("WMS_NEW_DR_FORM_HEADER")}</Header>
    <FormComposer
              head={t("WMS_DR_FORM_CREATE_HEAD")}
              label={t("WMS_COMMON_SAVE")}
              config={configs}
              onSubmit={onSubmit}
              fieldStyle={{ marginRight: 0 }}
            />
            {showToast && (
        <Toast
          error={showToast.key}
          label={t(showToast.label)}
          onClose={() => {
            setShowToast(null);
          }}
        />
      )}
            </div>
  );
};

export default WmsWsrCreate;
