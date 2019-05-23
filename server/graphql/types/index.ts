import * as Service from './service'
import * as BizplaceService from './bizplace-service'

export const queries = [Service.Query, BizplaceService.Query]

export const mutations = [Service.Mutation, BizplaceService.Mutation]

export const types = [...Service.Types, ...BizplaceService.Types]
