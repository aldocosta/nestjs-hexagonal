export type UserProps = {
    id: number;
    name: string;
    value: number;
    dateToPay: Date;
    status: Boolean;
    direction: string;
}

export class UpdateLancamentoDto {    
    constructor(props: UserProps) {
        Object.assign(this, props);
    }

    id: number;
    name: string;
    value: number;
    dateToPay: Date;
    status: Boolean;
    direction: string;
}
