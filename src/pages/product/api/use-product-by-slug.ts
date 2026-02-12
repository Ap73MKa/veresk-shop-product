import { useQuery } from "@tanstack/vue-query"
import { graphql, useGraphQLClient } from "~/shared/api"

const productQuery = graphql(`
  query Product($slug: String!) {
    productBySlug(slug: $slug) {
      id
      slug
      name
      info
      description
      warranty
      partNumber
      rating
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
            width
            height
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
      attributes {
        __typename
        code
        name
        required
        ... on NumberAttribute {
          value
          unit
          min
          max
          step
        }
        ... on DimensionAttribute {
          options {
            id
            value
            unit
            display
            selected
          }
        }
        ... on ColorAttribute {
          options {
            id
            value
            display
            selected
            description
            media {
              __typename
              ... on Image {
                src
                alt
              }
            }
            addedPrice {
              __typename
              ... on AbsolutePriceChange {
                amount {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
        ... on SelectAttribute {
          options {
            id
            value
            display
            selected
            description
            media {
              __typename
              ... on Image {
                src
                alt
              }
            }
            addedPrice {
              __typename
              ... on AbsolutePriceChange {
                amount {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
        ... on VariantAttribute {
          compartments {
            id
            size
            unit
            order
            options {
              id
              value
              display
              description
              minQuantity
              maxQuantity
              quantity
              media {
                __typename
                ... on Image {
                  src
                  alt
                }
              }
              addedPrice {
                __typename
                ... on AbsolutePriceChange {
                  amount {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
        ... on EquipmentAttribute {
          options {
            id
            value
            display
            quantity
            minQuantity
            maxQuantity
            media {
              __typename
              ... on Image {
                src
                alt
              }
            }
            order
            addedPrice {
              __typename
              ... on AbsolutePriceChange {
                amount {
                  amount
                  currencyCode
                }
              }
            }
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
      questions {
        id
        userName
        rating
        date
        text
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
