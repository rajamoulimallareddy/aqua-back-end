import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "Userplaylist" })
export class Userplaylist {
    @Column({ type: "int", primary: true, generated: true })
    id: number
    @Column()
    name: string
    @Column({ nullable: true })
    creator?: string
    @Column({ nullable: true })
    time?: string
    @Column("json")
    playlists: Object
}