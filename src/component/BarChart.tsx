import React from 'react';
import {Bar} from 'react-chartjs-2';
import {makeStyles} from "@material-ui/core/styles";
import {GateResult} from "./types";

const useStyle = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '500px',
  },
  label: {
    width: '100px',
  },
});

interface BarChartProps {
  dataSet: any[]
}

const colors = [
  '#c2d8fa',
  '#a2c4f8',
  '#82aff5',
  '#639bf3',
  '#4387f1',
  '#2473ee',
  '#1162df',
  '#0f54bf',
  '#0c46a0',
  '#0a3880'
];
const colorsHighlight = [
  '#e5c594',
  '#dfb679',
  '#d8a75e',
  '#d29842',
  '#c3882f',
  '#a87528',
  '#8c6122',
  '#7f581e',
  '#714e1b',
  '#563b15'
];


function BarChart(props: BarChartProps) {
  const classes = useStyle();
  const {dataSet} = props;

  const computeDate = (data: GateResult[]) => {

    const dataSet = {
      labels: data.map((x, index) => `Fase-${index}`),
      datasets: [
        {
          label: '1',
          data: data.map(x => x.one),
          backgroundColor: colors.slice(0, data.length),
          hoverBackgroundColor: colorsHighlight.slice(0, data.length),
        }, {
          label: '0',
          data: data.map(x => x.zero),
          backgroundColor: colors.slice(0, data.length),
          hoverBackgroundColor: colorsHighlight.slice(0, data.length),
        }
      ],
    };

    return dataSet;
  }

  let testData: GateResult[] = [
    {"zero": "0.01", "one": "0.01"},
    {"zero": "0.71", "one": "0.71"},
    {"zero": "0.31", "one": "0.51"},
    {"zero": "0.81", "one": "0.21"},
    {"zero": "0.11", "one": "0.51"},
    {"zero": "0.51", "one": "0.21"},
    {"zero": "0.51", "one": "0.91"},
    {"zero": "0.81", "one": "0.21"},
    {"zero": "0.81", "one": "0.21"},
    {"zero": "0.81", "one": "0.21"},
    {"zero": "0.91", "one": "0.1"},
  ];

  return (
    <div className={classes.root}>
      <label className={classes.label}>Result</label>
      <div>
        <Bar
          data={computeDate(testData)} width={400} height={200}
          options={{
            maintainAspectRatio: false,
            legend: {position: 'bottom'},
            scales: {yAxes: [{ticks: {min: 0}}]}
          }}
        />
      </div>
    </div>
  );
}

export default BarChart;
