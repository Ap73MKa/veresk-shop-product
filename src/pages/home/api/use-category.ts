import { useQuery } from "@tanstack/vue-query"
import { graphql, useGraphQLClient } from "~/shared/api"

const categoryQuery = graphql(`
  query HomeCategory($slug: String!, $productsPagination: Pagination!) {
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
            reviews {
              rating
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`)

export const useCategory = (slug: string) => {
  const client = useGraphQLClient()

  return useQuery({
    queryKey: ["category-lite", slug],
    queryFn: async () => {
      const data = await client.request(categoryQuery, {
        slug,
        productsPagination: { limit: 12 }
      })
      console.log(data)
      return data.category
    }
  })
}
