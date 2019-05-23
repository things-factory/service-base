import { getRepository } from 'typeorm'
import { BizplaceService } from '../../../entities'

export const bizplaceServicesResolver = {
  async bizplaceServices() {
    const repository = getRepository(BizplaceService)

    return await repository.find()
  }
}
