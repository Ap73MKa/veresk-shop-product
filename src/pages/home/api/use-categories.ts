import { useQuery } from "@tanstack/vue-query"
import { graphql, useGraphQLClient } from "~/shared/api"

const categoriesQuery = graphql(`
  query Categories($pagination: Pagination) {
    categories(pagination: $pagination) {
      edges {
        node {
          id
          name
          slug
          description
          media {
            __typename
            ... on Image {
              src
              alt
            }
            ... on Video {
              source {
                src
                type
              }
            }
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
      }
    }
  }
`)

export const useCategories = () => {
  const client = useGraphQLClient()

  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const data = await client.request(categoriesQuery, {
        pagination: { limit: 50 }
      })
      return data.categories
    }
  })
}
