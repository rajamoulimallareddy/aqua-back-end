import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "Guild" })
export class Guild {
    @Column({ type: "int", primary: true, generated: true })
    id: number
    @Column()
    guildId: string

    @Column({ default: "s!" })
    prefix: string
    @Column({ default: false })
    autoplay: boolean
    @Column({ type: "simple-array", default: [] })
    djroles: string[]
    @Column({ default: false })
    announcements: boolean
    @Column({ type: "simple-array", default: [] })
    setvc: string[]
    @Column({ type: "simple-array", default: [] })
    ban: string[]
    @Column({ nullable: true })
    voiceId?: string
    @Column({ nullable: true })
    textId?: string
    @Column({ default: false })
    requester: boolean
    @Column({ default: false })
    buttons: boolean
    @Column({ default: false })
    twenty4seven: boolean
    @Column({ default: "en" })
    language: string

    @Column({ default: false })
    premium_active: boolean
    @Column({ default: false })
    premium_subtype_lifetime: boolean
    @Column({ default: false })
    premium_subtype_server: boolean
    @Column({ default: "" })
    premium_expiry: string
    @Column({ nullable: true })
    premium_upgraded?: string
    @Column({ nullable: true })
    premium_since?: string

    @Column()
    setupChannel?: string
    @Column()
    setupMessage?: string
}