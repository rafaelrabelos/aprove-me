import { UuidValueObj } from '@domain/valueObjects';

export abstract class Entity<P> {
  protected readonly _id: UuidValueObj;
  createdDate: Date;

  constructor(protected _props: EntityProps) {
    this.createdDate = new Date();
    this._id = new UuidValueObj({ uuid: _props.id });
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
  id: string;
}
