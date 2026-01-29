import { GraphQLClient } from "graphql-request"

export const useGraphQLClient = () => {
  const config = useRuntimeConfig()
  const client = new GraphQLClient(`${config.public.apiUrl}/graphql`)
  return client
}
