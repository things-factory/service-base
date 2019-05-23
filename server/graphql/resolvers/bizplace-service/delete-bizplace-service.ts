import { getRepository } from 'typeorm'
import { BizplaceService } from '../../../entities'

export const deleteBizplaceService = {
  async deleteBizplaceService(_, { id }) {
    const repository = getRepository(BizplaceService)

    return await repository.delete(id)
  }
}
