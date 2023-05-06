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
    name: string;
    value: number;
    dateToPay: Date;
    status: boolean;
    direction: string;
}
