import {
    Entity, PrimaryGeneratedColumn, Column,
    CreateDateColumn, UpdateDateColumn
} from 'typeorm';

@Entity('basic')
export class Basic {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
        nullable: false,
    })
    basic_uuid: string;

    @Column({
        nullable: true,
    })
    str_value: string;

    @Column({
        nullable: false,
        type: "numeric",
        default : 0
    })
    number_value: number;

    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Column()
    @UpdateDateColumn()
    updated_at: Date;
}
