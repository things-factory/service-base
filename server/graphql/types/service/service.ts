import { gql } from 'apollo-server-koa'

export const Service = gql`
  type Service {
    id: String
    name: String
    domain: Domain
    description: String
  }
`
