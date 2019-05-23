import { gql } from 'apollo-server-koa'

export const BizplaceService = gql`
  type BizplaceService {
    id: String
    name: String
    domain: Domain
    description: String
  }
`
