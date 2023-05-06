import { Lancamento } from "src/modules/infra/typeorm/entities/lancamento.entity";
import { CreateLancamentoDto } from "../../dto/create-lancamento.dto";

export interface ILancamentoRepositoryService {
    addEntity(lancamento: CreateLancamentoDto): Promise<CreateLancamentoDto>;
    getEntity(id: number): Promise<CreateLancamentoDto>;
    updateEntity(entity: CreateLancamentoDto): Promise<CreateLancamentoDto>;
    removeEntity(entity: CreateLancamentoDto): Promise<CreateLancamentoDto>;
}