import { ReceivableEntity } from '@domain/entities/receivableEntity';

export interface IReceivablesRepository {
  /**
   * Adiciona um novo recebível ao banco de dados.
   * @param receivable ReceivableEntity com os dados do recebível.
   * @returns Promise<string | undefined> O ID do recebível criado.
   */
  create(receivable: ReceivableEntity): Promise<ReceivableEntity>;

  /**
   * Retorna todos os recebíveis cadastrados.
   * @returns Promise<ReceivableEntity[]> Lista de recebíveis.
   */
  getAll(): Promise<ReceivableEntity[]>;

  /**
   * Busca um recebível pelo seu ID.
   * @param id string UUID do recebível.
   * @returns Promise<ReceivableEntity | null> O recebível encontrado ou null.
   */
  getById(id: string): Promise<ReceivableEntity | null>;
}

export const IReceivablesRepository = Symbol('IReceivablesRepository');
