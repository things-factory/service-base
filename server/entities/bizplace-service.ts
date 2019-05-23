import { Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { Bizplace } from '@things-factory/biz-base'

@Entity('bizplace-services')
@Index('ix_bizplace-service_0', (bizplaceService: BizplaceService) => [bizplaceService.domain, bizplaceService.name], {
  unique: true
})
export class BizplaceService extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @Column('text')
  location: string

  @ManyToOne(type => Bizplace)
  bizplace: Bizplace

  @Column('text', {
    nullable: true
  })
  description: string
}
