import ValueObject from '@domain/valueObjects/valueObject';
import { isValidPhone } from '@domain/validators/regex';

export class PhoneValueObj extends ValueObject<Props> {
  private readonly _phone: string;

  constructor(props: Props) {
    super({});
    this._phone = props.phone;
  }

  public get getValue(): () => string {
    return () => this._phone;
  }

  public areEqualTo(other: typeof this): boolean {
    return other.getValue() === this.getValue();
  }

  public validate(): boolean {
    return isValidPhone(this._phone);
  }
}

type Props = { phone: string };
