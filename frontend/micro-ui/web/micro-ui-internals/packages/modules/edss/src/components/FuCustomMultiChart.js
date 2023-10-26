import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import {MonthWiseReceivedVsResolvedConfig} from "./FuCustomConfing.js";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const FuCustomMultiChart = () => {

  // STEP 2 - Chart Data
  const dataSource = {
    chart: MonthWiseReceivedVsResolvedConfig,
    categories: [
      {
        category: [
          {
            label: "Jan"
          },
          {
            label: "Feb"
          },
          {
            label: "Mar"
          },
          {
            label: "Apr"
          },
          {
              label: "May"
            },
            {
              label: "Jun"
            },
            {
              label: "Jul"
            },
            {
              label: "Aug"
            },

            {
                label: "Sep"
              },
              {
                label: "Oct"
              },
              {
                label: "Nov"
              },
              {
                label: "Dec"
              }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Received",
        data: [
          {
            value: "1441"
          },
          {
            value: "855"
          },
          {
            value: "911"
          },
          {
            value: "648"
          },
          {
              value: "1441"
            },
            {
              value: "855"
            },
            {
              value: "1011"
            },
            {
              value: "636"
            },
            {
                value: "1490"
              },
              {
                value: "852"
              },
              {
                value: "904"
              },
              {
                value: "648"
              }
        ]
      },
      {
        seriesname: "Resolved",
        renderas: "line",
        data: [
          {
            value: "143"
          },
          {
            value: "209"
          },
          {
            value: "220"
          },
          {
            value: "178"
          },
          {
              value: "114"
            },
            {
              value: "177"
            },
            {
              value: "220"
            },
            {
              value: "278"
            },
            {
                value: "143"
              },
              {
                value: "79"
              },
              {
                value: "226"
              },
              {
                value: "78"
              }
        ]
      }
    ]
  };

    return <ReactFC
              type="mscombi2d"
              width="100%"
              height="350"
              dataFormat="JSON"
              dataSource={dataSource}
            />
}


export default FuCustomMultiChart;