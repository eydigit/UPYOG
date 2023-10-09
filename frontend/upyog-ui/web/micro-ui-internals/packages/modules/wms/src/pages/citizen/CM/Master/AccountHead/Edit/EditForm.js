import React, { useEffect, useState } from "react";
import { newConfig } from "../../../../../../config/contactMaster/AccountHeadConfig";
import { FormComposer, Toast } from "@egovernments/digit-ui-react-components";
import {useHistory} from 'react-router-dom'

const EditForm=({ tenantId, data })=>{
  const history = useHistory();
  const [canSubmit, setSubmitValve] = useState(true);
  const {mutate,isSuccess,isError,error} = Digit?.Hooks?.wms?.cm?.useWMSMaster(tenantId,"WMS_ACCOUNT_HEAD_UPDATE");
  console.log({isSuccess,isError,error})
  const [showToast, setShowToast] = useState(false);
  const closeToast = () => {
    setShowToast(false);
  };
  useEffect(()=>{
    if(showToast){
    setTimeout(() => {
      closeToast();
      // history.replace('/upyog-ui/citizen/wms/vendor-sub-type/list')
      history.push('/upyog-ui/citizen/wms/account-head/list')

      
    }, 5000);
  }
  },[showToast])
  useEffect(()=>{if(isSuccess){setShowToast(true);}else if(isError){alert("Something wrong in updated bank record")}else{}},[isSuccess])

  const defaultValues = {
    WmsAHName:{primary_accounthead_name: data?.primary_accounthead_name},
    WmsAHLocation:{primary_accounthead_location: data?.primary_accounthead_location},
    WmsAHAccountno:{primary_accounthead_accountno: data?.primary_accounthead_accountno},
    WmsAHStatus:{name: data?.account_status},
  }

  const onFormValueChange = (setValue = true, formData) => { };
    const onSubmit=async(item)=>{
        console.log("data vendor type ",item)
        
        const payloadData={"WMSPrimaryAccountHeadApplication": [{
          "primary_accounthead_id":data?.primary_accounthead_id,
            "primary_accounthead_name": item?.WmsAHName?.primary_accounthead_name,   
            "primary_accounthead_accountno": item?.WmsAHAccountno?.primary_accounthead_accountno,   
            "primary_accounthead_location": item?.WmsAHLocation?.primary_accounthead_location,   
            "account_status": item?.WmsAHStatus?.name,
          "tenantId":tenantId
      }]}
        console.log("payloadData ",payloadData)
       await mutate(payloadData)
    }
    const config = newConfig?newConfig:newConfig;
return (
    <React.Fragment>

<FormComposer
        // heading={t("HR_COMMON_EDIT_EMPLOYEE_HEADER")}
        heading={"Account Head Edit"}
        isDisabled={!canSubmit}
        // label={t("HR_COMMON_BUTTON_SUBMIT")}
        label={"Update"}
        config={config.map((config) => {
          return {
            ...config,
            body: config.body.filter((a) => !a.hideInEmployee),
          };
        })}
        fieldStyle={{ marginRight: 0 }}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        onFormValueChange={onFormValueChange}
      /> 
      {/* {showToast&&isError && <Toast error={showToast.key} label={t('Something went wrong!')} onClose={closeToast} />}
      {showToast&&isSuccess && <Toast label={t('Record updated successfully')} onClose={closeToast} />} */}

       {/* <FormComposer
            heading="Bank Edit"
            label="Save"
            // config={configs}
            config={configs.map((config) => {
                return {
                ...config,
                body: config.body.filter((a) => !a.hideInEmployee),
                };
            })}
            onSubmit={onSubmit}
            fieldStyle={{ marginRight: 0,"position":"initial" }}
            buttonStyle={{marginRight: 10,"position":"initial"}}
            // childrenAtTheBottom={true}        
        /> */}
      {showToast&&isError && <Toast label={'Something wrong'} onClose={closeToast} />}
      {showToast&&isSuccess && <Toast label={'Record updated successfully'} onClose={closeToast} />}

    </React.Fragment>
)
}

export default EditForm;