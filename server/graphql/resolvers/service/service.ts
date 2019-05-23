import { getRepository } from 'typeorm'
import { Service } from '../../../entities'

export const serviceResolver = {
  async service(_, { id }, context, info) {
    const repository = getRepository(Service)

    return await repository.findOne(
      { id }
    )
  }
}
