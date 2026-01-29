import type { ZodType } from "zod"

export type ProductSpecType = "select" | "toggle" | "number" | "dimensions"

export interface ProductSpecDefinition<
  T,
  Ctx, // конкретный тип продукта/контекста
  Options
> {
  key: string
  type: ProductSpecType

  /** есть ли у продукта */
  isAvailable(ctx: Ctx): boolean

  /** дефолт */
  getDefault(ctx: Ctx): T

  /** zod */
  getSchema(ctx: Ctx): ZodType<T>

  /** данные для UI */
  getOptions(ctx: Ctx): Options
}
