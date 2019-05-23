import { gql } from 'apollo-server-koa'

export const NewService = gql`
  input NewService {
    name: String!
    description: String
  }
`
