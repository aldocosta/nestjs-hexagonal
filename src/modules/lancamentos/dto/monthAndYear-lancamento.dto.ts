import { IsIn, IsNumberString, } from "class-validator";

export type UserProps = {
    month: number;
    year: number;
}

export class MonthAndYearsParamsDto {
    //@IsIn([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 11, 12], { message: 'Campo month só aceita valores de 1 a 12' })
    month: string;
    year: string;
}

export class YearsParamsDto {
    //@IsIn([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 11, 12], { message: 'Campo month só aceita valores de 1 a 12' })    
    year: string;
}


export class MonthParamsDto {
    //@IsIn([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 11, 12], { message: 'Campo month só aceita valores de 1 a 12' })
    month: number;
}

export class FindOneParams {
    @IsNumberString()
    id: string;
  }