import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "UserReport" })
export class UserReport {
    @Column({ type: "int", primary: true, generated: true })
    id: number
    @Column({ nullable: true })
    discordId: string
    @Column({ nullable: true })
    accessToken?: string
    @Column({ nullable: true })
    refreshToken?: string
    @Column({ nullable: true })
    username?: string
    @Column({ nullable: true })
    discriminator?: string
}