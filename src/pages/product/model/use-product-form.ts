import { useForm } from "@tanstack/vue-form"
import { useProductPage } from "./use-product-page"
import z from "zod"
import type { SelectAttribute } from "~/shared/api"
import type { ProductPageProp } from "./use-product-page"

type ProductFormDefaults = {
  dimensions?: Record<string, string>
  colors?: Record<string, string>
  schema?: string
  variants?: Array<{
    id: string
    compartmentId: string
    quantity: number
  }>
  equipment?: Array<{
    id: string
    quantity: number
  }>
}

const createProductDefaults = (product: ProductPageProp) => {
  const values: ProductFormDefaults = {}

  const dimensionAttrs = product.attributes.filter(
    (attr) => attr.__typename === "DimensionAttribute"
  )

  if (dimensionAttrs.length) {
    values.dimensions = {}

    dimensionAttrs.forEach((attr) => {
      const selectedOption = attr.options.find((option) => option.selected)
      values.dimensions[attr.code] = selectedOption ? selectedOption.id : ""
    })
  }

  const colorAttrs = product.attributes.filter(
    (attr) => attr.__typename === "ColorAttribute"
  )

  if (colorAttrs.length) {
    values.colors = {}

    colorAttrs.forEach((attr) => {
      const selectedOption = attr.options.find((option) => option.selected)
      values.colors[attr.code] = selectedOption ? selectedOption.id : ""
    })
  }

  const schemaAttr = product.attributes.find(
    (attr) => attr.code === "schema" && attr.__typename === "SelectAttribute"
  )
  if (schemaAttr) {
    const selectedOption = (schemaAttr as SelectAttribute).options.find(
      (option) => option.selected
    )
    values.schema = selectedOption ? selectedOption.id : ""
  }

  const variantAttr = product.attributes.find(
    (attr) => attr.__typename === "VariantAttribute"
  )
  if (schemaAttr && variantAttr) {
    values.variants = []
    variantAttr.compartments.forEach((comp) => {
      comp.options
        .filter((item) => item.quantity > 0)
        .forEach((opt) => {
          values.variants.push({
            id: opt.id,
            compartmentId: comp.id,
            quantity: opt.quantity
          })
        })
    })
  }

  const equipment = product.attributes.filter(
    (attr) => attr.__typename === "EquipmentAttribute"
  )
  if (equipment.length) {
    values.equipment = []
    equipment.forEach((attr) => {
      attr.options
        .filter((item) => item.quantity > 0)
        .forEach((opt) => {
          values.equipment.push({
            id: opt.id,
            quantity: opt.quantity
          })
        })
    })
  }

  return values
}

const createProductFormSchema = (product: ProductPageProp) => {
  const schemaObj: Record<string, z.ZodTypeAny> = {}

  const dimensions = product.attributes.filter(
    (attr) => attr.__typename === "DimensionAttribute"
  )
  if (dimensions.length > 0) {
    const dimSchema: Record<string, z.ZodTypeAny> = {}
    dimensions.forEach((attr) => {
      dimSchema[attr.code] = z
        .string()
        .min(1, `Выберите ${attr.name.toLowerCase()}`)
    })
    schemaObj.dimensions = z.object(dimSchema)
  }

  const colors = product.attributes.filter(
    (attr) => attr.__typename === "ColorAttribute"
  )
  if (colors.length > 0) {
    const colorSchema: Record<string, z.ZodTypeAny> = {}
    colors.forEach((attr) => {
      colorSchema[attr.code] = z
        .string()
        .min(1, `Выберите ${attr.name.toLowerCase()}`)
    })
    schemaObj.colors = z.object(colorSchema)
  }

  const schemaAttr = product.attributes.find(
    (attr) => attr.code === "schema" && attr.__typename === "SelectAttribute"
  )
  if (schemaAttr) {
    schemaObj.schema = z.string().min(1, `Выберите ${schemaAttr.name}`)

    const variantAttr = product.attributes.find(
      (attr) => attr.__typename === "VariantAttribute"
    )
    if (variantAttr) {
      schemaObj.variants = z.array(
        z.object({
          id: z.string().min(1, "Выберите элемент"),
          compartmentId: z.string().min(1, "Отделение не найдено"),
          quantity: z.number().min(0, "Количество не может быть отрицательным")
        })
      )
    }
  }

  const equipment = product.attributes.filter(
    (attr) => attr.__typename === "EquipmentAttribute"
  )
  if (equipment.length > 0) {
    schemaObj.equipment = z.array(
      z.object({
        id: z.string().min(1, "Выберите опцию"),
        quantity: z.number().min(0, "Количество не может быть отрицательным")
      })
    )
  }

  return z.object(schemaObj)
}

export const useProductForm = () => {
  const { data: product, isLoading } = useProductPage()

  const formSchema = computed(() =>
    product.value ? createProductFormSchema(product.value) : z.object({})
  )

  const defaultValues = computed(() =>
    product.value ? createProductDefaults(product.value) : {}
  )

  const form = useForm({
    defaultValues: defaultValues.value,
    validators: { onSubmit: formSchema.value },
    onSubmit: async (values) => {
      console.log(values)
    }
  })

  watch(
    defaultValues,
    (newDefaults) => {
      if (product.value) form.reset(newDefaults)
    },
    { immediate: true, deep: true }
  )

  return form
}
