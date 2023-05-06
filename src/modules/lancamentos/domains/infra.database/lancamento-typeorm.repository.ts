import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IRepository } from "src/shared/domain/adapters/respotitory.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Lancamento } from "src/modules/infra/typeorm/entities/lancamento.entity";
import { CreateLancamentoDto } from "../../dto/create-lancamento.dto";

@Injectable()
export class LancamentoTypeormRepository implements IRepository<CreateLancamentoDto>{

    constructor(
        @InjectRepository(Lancamento)
        private lancamentoRepository: Repository<Lancamento>
    ) { }

    async addEntity(entity: CreateLancamentoDto): Promise<CreateLancamentoDto> {
        return await this.lancamentoRepository.save(entity);
    }

    async addEntitys(entity: CreateLancamentoDto): Promise<CreateLancamentoDto> {
         return await this.lancamentoRepository.save(entity)
    }

    async getEntity(id: number): Promise<CreateLancamentoDto> {
        const entity = await this.lancamentoRepository.findOne({
            where: {
                id: id
            }
         })
         return entity as CreateLancamentoDto
    }

    async updateEntity(entity: CreateLancamentoDto): Promise<CreateLancamentoDto> {
        return await this.lancamentoRepository.save(entity);
    }

    async removeEntity(entity: CreateLancamentoDto): Promise<CreateLancamentoDto> {
        if (entity.id == null || entity.id <= 0) throw new HttpException('', HttpStatus.BAD_REQUEST)
        const ret = await this.lancamentoRepository.remove(entity)
        
        return ret as CreateLancamentoDto
    }

}