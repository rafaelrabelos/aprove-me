import { UUID } from 'crypto';

export abstract class Entity<P extends EntityProps> {
  _id?: UUID;
  createdDate: Date;

  constructor(protected _props: Partial<P>) {
    this.createdDate = new Date();
    this._id = _props._id;
  }

  public get id(): () => string {
    return () => this._id?.toString() ?? '';
  }

  /**
   * Compare objects by values, not by identity.
   *
   * @param {this} other other valueObject.
   * @return { boolean }  true if the valueObjects attributes are the same.
   */
  abstract areEqualTo(other: typeof this): boolean;

  /**
   * Trigger a validation routine for the entity
   *
   * @return {boolean} Returns a `boolean` as result of a validation;
   * @example
   * ```ts
   * const isValid = this._entityInstance.validate();
   * ```
   */
  abstract validate(): boolean;
}
export interface EntityProps {
  _id?: UUID;
}
