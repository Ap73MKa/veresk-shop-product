import z from "zod"
import type { ProductSpecDefinition } from "./spec-type"

type ProductWithDepth = {
  depth: {
    selected: boolean
    value: number
  }[]
}

export const depthSpec: ProductSpecDefinition<
  number,
  ProductWithDepth,
  ProductWithDepth["depth"]
> = {
  key: "depth",
  type: "number",

  isAvailable(product) {
    return product.depth?.length > 0
  },

  getDefault(product) {
    return product.depth.find((i) => i.selected)?.value ?? 0
  },

  getSchema(product) {
    if (!product.depth?.length) return z.number().positive()

    const values = product.depth.map((i) => i.value)
    const minValue = Math.min(...values)
    const maxValue = Math.max(...values)

    return z
      .number()
      .min(minValue, `Значение не может быть меньше ${minValue}`)
      .max(maxValue, `Значение не может быть больше ${maxValue}`)
  },

  getOptions(product) {
    return product.depth
  }
}
