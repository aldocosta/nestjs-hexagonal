import { Inject, Injectable } from '@nestjs/common';
import { CreateLancamentoDto } from '../dto/create-lancamento.dto';
//import { UpdateLancamentoDto } from '../dto/update-lancamento.dto';
import { ILancamentoRepositoryService } from '../domains/adapters/lancamento-respository.interface';
import { LancamentoTypeormRepository } from '../domains/infra.database/lancamento-typeorm.repository';

@Injectable()
export class LancamentosService implements ILancamentoRepositoryService {

  constructor(
    @Inject('IRepository')
    private readonly lancamentoTypeormRepository: LancamentoTypeormRepository
  ) { }

  async addEntity(lancamento: CreateLancamentoDto): Promise<CreateLancamentoDto> {
    return await this.lancamentoTypeormRepository.addEntity(lancamento)
  }

  async getEntity(id: number): Promise<CreateLancamentoDto> {
    return await this.getEntity(id)
  }

  async updateEntity(entity: CreateLancamentoDto): Promise<CreateLancamentoDto> {
    return await this.lancamentoTypeormRepository.updateEntity(entity)
  }

  async removeEntity(entity: CreateLancamentoDto): Promise<CreateLancamentoDto> {
    return await this.lancamentoTypeormRepository.removeEntity(entity)
  }

}
