import { getRepository } from 'typeorm'
import { Service } from '../../../entities'

export const deleteService = {
  async deleteService(_, { id }) {
    const repository = getRepository(Service)

    return await repository.delete(id)
  }
}
