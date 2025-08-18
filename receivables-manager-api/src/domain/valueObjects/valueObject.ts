export default abstract class ValueObject<P> {
  constructor(protected _props: Partial<P>) {}

  /**
   * Compare objects by values, not by identity.
   *
   * @param other The other valueObject.
   * @return { boolean }  true if the valueObjects attributes are the same.
   */
  abstract areEqualTo(other: typeof this): boolean;

  /**
   * Trigger a validation routine for the object
   *
   * @return {boolean} Returns a `boolean` as result of a validation;
   * @example
   * ```ts
   * const isValid = this._entityInstance.valueObj.validate();
   * ```
   */
  abstract validate(): boolean;
}
