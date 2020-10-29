export enum Gate {
  CNOT,
  Fourier,
  H,
  Measure,
  X,
  Y,
  Z,
  Phase,
  SqrtNOT,
  SWAP,
}

export interface GateResult {
  zero: string;
  one: string;
}