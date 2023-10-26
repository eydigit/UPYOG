import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const FuCustomBar = ({config, data, type}) => {
  const dataSource = {
    chart: config,
    data: data
  };
  
    return <ReactFC
              type={type}
              width="100%"
              height="350"
              dataFormat="JSON"
              dataSource={dataSource}
            />
}


export default FuCustomBar;