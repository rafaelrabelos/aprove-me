import ValueObject from '@domain/valueObjects/valueObject';
import { isValidUUID } from '@domain/validators/regex';
import { UUID } from 'crypto';

export class UuidValueObj extends ValueObject<Props> {
  private readonly _uuid: string;

  constructor(props: Props) {
    super({});
    this._uuid = props.uuid;
  }

  public get getValue(): () => string {
    return () => this._uuid;
  }

  public get getAsUUID(): () => UUID {
    return () => this._uuid as UUID;
  }

  public areEqualTo(other: typeof this): boolean {
    return other.getValue() === this.getValue();
  }

  public validate(): boolean {
    return isValidUUID(this._uuid);
  }
}

type Props = { uuid: string };
