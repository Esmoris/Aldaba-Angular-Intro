export enum OperatorRanges {
  ORBITAL,
  INTERPLANETARY,
}
export enum OperatorStatus {
  ACTIVE,
  PENDING,
}
export class Operator {
  id: string;
  name: string;
  range: OperatorRanges;
  status: OperatorStatus;
}
