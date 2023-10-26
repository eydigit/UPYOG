import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const FuCustomRatingMeter = () => {

  const dataSource = {
    chart: {
      caption: "Average Days to Resolve",
      subcaption: "Current Month",
      plotToolText: "Current Score: $value",
      chartBottomMargin: "100",
      lowerlimit: "0",
      upperlimit: "30",
      showvalue: "1",
      gaugeFillMix: "{dark-20},{light-10},{dark-20}",
      gaugeFillRatio: "15",
      showGaugeBorder: "0",
      theme: "fusion",
      showtooltip: "0"
    },
    colorrange: {
      color: [
        {
          minvalue: "0",
          maxvalue: "06",
          code: "#62B58F"
        },
        {
          minvalue: "06",
          maxvalue: "12",
          code: "#FFC533"
        },
        {
          minvalue: "12",
          maxvalue: "18",
          code: "#F2726F"
        },
        {
          minvalue: "18",
          maxvalue: "24",
          code: "#F2726F"
        },
        {
          minvalue: "24",
          maxvalue: "30",
          code: "#F2726F"
        }
      ]
    },
    dials: {
      dial: [
        {
          value: "05"
        }
      ]
    },
    "annotations": {
      "origw": "450",
      "origh": "300",
      "autoscale": "1",
      "showBelow": "0",
      "groups": [{
        "id": "arcs",
        "items": [
          {
            "id": "state-cs-bg",
            "type": "rectangle",
            "x": "$chartCenterX-140",
            "y": "$chartEndY - 75",
            "tox": "$chartCenterX + 140",
            "toy": "$chartEndY - 55",
            "fillcolor": "#6baa01"
          },
          {
            "id": "state-cs-text",
            "type": "Text",
            "color": "#ffffff",
            "label": "Previous month average resolution days : 9",
            "fontSize": "12",
            "align": "center",
            "x": "$chartCenterX + 10",
            "y": "$chartEndY - 65"
          },
          {
            "id": "store-cs-bg",
            "type": "rectangle",
            "x": "$chartCenterX-140",
            "y": "$chartEndY - 50",
            "tox": "$chartCenterX + 140",
            "toy": "$chartEndY - 30",
            "fillcolor": "#0075c2"
          },
          {
            "id": "state-cs-text",
            "type": "Text",
            "color": "#ffffff",
            "label": "Last year average resolution days : 6.8",
            "fontSize": "12",
            "align": "center",
            "x": "$chartCenterX + 10",
            "y": "$chartEndY - 40"
          }
        ]
      }]
    }
  };

    return <ReactFC
              type="angulargauge"
              width="100%"
              height="350"
              dataFormat="JSON"
              dataSource={dataSource}
            />
}


export default FuCustomRatingMeter;