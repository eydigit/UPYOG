import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const FuCustomStacked = () => {

  const dataSource = {
    chart: {
      caption: "Grievance By Department & Status",
      showsum: "1",
      plottooltext: "$seriesName : <b>$dataValue</b>",
      theme: "fusion",
      useRoundEdges: "1",
      drawcrossline: "1"
    },
    categories: [
      {
        category: [
          {
            label: "Street Lights"
          },
          {
            label: "Building & Roads"
          },
          {
            label: "Health & Sanitation"
          },
          {
            label: "Operation & Maintenance"
          },
          {
            label: "Building Branch"
          },
          {
            label: "Citizen service desk"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Resolved",
        data: [
          {
            value: "350"
          },
          {
            value: "620"
          },
          {
            value: "410"
          },
          {
            value: "370"
          },
          {
            value: "720"
          },
          {
            value: "310"
          }
        ]
      },
      {
        seriesname: "Work In Progress",
        data: [
          {
            value: "210"
          },
          {
            value: "400"
          },
          {
            value: "450"
          },
          {
            value: "180"
          },
          {
            value: "570"
          },
          {
            value: "270"
          }
        ]
      },
      {
        seriesname: "Rejected",
        data: [
          {
            value: "180"
          },
          {
            value: "330"
          },
          {
            value: "230"
          },
          {
            value: "160"
          },
          {
            value: "440"
          },
          {
            value: "350"
          }
        ]
      }
    ]
  };

    return <ReactFC
              type="stackedcolumn2d"
              width="100%"
              height="350"
              dataFormat="JSON"
              dataSource={dataSource}
            />
}


export default FuCustomStacked;