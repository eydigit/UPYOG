import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const FuCustomPieDonut = () => {

  const dataSource = {
    chart: {
      caption: "Grievance Received By Channels",
      showPercentValues : 0,
      labelFontColor: "#000",
      theme: "fusion"
    },
    data: [
      {
        label: "IVR",
        value: "300"
      },
      {
        label: "WEB",
        value: "230"
      },
      {
        label: "WHATSAPP",
        value: "180"
      },
      {
        label: "MOBILE",
        value: "270"
      }
    ]
  };

    return <ReactFC
              type="pie2d"
              width="100%"
              height="350"
              dataFormat="JSON"
              dataSource={dataSource}
            />
};


export default FuCustomPieDonut;