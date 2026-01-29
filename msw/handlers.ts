import { buildSchema, graphql as executeGraphql } from "graphql"
import { HttpResponse, graphql as mswGraphql } from "msw"
import { rootResolvers } from "./resolvers"
import schemaSDL from "./schema.graphql?raw"

const schema = buildSchema(schemaSDL)

export const handlers = [
  mswGraphql.operation(async ({ query, variables }) => {
    const { data, errors } = await executeGraphql({
      schema,
      source: typeof query === "string" ? query : String(query),
      variableValues: variables,
      rootValue: rootResolvers
    })

    return HttpResponse.json({ errors, data })
  })
]
