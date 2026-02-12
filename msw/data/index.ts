import type {
  Product,
  ProductConnection,
  Category,
  CategoryConnection
} from "~/shared/api"
import { paginate } from "../resolvers/utils"
import { createCategories } from "./category"
import { createProducts } from "./product"

const baseCategories = createCategories()
const allProducts = createProducts(100)
const productsPerCategory = Math.floor(
  allProducts.length / baseCategories.length
)

export const mockData = {
  products: allProducts,

  // 🔥 Type assertion - говорим TypeScript "доверься мне"
  categories: baseCategories.map((category, index) => {
    const start = index * productsPerCategory
    const categoryProducts = allProducts.slice(
      start,
      start + productsPerCategory
    )

    return {
      ...category,
      products: ({ filters, sort, pagination }: any): ProductConnection => {
        let items = categoryProducts

        if (filters?.search) {
          items = items.filter((p: Product) =>
            p.name.toLowerCase().includes(filters.search.toLowerCase())
          )
        }

        if (sort === "PRICE_ASC") {
          items.sort((a, b) => a.price.net.amount - b.price.net.amount)
        }
        if (sort === "PRICE_DESC") {
          items.sort((a, b) => b.price.net.amount - a.price.net.amount)
        }

        return {
          __typename: "ProductConnection" as const,
          ...paginate(items, pagination, "ProductEdge" as const)
        }
      }
    } as unknown as Category // 🔥 Type assertion!
  }) as Category[] // 🔥 Главный type assertion!
}
