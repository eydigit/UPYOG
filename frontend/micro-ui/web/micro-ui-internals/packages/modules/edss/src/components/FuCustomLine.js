import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const FuCustomLine = () => {

  const dataSource = {
    chart: {
      caption: "Grievance analysis of previous years",
      yaxisname: "Cases",
      subcaption: "2019-2023",
      showhovereffect: "1",
      numbersuffix: "%",
      drawcrossline: "1",
      theme: "fusion"
    },
    categories: [
      {
        category: [
          {
            label: "2019"
          },
          {
            label: "2020"
          },
          {
            label: "2021"
          },
          {
            label: "2022"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "2019",
        data: [
          {
            value: "62"
          },
          {
            value: "64"
          },
          {
            value: "64"
          },
          {
            value: "66"
          },
          {
            value: "78"
          }
        ]
      },
      {
        seriesname: "2020",
        data: [
          {
            value: "16"
          },
          {
            value: "28"
          },
          {
            value: "34"
          },
          {
            value: "42"
          },
          {
            value: "54"
          }
        ]
      },
      {
        seriesname: "2021",
        data: [
          {
            value: "20"
          },
          {
            value: "22"
          },
          {
            value: "27"
          },
          {
            value: "22"
          },
          {
            value: "29"
          }
        ]
      },
      {
        seriesname: "2022",
        data: [
          {
            value: "18"
          },
          {
            value: "19"
          },
          {
            value: "21"
          },
          {
            value: "21"
          },
          {
            value: "24"
          }
        ]
      }
    ]
  };

    return <ReactFC
              type="msline"
              width="100%"
              height="350"
              dataFormat="JSON"
              dataSource={dataSource}
            />
}


export default FuCustomLine;