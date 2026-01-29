import { mockData } from "./mock-data"

export const rootResolvers = {
  productById: (args: any) => {
    const { id } = args || {}
    const all = mockData.categories.flatMap((c) => c.products)
    return all.find((p) => p.id === id) ?? null
  },

  productBySlug: (args: any) => {
    const { slug } = args || {}
    const all = mockData.categories.flatMap((c) => c.products)
    return all.find((p) => p.slug === slug) ?? null
  },

  products: (args: any) => {
    const { categorySlug, search, limit, offset } = args || {}
    let items = mockData.categories.flatMap((c) => c.products)

    if (categorySlug) {
      const cat = mockData.categories.find((c) => c.slug === categorySlug)
      items = cat ? cat.products : []
    }

    if (search) {
      items = items.filter((p) =>
        p.name.toLowerCase().includes(String(search).toLowerCase())
      )
    }

    if (typeof offset === "number") items = items.slice(offset)
    if (typeof limit === "number") items = items.slice(0, limit)

    return items
  },

  category: (args: any) => {
    const { slug } = args || {}
    return mockData.categories.find((c) => c.slug === slug) ?? null
  },

  categories: () => mockData.categories
}
