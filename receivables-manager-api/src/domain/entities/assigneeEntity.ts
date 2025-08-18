import { Entity, EntityProps } from './entity';
import {
  DocumentValueObj,
  EmailValueObj,
  PhoneValueObj,
} from '@domain/valueObjects';

export class AssigneeEntity extends Entity<Props> {
  private readonly _document: DocumentValueObj;
  private readonly _email: EmailValueObj;
  private readonly _phone: PhoneValueObj;
  private readonly _name: string;

  constructor(props: Props) {
    super({ _id: props._id });
    this._document = new DocumentValueObj({ document: props.document });
    this._email = new EmailValueObj({ email: props.email });
    this._phone = new PhoneValueObj({ phone: props.phone });
    this._name = props.name;
    this.validate();
  }

  public get getDocument(): () => DocumentValueObj {
    return () => this._document;
  }

  public get getEmail(): () => EmailValueObj {
    return () => this._email;
  }

  public get getPhone(): () => PhoneValueObj {
    return () => this._phone;
  }

  public get getName(): () => string {
    return () => this._name;
  }

  public areEqualTo(other: typeof this): boolean {
    return String(this._id) === String(other._id);
  }

  public validate() {
    const { _email, _phone, _document } = this;

    return [_email, _phone, _document].some((v) => !v.validate());
  }
}
export interface Props extends EntityProps {
  document: string;
  email: string;
  phone: string;
  name: string;
}
