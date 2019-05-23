import { Service } from './service'
import { NewService } from './new-service'
import { ServicePatch } from './service-patch'

export const Mutation = `
  createService (
    service: NewService!
  ): Service

  updateService (
    id: String!
    patch: ServicePatch!
  ): Service

  deleteService (
    id: String!
  ): Service

  publishService (
    id: String!
  ): Service
`

export const Query = `
  services: [Service]
  service(id: String!): Service
`

export const Types = [Service, NewService, ServicePatch]
