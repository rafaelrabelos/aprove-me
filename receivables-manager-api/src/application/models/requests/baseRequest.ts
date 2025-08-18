export abstract class BaseRequestModel<T> {
  constructor(protected readonly _data: T) {}

  abstract getData: () => T;
}
