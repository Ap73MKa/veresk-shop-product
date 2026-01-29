import z from "zod"
import type { ProductSpecDefinition } from "./spec-type"

type ProductWithHeight = {
  height: {
    selected: boolean
    value: number
  }[]
}

export const heightSpec: ProductSpecDefinition<
  number,
  ProductWithHeight,
  ProductWithHeight["height"]
> = {
  key: "height",
  type: "number",

  isAvailable(product) {
    return product.height?.length > 0
  },

  getDefault(product) {
    return product.height.find((i) => i.selected)?.value ?? 0
  },

  getSchema(product) {
    if (!product.height?.length) return z.number().positive()

    const values = product.height.map((i) => i.value)
    const minValue = Math.min(...values)
    const maxValue = Math.max(...values)

    return z
      .number()
      .min(minValue, `Значение не может быть меньше ${minValue}`)
      .max(maxValue, `Значение не может быть больше ${maxValue}`)
  },

  getOptions(product) {
    return product.height
  }
}
