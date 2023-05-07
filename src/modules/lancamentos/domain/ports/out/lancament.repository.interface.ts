import { IRepository } from "src/modules/domain/ports/out/respotitory.interface";
import { CreateLancamentoDto } from "src/modules/lancamentos/dto/create-lancamento.dto";

export interface ILancamentRepositoryInterface extends IRepository<CreateLancamentoDto> { }