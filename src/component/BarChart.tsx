import React from 'react';
import {Bar} from 'react-chartjs-2';
import {makeStyles} from '@material-ui/core/styles';
import {GateResult} from './types';
import Card from '@material-ui/core/Card';
import {CardHeader} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  outerPaper: {
    margin: theme.spacing(4),
  },
  cardHeader: {
    textAlign: 'left',
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    margin: theme.spacing(2),
  },
  label: {
    width: '100px',
  },
}));

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
  const classes = useStyles();
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

  return (
    <Card className={classes.outerPaper}>
      <CardHeader className={classes.cardHeader} title="Result" />
      <Divider />
      <div className={classes.root}>
        <div>
          <Bar
            data={computeDate(dataSet)} width={800} height={400}
            options={{
              maintainAspectRatio: false,
              legend: {position: 'bottom'},
              scales: {yAxes: [{ticks: {min: 0}}]}
            }}

          />
        </div>
      </div>
    </Card>
  );
}

export default BarChart;
