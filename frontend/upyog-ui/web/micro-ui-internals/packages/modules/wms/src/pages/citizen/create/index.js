import { FormComposer, Loader } from "@egovernments/digit-ui-react-components";
import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom"
import { newConfig } from "../../../components/config/config";

const Create = () => {
 
  const { t } = useTranslation();
  const configs = newConfig?newConfig:newConfig;

  return (
    <FormComposer
    heading={t("Create Birth Registration WSS")}
    label={t("ES_COMMON_APPLICATION_SUBMIT")}
    config={configs.map((config) => {
      return {
        ...config,
        body: config.body.filter((a) => !a.hideInEmployee),
      };
    })}
  
    fieldStyle={{ marginRight: 0 }}
  />
  );
};

export default Create;