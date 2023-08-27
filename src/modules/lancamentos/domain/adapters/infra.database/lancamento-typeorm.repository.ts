import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IRepository } from "src/modules/domain/ports/out/respotitory.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { LessThan, MoreThan, Repository } from "typeorm";
import { Lancamento } from "src/modules/infra/typeorm/entities/lancamento.entity";
import { CreateLancamentoDto } from "../../../dto/create-lancamento.dto";
import { ILancamentRepositoryInterface } from "../../ports/out/lancament.repository.interface";

@Injectable()
export class LancamentoTypeormRepository implements ILancamentRepositoryInterface {

    constructor(
        @InjectRepository(Lancamento)
        private lancamentoRepository: Repository<Lancamento>
    ) { }

    async getEntityByNameAndDateToPay(name: string, dateToPay: Date): Promise<CreateLancamentoDto[]> {

        const greatherThenDate = new Date(dateToPay.getFullYear(), dateToPay.getMonth(), 1) // primeiro dia do mes
        const lowerThenDate = new Date(new Date(dateToPay.getFullYear(), dateToPay.getMonth() + 1).setHours(-24)) //ultimo dia do mes

        const lancamentos = await this.lancamentoRepository.
            createQueryBuilder('lancamento')
            .where('lancamento.name = :name', { name: name })
            .andWhere('lancamento.dateToPay >= :greatherThenDate', { greatherThenDate: greatherThenDate })
            .andWhere('lancamento.dateToPay <= :lowerThenDate', { lowerThenDate: lowerThenDate })
            .getMany()

        return lancamentos as CreateLancamentoDto[]
    }

    async getLancamentosByMonthAndYear(month: number, year: number): Promise<CreateLancamentoDto[]> {

        const greatherThenDate = new Date(year, month - 1, 1)//primeiro dia do mes
        const lowerThenDate = new Date(new Date(greatherThenDate.getFullYear(), greatherThenDate.getMonth() + 1).setHours(-24)) //ultimo dia do mes

        const lancamentos = await this.lancamentoRepository.
            createQueryBuilder('lancamento')
            .where('lancamento.dateToPay >= :greatherThenDate', { greatherThenDate: greatherThenDate })
            .andWhere('lancamento.dateToPay <= :lowerThenDate', { lowerThenDate: lowerThenDate })
            .getMany()


        return lancamentos as CreateLancamentoDto[]
    }

    async getEntityByNameAndMonth(name: string, dateToPay: Date): Promise<CreateLancamentoDto> {

        const greatherThenDate = new Date(dateToPay.getFullYear(), dateToPay.getMonth(), 1) // primeiro dia do mes
        const lowerThenDate = new Date(new Date(dateToPay.getFullYear(), dateToPay.getMonth() + 1).setHours(-24)) //ultimo dia do mes

        const lancamentos = await this.lancamentoRepository.
            createQueryBuilder('lancamento')
            .where('lancamento.dateToPay >= : dp', { dp: greatherThenDate })
            .andWhere('lancamento.dateToPay <= : dp', { dp: lowerThenDate })
            .getMany()

        return null

        // const createLancDto = await this.lancamentoRepository.findOne({
        //     where: {
        //         name: name,
        //         dateToPay: dateToPay
        //     }
        // })

        // if (createLancDto) {
        //     return createLancDto as CreateLancamentoDto
        // }

        // const createLancDtoByName = await this.lancamentoRepository.findOne({
        //     where: {
        //         name: name,
        //         dateToPay: dateToPay
        //     }
        // })

        // if (createLancDto && (createLancDto.dateToPay.getMonth() === dateToPay.getMonth())) {
        //     return createLancDto as CreateLancamentoDto
        // }

    }

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