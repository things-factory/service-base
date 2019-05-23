import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { BizplaceService } from '../entities'

const SEED = [
  {
    name: 'Seed',
    description: 'Description for Seed'
  }
]

export class SeedBizplaceService1558578296928 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(BizplaceService)
    const domainRepository = getRepository(Domain)
    const domain = await domainRepository.findOne({
      name: 'SYSTEM'
    })

    try {
      SEED.forEach(async bizplaceService => {
        await repository.save({
          ...bizplaceService,
          domain
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(BizplaceService)
    SEED.reverse().forEach(async bizplaceService => {
      let record = await repository.findOne({ name: bizplaceService.name })
      await repository.remove(record)
    })
  }
}
