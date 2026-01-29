import { useQuery } from "@tanstack/vue-query"
import { graphql, useGraphQLClient } from "~/shared/api"

const categoryQuery = graphql(`
  query Categories {
    categories {
      id
      name
      media {
        __typename
        ... on Image {
          src
          alt
        }
      }
      slug
    }
  }
`)

export const useCategories = () => {
  const client = useGraphQLClient()

  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const data = await client.request(categoryQuery)
      return data.categories
    }
  })
}
