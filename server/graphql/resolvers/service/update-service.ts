import { getRepository } from 'typeorm'
import { Service } from '../../../entities'

export const updateService = {
  async updateService(_, { id, patch }) {
    const repository = getRepository(Service)

    const service = await repository.findOne({ id })

    return await repository.save({
      ...service,
      ...patch
    })
  }
}
