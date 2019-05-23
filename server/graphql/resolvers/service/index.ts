import { serviceResolver } from './service'
import { servicesResolver } from './services'

import { updateService } from './update-service'
import { createService } from './create-service'
import { deleteService } from './delete-service'

export const Query = {
  ...servicesResolver,
  ...serviceResolver
}

export const Mutation = {
  ...updateService,
  ...createService,
  ...deleteService
}
