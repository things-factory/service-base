import { getRepository } from 'typeorm'
import { Service } from '../../../entities'

export const servicesResolver = {
  async services() {
    const repository = getRepository(Service)

    return await repository.find()
  }
}
