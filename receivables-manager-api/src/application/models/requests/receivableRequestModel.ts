import { BaseRequestModel } from './baseRequest';
import {
  IsDateString,
  IsNotEmpty,
  IsDecimal,
  IsUUID,
  isDateString,
  IsNumber,
} from 'class-validator';

export class CreateReceivableProps {
  @IsUUID()
  id: string;
  @IsNumber()
  value: number;
  @IsDateString()
  emissionDate: string;
  @IsUUID()
  assignor: string;
}

export class CreateReceivableRequestModel extends BaseRequestModel<CreateReceivableProps> {
  constructor(_data: CreateReceivableProps) {
    super(_data);
  }

  public get getData(): () => typeof this._data {
    return () => this._data;
  }

  public get getId(): () => string {
    return () => this.getData().id;
  }

  public get getValue(): () => number {
    return () => this.getData().value;
  }

  public get getEmissionDate(): () => Date {
    return () => new Date(this.getData().emissionDate);
  }

  public get getAssignor(): () => string {
    return () => this.getData().assignor;
  }
}
