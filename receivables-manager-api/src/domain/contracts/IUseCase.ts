/**
 * Domain useCase contract
 *
 * @return {IUseCase<T, P>} Implemented `IUseCase` interface.
 * @example
 * ```ts
 * class CreateUseCase implements IUseCase<Props, Result> {
 *  public async execute(input: Props): Promise<Result> { ...}
 * }
 * ```
 */
export interface IUseCase<T, P> {
  /**
   * UseCase entry point that will do all steps to make job done
   *
   * @param  input The `InputLoginUseCase` input useCase required data
   * @return {ServiceStatus} Returns a `AccountEntity` as `Promise<AccountEntity>`
   * @example
   * ```ts
   * const [resultData] = this._loginUseCase.Execute(input as InputLoginUseCase)
   * ```
   */
  execute(input: T): Promise<P>;
}

export const IUseCase = Symbol('IUseCase');
