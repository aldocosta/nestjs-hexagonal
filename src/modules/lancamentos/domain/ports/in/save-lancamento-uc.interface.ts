import { CreateLancamentoDto } from "src/modules/lancamentos/dto/create-lancamento.dto";

export interface ISaveLancamentoUseCase {

    save(entity: CreateLancamentoDto): Promise<CreateLancamentoDto>;   

}
