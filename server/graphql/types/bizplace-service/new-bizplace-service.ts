import { gql } from 'apollo-server-koa'

export const NewBizplaceService = gql`
  input NewBizplaceService {
    name: String!
    description: String
  }
`
