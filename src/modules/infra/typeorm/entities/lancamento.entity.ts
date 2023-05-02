
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'lancamento' })
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column({ default: 0 })
    value: Number;

    @Column()
    dateToPay: Date;

    @Column({ default: false })
    status: boolean;

    @Column({ default: 'out' })
    direction: string;
}