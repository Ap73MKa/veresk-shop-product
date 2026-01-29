import { useQuery } from "@tanstack/vue-query"
import { graphql, useGraphQLClient } from "~/shared/api"

const productQuery = graphql(`
  query Product($slug: String!) {
    productBySlug(slug: $slug) {
      id
      slug
      name
      description
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
          selected
          media {
            __typename
            ... on Image {
              src
              alt
            }
          }
        }
        bodyColor {
          id
          name
          selected
          media {
            __typename
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
      height {
        value
        unit
        selected
      }
      width {
        value
        unit
        selected
      }
      depth {
        value
        unit
        selected
      }
    }
  }
`)

const useProductBySlug = (slug: MaybeRef<string>) => {
  const client = useGraphQLClient()

  return useQuery({
    queryKey: ["product", slug],
    queryFn: async () => {
      const value = unref(slug)
      const data = await client.request(productQuery, { slug: value })
      return data.productBySlug
    }
  })
}

export { useProductBySlug }
