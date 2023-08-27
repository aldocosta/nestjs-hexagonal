import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

Injectable()
export class OnlyMonthPipe implements PipeTransform<number, number> {
    transform(value: number, metadata: ArgumentMetadata) {
        if (value > 0 && value <= 12) {
            return value;
        }

        throw new BadRequestException('Apenas valores de 1 a 12 para campo do tipo mês');
    }
}

Injectable()
export class OnlyYearPipe implements PipeTransform<number, number> {
    transform(value: number, metadata: ArgumentMetadata) {
        if (value.toString().length === 4) {
            return value;
        }

        throw new BadRequestException('Campo do tipo ano precisa de 4 caracteres ex.: 1998');
    }
}