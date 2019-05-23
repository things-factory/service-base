import { bizplaceServiceResolver } from './bizplace-service'
import { bizplaceServicesResolver } from './bizplace-services'

import { updateBizplaceService } from './update-bizplace-service'
import { createBizplaceService } from './create-bizplace-service'
import { deleteBizplaceService } from './delete-bizplace-service'

export const Query = {
  ...bizplaceServicesResolver,
  ...bizplaceServiceResolver
}

export const Mutation = {
  ...updateBizplaceService,
  ...createBizplaceService,
  ...deleteBizplaceService
}
