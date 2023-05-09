import { CreateLancamentoDto } from "src/modules/lancamentos/dto/create-lancamento.dto";

export interface ISaveLancamentoUseCase {
    run(entity: CreateLancamentoDto): Promise<void>;
}