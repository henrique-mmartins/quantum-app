import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Gate} from "./types";
import {calculateEmulation} from "./Service";

const useStyle = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    width: '100px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '5px',
    minHeight: '60px',
  },
  functionBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    fontSize: '12px',
    border: 'solid 1px black',
    marginRight: '5px',
    '&:hover': {
      background: "#0037ff",
    },
  },
  block: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    fontSize: '12px',
    border: 'solid 1px black',
    marginRight: '5px',
    '&:hover': {
      background: "#f00",
    },
  },

});

interface MatrixProps {
  sequenceResult: (x: any) => void;
}

function Matrix(props: MatrixProps) {
  const classes = useStyle();
  const [sequence, setSequence] = useState<Gate[]>([]);
  const {sequenceResult} = props;

  const createOptions = (x: String) => (
    <div className={classes.functionBlock} onClick={() => handleAddBlock(x)}>
      {x.toString()}
    </div>
  );

  const handleAddBlock = (x: any) => {
    if (sequence.length < 10) {
      const copy = [...sequence];
      copy.push(x);
      setSequence(copy);
      compute(copy);
    }
  }

  const handleRemoveBlock = (index: number) => {
    const copy = [...sequence];
    copy.splice(index, 1)
    setSequence(copy);
  }

  const createBlock = (x: Gate, index: number) => (
    <div className={classes.block} onClick={() => handleRemoveBlock(index)}>
      {x.toString()}
    </div>
  );

  const compute = (data: Gate[]) => {
    calculateEmulation(data).then(response => {
      console.log(response);
      sequenceResult(response.data)
    });
  }

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <label className={classes.label}>functions</label>
        <div className={classes.row}>
          {Object.keys(Gate).filter(k => typeof Gate[k as any] === "number").map(key => createOptions(key))}
        </div>
      </div>
      <div className={classes.row}>
        <label className={classes.label}>sequence</label>
        <div className={classes.row}>
          {sequence.map((gate, index) => createBlock(gate, index))}
        </div>
      </div>
    </div>
  );
}

export default Matrix;
