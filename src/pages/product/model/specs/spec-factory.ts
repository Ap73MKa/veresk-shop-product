import { z } from "zod"
import { bodyColorSpec } from "./body-color-spec"
import { depthSpec } from "./depth-spec"
import { facadeColorSpec } from "./facade-color-spec"
import { heightSpec } from "./height-spec"
import { widthSpec } from "./width-spec"
import type { ProductQuery } from "~/shared/api"

const ALL_SPECS = [
  widthSpec,
  heightSpec,
  depthSpec,
  facadeColorSpec,
  bodyColorSpec
] as const

type AllSpecs = (typeof ALL_SPECS)[number]

export function resolveProductSpecs(
  product: ProductQuery["productBySlug"]
): AllSpecs[] {
  if (!product) return []
  return ALL_SPECS.filter((spec) => spec.isAvailable(product)) as AllSpecs[]
}

export function buildProductSchema(
  specs: AllSpecs[],
  product: ProductQuery["productBySlug"]
) {
  if (!product) return z.object({})

  const shape: Record<string, z.ZodTypeAny> = {}

  specs.forEach((spec) => {
    if (spec.isAvailable(product)) {
      shape[spec.key] = spec.getSchema(product)
    }
  })

  return z.object(shape)
}

export function buildDefaultValues(
  specs: AllSpecs[],
  product: ProductQuery["productBySlug"]
) {
  if (!product) return {}

  return Object.fromEntries(
    specs.map((spec) => [spec.key, spec.getDefault(product)])
  )
}
