import { Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { Company } from '@things-factory/biz-base'

@Entity('services')
@Index('ix_service_0', (service: Service) => [service.domain, service.name, service.company], { unique: true })
@Index('ix_service_1', (service: Service) => [service.domain, service.company, service.refTo])
export class Service extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  company: Company

  @Column('text')
  name: string

  @ManyToOne(type => Service, service => service.aliases)
  refTo: Service

  @OneToMany(type => Service, service => service.refTo)
  aliases: Service[]

  @Column('text', {
    nullable: true
  })
  description: string
}
