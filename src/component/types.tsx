export enum Gate {
  C,
  H,
  X,
  Y,
  Z,
  M,
}

export interface GateResult {
  zero: string;
  one: string;
}