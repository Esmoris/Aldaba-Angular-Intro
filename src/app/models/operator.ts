export enum OperatorRanges {
  ORBITAL,
  INTERPLANETARY,
}
export enum OperatorStatus {
  ACTIVE,
  PENDING,
}
export class Operator {
  public id: string;
  public name: string;
  public range: OperatorRanges;
  public status: OperatorStatus;
}
