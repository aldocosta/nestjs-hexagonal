export type UserProps = {
    id: number;
    name: string;
    email: string;
    password: string;
}

export class CreateUserDto {

    constructor(props: UserProps) {
        Object.assign(this, props);
    }

    id: number;
    name: string;
    email: string;
    password: string;
}
