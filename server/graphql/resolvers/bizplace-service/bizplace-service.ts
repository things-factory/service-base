import { getRepository } from 'typeorm'
import { BizplaceService } from '../../../entities'

export const bizplaceServiceResolver = {
  async bizplaceService(_, { id }, context, info) {
    const repository = getRepository(BizplaceService)

    return await repository.findOne(
      { id }
    )
  }
}
