export type UserProps = {
    name: string;
    value: number;
    dateToPay: Date;
    status: Boolean;
    direction: string;
}

export class CreateLancamentoDto {
    
    constructor(props: UserProps) {
        Object.assign(this, props);
    }

    name: string;
    value: number;
    dateToPay: Date;
    status: Boolean;
    direction: string;
}
