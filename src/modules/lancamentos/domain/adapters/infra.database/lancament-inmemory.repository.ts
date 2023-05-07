import { Injectable } from "@nestjs/common";
import { ILancamentRepositoryInterface } from "../../ports/out/lancament.repository.interface";
import { CreateLancamentoDto } from "src/modules/lancamentos/dto/create-lancamento.dto";

@Injectable()
export class LancamentoInMemoryRepository implements ILancamentRepositoryInterface {

    db: CreateLancamentoDto[] = []

    constructor() { }

    async addEntity(entity: CreateLancamentoDto): Promise<CreateLancamentoDto> {
        this.db.push(entity)
        return entity
    }

    getEntity(id: number): Promise<CreateLancamentoDto> {
        throw new Error("Method not implemented.");
    }

    updateEntity(entity: CreateLancamentoDto): Promise<CreateLancamentoDto> {
        throw new Error("Method not implemented.");
    }

    removeEntity(entity: CreateLancamentoDto): Promise<CreateLancamentoDto> {
        throw new Error("Method not implemented.");
    }

}