import z from "zod"
import type { ProductSpecDefinition } from "./spec-type"

type ProductWithBodyColors = {
  recommendedColors: {
    bodyColor: {
      id: string
      selected: boolean
    }
  }[]
}

export const bodyColorSpec: ProductSpecDefinition<
  string,
  ProductWithBodyColors,
  ProductWithBodyColors["recommendedColors"][number]["bodyColor"][]
> = {
  key: "bodyColorId",
  type: "toggle",

  isAvailable(product) {
    return !!product.recommendedColors?.some((i) => !!i.bodyColor)
  },

  getDefault(product) {
    return (
      product.recommendedColors?.find((i) => i.bodyColor.selected)?.bodyColor
        .id || ""
    )
  },

  getSchema() {
    return z.string().min(1, "Выберите цвет корпуса")
  },

  getOptions(product) {
    return product.recommendedColors.map((i) => i.bodyColor)
  }
}
