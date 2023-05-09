import { Inject, Injectable } from "@nestjs/common";
import { ISaveLancamentoUseCase } from "../../../ports/in/save-lancamento-uc.interface";
import { ILancamentoService } from "../../../ports/in/lancamento.interface";
import { CreateLancamentoDto } from "src/modules/lancamentos/dto/create-lancamento.dto";

@Injectable()
export class SaveLancamentoUCService implements ISaveLancamentoUseCase {

    /**
     *
     */
    constructor(
        @Inject('ILancamentoService')
        private readonly lancamentosService: ILancamentoService
    ) { }

    /**
    * Regras de negocio de persistencia de gravação do Caso de Uso de salvar Lancamento
    */
    run(entity: CreateLancamentoDto): Promise<void> {
        //verificar se o nome do lancamento ja existe
        
        throw new Error("Method not implemented.");
    }

}