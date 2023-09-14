import { FormComposer, Loader,Header } from "@egovernments/digit-ui-react-components";
import React, {  useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { newConfig } from "../../../../components/config/sor-config";
import { convertEpochToDate, pdfDownloadLink } from "../../../../components/Utils";
const WmsSorCreate = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();  
  const [isLoading, setIsLoading] = useState(false);
  const [canSubmit, setSubmitValve] = useState(false);
  const [showToast, setShowToast] = useState(null);
  const onSubmit = (data) => {
    setIsLoading(true);
    let ScheduleOfRateApplications = 
      {
        ScheduleOfRateApplication: [{
          sor_name: data?.WmsSorName?.sor_name,
          description_of_item: data?.WmsSorDescriptionOfItem?.description_of_item,  
          chapter: data?.WmsSorChapter?.chapter,
          item_no: data?.WmsSorItemNo?.item_no,        
          unit: data?.WmsSorUnit?.unit,
          rate: data?.WmsSorRate?.rate,         
          start_date: convertEpochToDate(data?.WmsSorStartDate?.start_date),
          end_date: convertEpochToDate(data?.WmsSorEndDate?.end_date),
          tenantId:tenantId
        }],
      };
    
      /* use customiseCreateFormData hook to make some chnages to the Employee object [0].ScheduleOfRateApplication*/
     Digit.WMSService.SORApplications.create(ScheduleOfRateApplications.ScheduleOfRateApplication[0], tenantId).then((result,err)=>{
      setIsLoading(false);
       history.push("/upyog-ui/citizen/wms/sor-home");
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
    <Header>{t("WMS_NEW_SOR_FORM_HEADER")}</Header>
    <FormComposer
              head={t("WMS_SOR_FORM_CREATE_HEAD")}
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

export default WmsSorCreate;
