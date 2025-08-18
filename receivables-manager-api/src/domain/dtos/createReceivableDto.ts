import { ReceivableEntity } from '../entities/receivableEntity';
import { BaseDto } from './baseDto';

export class CreateReceivableDto extends BaseDto<Props, ReceivableEntity> {
  constructor(props: Props) {
    super(props);
  }

  protected transform() {
    const { id, value, emissionDate, assignor } = this._request;
    const transformed = new ReceivableEntity({
      id,
      value,
      emissionDate,
      assignor,
    });

    this._transformedData = transformed;
  }
}

type Props = {
  id: string;
  value: number;
  emissionDate: Date;
  assignor: string;
};
