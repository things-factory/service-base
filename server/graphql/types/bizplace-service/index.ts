import { BizplaceService } from './bizplace-service'
import { NewBizplaceService } from './new-bizplace-service'
import { BizplaceServicePatch } from './bizplace-service-patch'

export const Mutation = `
  createBizplaceService (
    bizplaceService: NewBizplaceService!
  ): BizplaceService

  updateBizplaceService (
    id: String!
    patch: BizplaceServicePatch!
  ): BizplaceService

  deleteBizplaceService (
    id: String!
  ): BizplaceService

  publishBizplaceService (
    id: String!
  ): BizplaceService
`

export const Query = `
  bizplaceServices: [BizplaceService]
  bizplaceService(id: String!): BizplaceService
`

export const Types = [BizplaceService, NewBizplaceService, BizplaceServicePatch]
