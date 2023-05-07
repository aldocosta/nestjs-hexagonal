import { Inject, Injectable } from '@nestjs/common';
import { CreateLancamentoDto } from '../../../dto/create-lancamento.dto';
import { ILancamentoService } from '../../ports/in/lancamento.interface';
import { ILancamentRepositoryInterface } from '../../ports/out/lancament.repository.interface';

@Injectable()
export class LancamentosService implements ILancamentoService {

  constructor(
    @Inject('ILancamentRepositoryInterface')
    private readonly lancamentoTypeormRepository: ILancamentRepositoryInterface
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
