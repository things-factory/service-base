import { getRepository } from 'typeorm'
import { BizplaceService } from '../../../entities'

export const updateBizplaceService = {
  async updateBizplaceService(_, { id, patch }) {
    const repository = getRepository(BizplaceService)

    const bizplaceService = await repository.findOne({ id })

    return await repository.save({
      ...bizplaceService,
      ...patch
    })
  }
}
