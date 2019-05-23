import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { Service } from '../../../entities'

export const createService = {
  async createService(_, { service: attrs }) {
    const repository = getRepository(Service)
    const newService = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newService)
  }
}
