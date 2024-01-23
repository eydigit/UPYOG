import { CardLabel, CitizenInfoLabel, FormStep, Loader, Table, TextInput } from "@egovernments/digit-ui-react-components";
import React, { useState, useEffect } from "react";
import Timeline from "../../components/RAFB/Timeline";
// import { currentFinancialYear } from "../utils";

const TenderWorkDetails = ({ t, config, onSelect, value, userType, formData, digitTest="testqwert" }) => {
  console.log("Select Work Order No config,formData ",{config,formData})
  let validation = {};
  const onSkip = () => onSelect();
  // const [tenderDetails, setTenderDetails] = useState((formData.TenderWorkDetail?.siyaram)||{"workName":"","estimatedWorkCost":"","tenderType":"","value":"amount","":""} ); 
  // const [tenderDetails, setTenderDetails] = useState((formData.TenderWorkDetail?.workName && formData.TenderWorkDetail?.estimatedWorkCost && formData.TenderWorkDetail?.tenderType && formData.TenderWorkDetail?.value && formData.TenderWorkDetail?.amount)||{"workName":"","estimatedWorkCost":"","tenderType":"","value":"","amount":""} ); 
  const [tenderDetails, setTenderDetails] = useState({"workName":formData.TenderWorkDetail?.workName,"estimatedWorkCost":formData.TenderWorkDetail?.estimatedWorkCost ,"tenderType": formData.TenderWorkDetail?.tenderType, "value": formData.TenderWorkDetail?.value ,"amount": formData.TenderWorkDetail?.amount}||{"workName":"","estimatedWorkCost":"","tenderType":"","value":"","amount":""} ); 
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const stateId = Digit.ULBService.getStateId();
  const isEdit = window.location.href.includes("/edit-application/") || window.location.href.includes("renew-trade");
  const { isLoading, data: fydata = {} } = Digit.Hooks.tl.useTradeLicenseMDMS(stateId, "egf-master", "FinancialYear");
console.log("tenderDetails ",{"workName":formData.TenderWorkDetail?.workName,"estimatedWorkCost":formData.TenderWorkDetail?.estimatedWorkCost ,"tenderType": formData.TenderWorkDetail?.tenderType, "value": formData.TenderWorkDetail?.value ,"amount": formData.TenderWorkDetail?.amount})
  let mdmsFinancialYear = fydata["egf-master"] ? fydata["egf-master"].FinancialYear.filter(y => y.module === "TL") : [];
  let FY = mdmsFinancialYear && mdmsFinancialYear.length > 0 && mdmsFinancialYear.sort((x, y) => y.endingDate - x.endingDate)[0]?.code;
  function setSelectWorkName(e) {
    setTenderDetails({...tenderDetails,[e.target.name]:e.target.value});
  }

  useEffect(() => {
    localStorage.setItem("TLAppSubmitEnabled", "true");
  }, []);

  const goNext = () => {
    // const getCurrentFinancialYear = () => {
    //   var today = new Date();
    //   var curMonth = today.getMonth();
    //   var fiscalYr = "";
    //   if (curMonth > 3) {
    //     var nextYr1 = (today.getFullYear() + 1).toString();
    //     fiscalYr = today.getFullYear().toString() + "-" + nextYr1;
    //   } else {
    //     var nextYr2 = today.getFullYear().toString();
    //     fiscalYr = (today.getFullYear() - 1).toString() + "-" + nextYr2.slice(-2);
    //   }
    //   return fiscalYr;
    // };

    // sessionStorage.setItem("CurrentFinancialYear", FY);
    // sessionStorage.setItem("CurrentFinancialYear", getCurrentFinancialYear());
    // sessionStorage.setItem("CurrentFinancialYear", currentFinancialYear());
    onSelect(config.key, tenderDetails );
  };
  if (isLoading) {
    return <Loader />
  }

  return (
    <React.Fragment>
      {window.location.href.includes("/citizen") ? <Timeline currentStep={4} /> : null}
      <FormStep
        config={config}
        onSelect={goNext}
        onSkip={onSkip}
        t={t}
        // isDisabled={!WorkName}
      >
        <CardLabel>{`${t("WMS_RUNNING_ACCOUNT_FINAL_BILL_WORK_NAME")}`}</CardLabel>
        {/* <div>Tender Work Details</div>  */}
        <TextInput
          t={t}
          isMandatory={false}
          type={"text"}
          // optionKey="i18nKey"
          name="workName"
          value={tenderDetails.workName}
          onChange={setSelectWorkName}
          disable={isEdit}
          {...(validation = { pattern: "^[a-zA-Z-0-9_@/#&+-.`' ]*$", isRequired: true, title: t("TL_INVALID_TRADE_NAME") })}
        />
        <CardLabel>{`${t("Estimated Work Cost")}`}</CardLabel>
        <TextInput
          t={t}
          isMandatory={false}
          type={"text"}
          // optionKey="i18nKey"
          name="estimatedWorkCost"
          value={tenderDetails.estimatedWorkCost}
          onChange={setSelectWorkName}
          disable={isEdit}
          {...(validation = { pattern: "^[a-zA-Z-0-9_@/#&+-.`' ]*$", isRequired: true, title: t("TL_INVALID_TRADE_NAME") })}
        />
        <CardLabel>{`${t("Tender Type")}`}</CardLabel>
        <TextInput
          t={t}
          isMandatory={false}
          type={"text"}
          // optionKey="i18nKey"
          name="tenderType"
          value={tenderDetails.tenderType}
          onChange={setSelectWorkName}
          disable={isEdit}
          {...(validation = { pattern: "^[a-zA-Z-0-9_@/#&+-.`' ]*$", isRequired: true, title: t("TL_INVALID_TRADE_NAME") })}
        />
        <CardLabel>{`${t("Value")}`}</CardLabel>
        <TextInput
          t={t}
          isMandatory={false}
          type={"text"}
          // optionKey="i18nKey"
          name="value"
          value={tenderDetails.value}
          onChange={setSelectWorkName}
          disable={isEdit}
          {...(validation = { pattern: "^[a-zA-Z-0-9_@/#&+-.`' ]*$", isRequired: true, title: t("TL_INVALID_TRADE_NAME") })}
        />
        <CardLabel>{`${t("Amount")}`}</CardLabel>
        <TextInput
          t={t}
          isMandatory={false}
          type={"text"}
          // optionKey="i18nKey"
          name="amount"
          value={tenderDetails.amount}
          onChange={setSelectWorkName}
          disable={isEdit}
          {...(validation = { pattern: "^[a-zA-Z-0-9_@/#&+-.`' ]*$", isRequired: true, title: t("TL_INVALID_TRADE_NAME") })}
        />
      </FormStep>
      {<CitizenInfoLabel info={t("CS_FILE_APPLICATION_INFO_LABEL")} text={t("TL_LICENSE_ISSUE_YEAR_INFO_MSG") + FY} />}
    </React.Fragment>
  );
};

export default TenderWorkDetails;
