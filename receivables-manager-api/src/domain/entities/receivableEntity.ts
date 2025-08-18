import { Entity, EntityProps } from './entity';
import { UUID } from 'crypto';
import { UuidValueObj } from '@domain/valueObjects';

export class ReceivableEntity extends Entity<Props> {
  private readonly _value: number;
  private readonly _emissionDate: Date;
  private readonly _assignor: UuidValueObj;

  constructor(props: Props) {
    super({ id: props.id });
    this._value = props.value;
    this._emissionDate = props.emissionDate;
    this._assignor = new UuidValueObj({ uuid: props.assignor });
    this.validate();
  }

  public get getAssigneeId(): () => UUID {
    return () => this._assignor.getAsUUID();
  }

  public get getValue(): () => number {
    return () => this._value;
  }

  public get getEmissionDate(): () => Date {
    return () => this._emissionDate;
  }

  public get getAssignorId(): () => UUID {
    return () => this._assignor.getAsUUID();
  }

  public areEqualTo(other: typeof this): boolean {
    return String(this._id) === String(other._id);
  }

  public validate() {
    const { _assignor } = this;

    return [_assignor].some((v) => !v.validate());
  }
}
export interface Props extends EntityProps {
  value: number;
  emissionDate: Date;
  assignor: string;
}
