import { useQuery } from "@tanstack/vue-query"
import { graphql, useGraphQLClient } from "~/shared/api"

const categoryQuery = graphql(`
  query CategoryPage($slug: String!, $productsPagination: Pagination!) {
    category(slug: $slug) {
      id
      slug
      name
      description
      media {
        __typename
        ... on Image {
          src
          alt
        }
      }
      products(pagination: $productsPagination) {
        edges {
          node {
            id
            slug
            name
            price {
              list {
                amount
                currencyCode
              }
              net {
                amount
                currencyCode
              }
            }
            discount {
              __typename
              ... on AbsolutePriceChange {
                amount {
                  amount
                  currencyCode
                }
              }
              ... on PercentPriceChange {
                percent
              }
            }
            systemGallery {
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
              order
            }
            # Атрибуты вместо прямых полей width/height/depth
            attributes {
              __typename
              code
              name
              ... on NumberAttribute {
                value
                unit
              }
              ... on DimensionAttribute {
                options {
                  value
                  unit
                  display
                  selected
                }
              }
            }
            reviews {
              id
              userName
              rating
              date
              text
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`)

export const useCategory = (slug: string) => {
  const client = useGraphQLClient()

  return useQuery({
    queryKey: ["category", slug],
    queryFn: async () => {
      const data = await client.request(categoryQuery, {
        slug,
        productsPagination: { limit: 20 }
      })
      return data.category
    }
  })
}
