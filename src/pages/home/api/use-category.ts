import { useQuery } from "@tanstack/vue-query"
import { graphql, useGraphQLClient } from "~/shared/api"

const categoryQuery = graphql(`
  query HomeCategory($slug: String!) {
    category(slug: $slug) {
      id
      slug
      name
      products {
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
        }
        recommendedColors {
          facadeColor {
            id
            name
            media {
              ... on Image {
                src
                alt
              }
            }
          }
          bodyColor {
            id
            name
            media {
              ... on Image {
                src
                alt
              }
            }
          }
        }
        reviews {
          rating
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
      const data = await client.request(categoryQuery, { slug })
      console.log(data)
      return data.category
    }
  })
}
