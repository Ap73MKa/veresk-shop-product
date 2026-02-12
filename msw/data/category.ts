import type { Category } from "~/shared/api"
import { image } from "./media"

const CATEGORY_TEMPLATES = [
  { slug: "menton", name: "Ментон", image: "/mocks/categories/menton.webp" },
  { slug: "nemi", name: "Неми", image: "/mocks/categories/nemi.webp" },
  { slug: "tossa", name: "Тосса", image: "/mocks/categories/tossa.webp" },
  { slug: "porto", name: "Порто", image: "/mocks/categories/porto.webp" },
  { slug: "lorena", name: "Лорена", image: "/mocks/categories/lorena.webp" },
  { slug: "mons", name: "Монс", image: "/mocks/categories/mons.webp" },
  { slug: "verona", name: "Верона", image: "/mocks/categories/verona.webp" },
  { slug: "milano", name: "Милан", image: "/mocks/categories/milano.webp" }
]

export const createCategories = (): Category[] => {
  return CATEGORY_TEMPLATES.map((template, index) => ({
    __typename: "Category",
    id: `cat_${index + 1}`,
    slug: template.slug,
    name: template.name,
    description: `${template.name} — стильные кухонные гарнитуры`,
    media: image(template.image),
    parentId: null,
    parent: null,
    children: [] as Category[],
    products: {
      __typename: "ProductConnection",
      edges: [],
      pageInfo: {
        __typename: "PageInfo",
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: null,
        endCursor: null
      }
    }
  }))
}
