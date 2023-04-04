import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "PremiumModel" })
export class PremiumModel {
    @Column({ type: "int", primary: true, generated: true })
    id: number
    @Column()
    userId: string
    @Column({ nullable: true })
    subs?: string
    @Column({ nullable: true })
    expiry?: string
    @Column({ default: false })
    subtype_lifetime: boolean
    @Column({ default: false })
    subtype_server: boolean
    @Column({ default: false })
    subtype_user: boolean
    @Column({ default: false })
    permanent: boolean
    @Column({ default: 0 })
    total_guilds: number
    @Column({ type: "simple-array", default: [] })
    reedeemed_guilds: string[]
}