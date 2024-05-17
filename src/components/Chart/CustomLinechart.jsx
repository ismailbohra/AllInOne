import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Income",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "Expense",
          data: [51, 42, 109, 100, 31, 40, 28],
        },
      ],
      options: {
        chart: {
          height: 200,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "date",
          categories: [
            "2018-09-19",
            "2018-09-19",
            "2018-09-19",
            "2018-09-19",
            "2018-09-19",
            "2018-09-19",
            "2018-09-19",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        colors: ["#6FD943", "#FFA21D"],
        fill: {
          colors: ["#6FD943", "#FFA21D"],
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={280}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexChart;
