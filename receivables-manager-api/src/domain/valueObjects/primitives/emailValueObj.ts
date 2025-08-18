import ValueObject from '@domain/valueObjects/valueObject';
import { isValidEmail } from '@domain/validators/regex';

export class EmailValueObj extends ValueObject<Props> {
  private readonly _email: string;

  constructor(props: Props) {
    super({});
    this._email = props.email;
  }

  public get getValue(): () => string {
    return () => this._email;
  }

  public areEqualTo(other: typeof this): boolean {
    return other.getValue() === this.getValue();
  }

  public validate(): boolean {
    return isValidEmail(this._email);
  }
}

type Props = { email: string };
