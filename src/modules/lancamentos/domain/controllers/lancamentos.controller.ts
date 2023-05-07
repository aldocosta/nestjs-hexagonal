import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
//import { UpdateLancamentoDto } from '../dto/update-lancamento.dto';
import { LancamentosService } from '../adapters/services/lancamentos.service';
import { CreateLancamentoDto } from '../../dto/create-lancamento.dto';
import { ILancamentoService } from '../ports/in/lancamento.interface';

@Controller('lancamentos')
export class LancamentosController {
  constructor(
    @Inject('ILancamentoService')
    private readonly lancamentosService: ILancamentoService
  ) { }

  @Post()
 async create(@Body() createLancamentoDto: CreateLancamentoDto) {
    return await this.lancamentosService.addEntity(createLancamentoDto);
  }

  // @Get()
  // findAll() {
  //   return this.lancamentosService.findAll();
  // }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.lancamentosService.getEntity(id);
  }

  @Patch()
  async update(@Body() updateLancamentoDto: CreateLancamentoDto) {
    return await this.lancamentosService.updateEntity(updateLancamentoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const lanc = await this.lancamentosService.getEntity(id);
    return this.lancamentosService.removeEntity(lanc);
  }
}