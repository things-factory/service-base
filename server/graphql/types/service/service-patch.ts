import { gql } from 'apollo-server-koa'

export const ServicePatch = gql`
  input ServicePatch {
    name: String
    description: String
  }
`
