import { BaseRequestModel } from './baseRequest';
import {
  IsUUID,
  IsEmail,
  IsPhoneNumber,
  IsString,
  Length,
  Max,
  MaxLength,
} from 'class-validator';

export class CreateAssignorProps {
  @IsUUID()
  id: string;
  @IsString()
  @Length(11, 30)
  document: string;
  @IsEmail()
  @MaxLength(140)
  email: string;
  @IsPhoneNumber()
  @MaxLength(20)
  phone: string;
  @IsString()
  @MaxLength(140)
  name: string;
}

export class CreateAssignorRequestModel extends BaseRequestModel<CreateAssignorProps> {
  constructor(_data: CreateAssignorProps) {
    super(_data);
  }

  public get getData(): () => typeof this._data {
    return () => this._data;
  }

  public get getId(): () => string {
    return () => this.getData().id;
  }

  public get getValue(): () => string {
    return () => this.getData().document;
  }

  public get getEmail(): () => string {
    return () => this.getData().email;
  }

  public get getPhone(): () => string {
    return () => this.getData().phone;
  }

  public get getName(): () => string {
    return () => this.getData().name;
  }
}
