/* eslint-disable */

/**
 * Sample for Stock Chart with Default
 */

import * as React from "react";

import {
  StockChartComponent,
  StockChartSeriesCollectionDirective,
  StockChartSeriesDirective,
  Inject,
  DateTime,
  Tooltip,
  RangeTooltip,
  Crosshair,
  LineSeries,
  SplineSeries,
  CandleSeries,
  HiloOpenCloseSeries,
  HiloSeries,
  RangeAreaSeries,
  Trendlines,
} from "@syncfusion/ej2-react-charts";
import {
  EmaIndicator,
  RsiIndicator,
  BollingerBands,
  TmaIndicator,
  MomentumIndicator,
  SmaIndicator,
  AtrIndicator,
  AccumulationDistributionIndicator,
  MacdIndicator,
  StochasticIndicator,
  Export,
} from "@syncfusion/ej2-react-charts";

import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Draggable from "react-draggable";

const SAMPLE_CSS = `
     .control-fluid {
         padding: 0px !important;
     }
         .charts {
             align :center
         }`;
export let tooltipRender = (args) => {
  if (args.text.split("<br/>")[4]) {
    let target = parseInt(
      args.text.split("<br/>")[4].split("<b>")[1].split("</b>")[0]
    );
    let value = (target / 100000000).toFixed(1) + "B";
    args.text = args.text.replace(
      args.text.split("<br/>")[4].split("<b>")[1].split("</b>")[0],
      value
    );
  }
};

function ChartOld() {
  let series1 = [];
  let point1;
  let value = 80;
  let i, j, k;
  for (i = 1; i < 31; i++) {
    for (j = 1; j < 13; j++) {
      for (k = 1; k < 25; k++) {
        point1 = {
          x: new Date(2000, j, i, k),
          open: Math.random() * 100,
          high: Math.random() * 100,
          low: Math.random() * 100,
          close: Math.random() * 100,
          volume: Math.random() * 1000000,
        };

        series1.push(point1);
      }
    }
  }
  return (
    <Draggable>
      <div
        className="control-pane"
        style={{
          position: "absolute",
          zIndex: 2000,
          backgroundColor: "#FFFFFF",
          margin: "2em 2em",
          //   width: "60%",
          boxShadow: " 1px 1px 8px 3px grey",

          // boxShadow: " -1px 5px 30px -8px grey",
        }}
      >
        <MDBContainer>
          <MDBRow>
            <style>{SAMPLE_CSS}</style>
            <MDBCol className="col-md-5">
              <div className="control-section">
                <StockChartComponent
                  id="stockchartdefault"
                  primaryXAxis={{
                    valueType: "DateTime",
                    majorGridLines: { width: 0 },
                    majorTickLines: { color: "transparent" },
                    crosshairTooltip: { enable: true },
                  }}
                  primaryYAxis={{
                    labelFormat: "n0",
                    lineStyle: { width: 0 },
                    rangePadding: "None",
                    majorTickLines: { width: 0 },
                  }}
                  chartArea={{ border: { width: 0 } }}
                  tooltip={{ enable: true, shared: true }}
                  tooltipRender={tooltipRender}
                  crosshair={{ enable: true }}
                  load={load.bind(this)}
                  title="AAPL Stock Price"
                >
                  <Inject
                    services={[
                      DateTime,
                      Tooltip,
                      RangeTooltip,
                      Crosshair,
                      LineSeries,
                      SplineSeries,
                      CandleSeries,
                      HiloOpenCloseSeries,
                      HiloSeries,
                      RangeAreaSeries,
                      Trendlines,
                      EmaIndicator,
                      RsiIndicator,
                      BollingerBands,
                      TmaIndicator,
                      MomentumIndicator,
                      SmaIndicator,
                      AtrIndicator,
                      Export,
                      AccumulationDistributionIndicator,
                      MacdIndicator,
                      StochasticIndicator,
                    ]}
                  />
                  <StockChartSeriesCollectionDirective>
                    <StockChartSeriesDirective
                      dataSource={series1}
                      xName="x"
                      type="Candle"
                      animation={{ enable: true }}
                    ></StockChartSeriesDirective>
                  </StockChartSeriesCollectionDirective>
                </StockChartComponent>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Draggable>
  );
  function load(args) {
    let selectedTheme = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "Material";
    args.stockChart.theme = (
      selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
    ).replace(/-dark/i, "Dark");
  }
}

export default ChartOld;
