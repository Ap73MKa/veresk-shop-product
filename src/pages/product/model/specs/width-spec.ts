import z from "zod"
import type { ProductSpecDefinition } from "./spec-type"

type ProductWithWidth = {
  width: {
    selected: boolean
    value: number
  }[]
}

export const widthSpec: ProductSpecDefinition<
  number,
  ProductWithWidth,
  ProductWithWidth["width"]
> = {
  key: "width",
  type: "number",

  isAvailable(product) {
    return !!product?.width?.length
  },

  getDefault(product) {
    return product.width?.find((i) => i.selected)?.value ?? 0
  },

  getSchema(product) {
    if (!product.width?.length) return z.number().positive()

    const values = product.width.map((i) => i.value)
    const minValue = Math.min(...values)
    const maxValue = Math.max(...values)

    return z
      .number()
      .min(minValue, `Значение не может быть меньше ${minValue}`)
      .max(maxValue, `Значение не может быть больше ${maxValue}`)
  },

  getOptions(product) {
    return product.width
  }
}
