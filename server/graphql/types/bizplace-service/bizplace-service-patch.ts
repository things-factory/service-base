import { gql } from 'apollo-server-koa'

export const BizplaceServicePatch = gql`
  input BizplaceServicePatch {
    name: String
    description: String
  }
`
