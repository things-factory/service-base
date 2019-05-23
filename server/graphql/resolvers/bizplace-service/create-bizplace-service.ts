import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { BizplaceService } from '../../../entities'

export const createBizplaceService = {
  async createBizplaceService(_, { bizplaceService: attrs }) {
    const repository = getRepository(BizplaceService)
    const newBizplaceService = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newBizplaceService)
  }
}
