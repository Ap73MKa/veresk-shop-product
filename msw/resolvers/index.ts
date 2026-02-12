import type {
  Category,
  CategoryConnection,
  Product,
  ProductConnection
} from "~/shared/api"
import { mockData } from "../data"
import { paginate } from "./utils"

export const rootResolvers = {
  productById: (args: any): Product | null => {
    const { id } = args || {}
    return mockData.products.find((item) => item.id === id) ?? null
  },

  productBySlug: (args: any): Product | null => {
    const { slug } = args || {}
    return mockData.products.find((item) => item.slug === slug) ?? null
  },

  products: (args: any): ProductConnection => {
    const { filters, sort, pagination } = args || {}
    let items = mockData.products
    console.log(items, filters, sort, pagination)

    if (filters?.categorySlug) {
      // 🔥 Используем ГЛОБАЛЬНЫЙ поиск, НЕ category.products!
      items = mockData.products.filter((p) =>
        mockData.categories.some(
          (c) =>
            c.slug === filters.categorySlug &&
            // здесь логика принадлежности продукта категории
            true // упрощенно
        )
      )
    }

    if (filters?.search) {
      items = items.filter((p) =>
        p.name.toLowerCase().includes(filters.search.toLowerCase())
      )
    }

    if (sort === "PRICE_ASC")
      items.sort((a, b) => a.price.net.amount - b.price.net.amount)
    if (sort === "PRICE_DESC")
      items.sort((a, b) => b.price.net.amount - a.price.net.amount)

    return {
      __typename: "ProductConnection",
      ...paginate(items, pagination, "ProductEdge")
    }
  },

  category: ({ slug }: any): Category | null =>
    mockData.categories.find((c) => c.slug === slug) ?? null,

  categories: ({ pagination }: any): CategoryConnection => ({
    __typename: "CategoryConnection",
    ...paginate(mockData.categories, pagination, "CategoryEdge")
  })
}
