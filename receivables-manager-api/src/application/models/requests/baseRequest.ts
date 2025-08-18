export abstract class BaseRequestModel<T> {
  protected _data: T;

  constructor(data: T) {
    this._data = data;
  }

  abstract getData: () => T;
}
