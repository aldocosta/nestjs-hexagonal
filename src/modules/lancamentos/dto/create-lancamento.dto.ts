import { Type } from "class-transformer";
import { IsDate, IsDateString, IsIn, IsNotEmpty, MaxLength } from "class-validator";

export type UserProps = {
    id: number;
    name: string;
    value: number;
    dateToPay: Date;
    status: boolean;
    direction: string;
}

export class CreateLancamentoDto {

    constructor(props: UserProps) {
        Object.assign(this, props);
    }

    id: number;

    @IsNotEmpty({ message: 'Nome não pode ser nulo' })
    @MaxLength(75, { message: 'Tamanho máximo de 75 caracteres' })
    name: string;

    value: number;

    @IsDateString({},{message:"Campo dateToPay precisar ser campo de Data"})
    dateToPay: Date;
    
    status: boolean;

    
    @IsIn(['in','out'],{message:'Valores permitidos para o campo direction são "in" ou "out"'})
    direction: string;
}
