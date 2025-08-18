import ValueObject from '@domain/valueObjects/valueObject';
import { isValidDocument } from '@domain/validators/regex';
import { DocumentTypes } from '@src/domain/enums/documents';

export class DocumentValueObj extends ValueObject<Props> {
  private readonly _document: string;
  private readonly _type: DocumentTypes;
  private readonly _cpfLength: number = 11;
  private readonly _cnpjLength: number = 14;

  constructor(props: Props) {
    super({});
    this._document = props.document;
    this._type = this.getDocumentType();
  }

  private getDocumentType(): DocumentTypes {
    if (this._document.length === this._cpfLength) {
      return DocumentTypes.CPF;
    } else if (this._document.length === this._cnpjLength) {
      return DocumentTypes.CNPJ;
    } else {
      throw new Error('Invalid document structure/length');
    }
  }

  public get getValue(): () => string {
    return () => this._document;
  }

  public get getType(): () => DocumentTypes {
    return () => this._type;
  }

  public areEqualTo(other: typeof this): boolean {
    return other.getValue() === this.getValue();
  }

  public validate(): boolean {
    return isValidDocument(this._document, this.getType());
  }
}

type Props = { document: string };
