import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import FuCustomMultiChart from "../components/FuCustomMultiChart";
import FuCustomBar from "../components/FuCustomBar";
import FuCustomRatingMeter from "../components/FuCustomRatingMeter";
import FuCustomStacked from "../components/FuCustomStacked";
import FuCustomPieDonut from "../components/FuCustomPieDonut";
import FuCustomTable from "../components/FuCustomTable";
import HeaderBody from "../components/HeaderBody";
import { Row, Col } from "reactstrap";
import {CatWiseConfig,CatWiseSmpData,RptTimeWiseConfig,RptTimeWiseSmpData} from "../components/FuCustomConfing.js";

const DashBoard = ({stateCode}) => {

  const { moduleCode } = useParams();
  console.log("moduleCode= "+ moduleCode);
  const language = Digit.StoreData.getCurrentLanguage();
  const [chip, updateChip] = useState({});
  const { isLoading: localizationLoading, data: store } = Digit.Services.useStore({ stateCode, moduleCode, language });
  const { data: screenConfig, isLoading: isServicesLoading } = Digit.Hooks.dss.useMDMS(stateCode, "dss-dashboard", "DssDashboard", {
    select: (data) => {
      let screenConfig = data?.["dss-dashboard"]["dashboard-config"][0].MODULE_LEVEL;
      let reduced_array = [];
      for (let i = 0; i < screenConfig.length; i++) {
        if (screenConfig[i].dashboard !== null) {
          reduced_array.push(screenConfig[i]);
        }
      }

      const serviceJS = reduced_array.map((obj, idx) => {
        return {
          code: obj[Object.keys(obj)[0]].filterKey,
          name: Digit.Utils.locale.getTransformedLocale(`DSS_${obj[Object.keys(obj)[0]].services_name}`),
        };
      });
      return serviceJS;
    },
  });

  const { data: response, isLoading } = Digit.Hooks.dss.useDashboardConfig(moduleCode);
  const dashboardConfig = response?.responseData;
  console.log("response= "+ response);

  return (
  <div id="divToPrint">
  <div className="options">
    <h2>
     Grievance DashBoard
    </h2>
  </div>
  <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
    <HeaderBody></HeaderBody>
  </div>
  
    <Row>
        <Col lg="12" xl="8"  style={{padding: '5px'}}>
          <FuCustomStacked />
        </Col>
        <Col lg="12" xl="4"  style={{padding: '5px'}}>
          <FuCustomRatingMeter />
        </Col>     
    </Row>
    <Row>
        <Col lg="12" xl="7" style={{padding: '5px'}}>
           <FuCustomBar config={CatWiseConfig} data={CatWiseSmpData} type={'column2d'} /> 
        </Col>
        <Col lg="12" xl="5" style={{padding: '5px'}}>
           <FuCustomBar config={RptTimeWiseConfig} data={RptTimeWiseSmpData} type={'bar2d'} />
        </Col>   
    </Row>
    <Row>
        <Col lg="12" xl="5"  style={{padding: '4px'}}>
          <FuCustomPieDonut />
        </Col>
        <Col lg="12" xl="7"  style={{padding: '4px'}}>
          <FuCustomMultiChart /> 
        </Col>
    </Row>
    <Row>
        <Col lg="12" xl="12">
          <FuCustomTable />  
        </Col>  
    </Row> 
    <div>
       {dashboardConfig?.[0]?.visualizations
          .map((row, key) => {
              {row.vizArray.map(
                useCallback(
                  (chart, key) => {
                   
                  }, [chip]
                )
              )}
            }
        )}
    </div>         
  </div>
  );
};

export default DashBoard;
