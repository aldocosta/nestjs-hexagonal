import { Inject, Injectable } from "@nestjs/common";
import { ISaveLancamentoUseCase } from "../../../ports/in/save-lancamento-uc.interface";
import { ILancamentoService } from "../../../ports/in/lancamento.interface";
import { CreateLancamentoDto } from "src/modules/lancamentos/dto/create-lancamento.dto";
import { SaveLancamentoUCConstants } from "./constants/save-lancamento-uc.constants";

@Injectable()
export class SaveLancamentoUCService implements ISaveLancamentoUseCase {

    /**
     *
     */
    constructor(
        @Inject('ILancamentoService')
        private readonly lancamentosService: ILancamentoService
    ) { }

    async save(entity: CreateLancamentoDto): Promise<CreateLancamentoDto> {
        const existsEntity = await this.lancamentosService.getEntityByNameAndDateToPay(entity.name, new Date(`${entity.dateToPay} GMT-3`))

        if (existsEntity.length > 0) {
            throw new Error(SaveLancamentoUCConstants.LancamentoExits)
        }

        return await this.lancamentosService.addEntity(entity)
    }

}