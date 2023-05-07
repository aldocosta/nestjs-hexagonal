import { CreateLancamentoDto } from "../../../dto/create-lancamento.dto";

export interface ILancamentoService {
    addEntity(lancamento: CreateLancamentoDto): Promise<CreateLancamentoDto>;
    getEntity(id: number): Promise<CreateLancamentoDto>;
    updateEntity(entity: CreateLancamentoDto): Promise<CreateLancamentoDto>;
    removeEntity(entity: CreateLancamentoDto): Promise<CreateLancamentoDto>;
}