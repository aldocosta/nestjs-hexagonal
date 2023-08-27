import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { CreateLancamentoDto } from '../../dto/create-lancamento.dto';
import { ILancamentoService } from '../ports/in/lancamento.interface';
import { ISaveLancamentoUseCase } from '../ports/in/save-lancamento-uc.interface';
import { FindOneParams, MonthAndYearsParamsDto, MonthParamsDto, YearsParamsDto } from '../../dto/monthAndYear-lancamento.dto';
import { OnlyMonthPipe, OnlyYearPipe } from '../../dto/pipes/custom.pipe';

@Controller('lancamentos')
export class LancamentosController {
  constructor(
    @Inject('ILancamentoService')
    private readonly lancamentosService: ILancamentoService,
    @Inject('ISaveLancamentoUseCase')
    private readonly saveLancamentoUCService: ISaveLancamentoUseCase
  ) { }

  @Post()
  async create(
    @Body() createLancamentoDto: CreateLancamentoDto) {

    try {

      return await this.saveLancamentoUCService.save(createLancamentoDto)

    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }

  @Get(':id')
  async findOne(@Param() params: FindOneParams) {
    return await this.lancamentosService.getEntity(Number(params.id));
  }

  @Get(':month/:year')
  async findLancamentosByMonthAndYear(    
    @Param('month', OnlyMonthPipe) month: number,
    @Param('year', OnlyYearPipe) year: number
  ) {

    return await this.lancamentosService.getLancamentosByMonthAndYear(Number(month), Number(year))
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
