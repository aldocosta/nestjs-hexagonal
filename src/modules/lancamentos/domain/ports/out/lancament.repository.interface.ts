import { IRepository } from "src/modules/domain/ports/out/respotitory.interface";
import { CreateLancamentoDto } from "src/modules/lancamentos/dto/create-lancamento.dto";

export interface ILancamentRepositoryInterface extends IRepository<CreateLancamentoDto> {

    getEntityByNameAndMonth(name: string, dateToPay: Date): Promise<CreateLancamentoDto>;

    getLancamentosByMonthAndYear(mounth: number, year: number): Promise<CreateLancamentoDto[]>;

    getEntityByNameAndDateToPay(name: string, dateToPay: Date): Promise<CreateLancamentoDto[]>;

}