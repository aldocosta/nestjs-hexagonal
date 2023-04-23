export type UserProps = {
    Id: number;
    Name: string;
}

export class CreateUserDto {
    
    constructor(props: UserProps) {
        Object.assign(this, props);
    }

    id: number;
    name: string;    
}
