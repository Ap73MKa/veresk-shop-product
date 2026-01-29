import z from "zod"
import type { ProductSpecDefinition } from "./spec-type"

type ProductWithFacadeColors = {
  recommendedColors: {
    facadeColor: {
      id: string
      selected: boolean
      [key: string]: any
    }
  }[]
}

export const facadeColorSpec: ProductSpecDefinition<
  string,
  ProductWithFacadeColors,
  ProductWithFacadeColors["recommendedColors"][number]["facadeColor"][]
> = {
  key: "facadeColorId",
  type: "toggle",

  isAvailable(product: ProductWithFacadeColors) {
    return !!product.recommendedColors?.some((i) => !!i.facadeColor)
  },

  getDefault(product: ProductWithFacadeColors) {
    return (
      product.recommendedColors?.find((i) => i.facadeColor.selected)
        ?.facadeColor.id || ""
    )
  },

  getSchema() {
    return z.string().min(1, "Выберите цвет фасада")
  },

  getOptions(product: ProductWithFacadeColors) {
    return product.recommendedColors.map((i) => i.facadeColor)
  }
}
