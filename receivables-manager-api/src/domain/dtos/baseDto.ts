export abstract class BaseDto<T, P> {
  protected _transformedData: P;

  constructor(protected readonly _request: T) {
    this.transform();
  }

  protected abstract transform(): void;

  getData = (): P => this._transformedData;
}
