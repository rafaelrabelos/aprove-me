import { Entity, EntityProps } from './entity';
import { UUID } from 'crypto';
import { UuidValueObj } from '@domain/valueObjects';

export class ReceivableEntity extends Entity<Props> {
  private readonly _value: number;
  private readonly _emissionDate: Date;
  private readonly _assignorId: UuidValueObj;

  constructor(props: Props) {
    super({ _id: props._id });
    this._value = props.value;
    this._emissionDate = props.emissionDate;
    this._assignorId = new UuidValueObj({ uuid: props.assignor });
    this.validate();
  }

  public get getAssigneeId(): () => UUID {
    return () => this._assignorId.getAsUUID();
  }

  public get getValue(): () => number {
    return () => this._value;
  }

  public get getEmissionDate(): () => Date {
    return () => this._emissionDate;
  }

  public get getAssignorId(): () => UUID {
    return () => this._assignorId.getAsUUID();
  }

  public areEqualTo(other: typeof this): boolean {
    return String(this._id) === String(other._id);
  }

  public validate() {
    const { _assignorId } = this;

    return [_assignorId].some((v) => !v.validate());
  }
}
export interface Props extends EntityProps {
  assignee: string;
  value: number;
  emissionDate: Date;
  assignor: string;
}
