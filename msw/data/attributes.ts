import { fakerRU as faker } from "@faker-js/faker"
import { colorImage, image } from "./media"
import { priceChange } from "./price"
import type {
  ColorAttribute,
  ColorOption,
  Compartment,
  DimensionAttribute,
  DimensionOption,
  DimensionUnit,
  MultiSelectAttribute,
  MultiSelectOption,
  EquipmentAttribute,
  SelectAttribute,
  SelectOption,
  VariantAttribute
} from "~/shared/api"

type DIMENSION_CODE = "height" | "width" | "depth" | "length"

export const createDimensionAttribute = (
  dimensionCode: DIMENSION_CODE,
  displayName: string
): DimensionAttribute => {
  // Генерируем 5-15 уникальных значений от 60 до 300, кратных 5
  const count = faker.number.int({ min: 5, max: 15 })
  const values: number[] = []

  // Генерируем уникальные значения кратные 5 (60, 65, 70, ..., 300)
  while (values.length < count) {
    const value = Math.floor((60 + Math.random() * (300 - 60)) / 5) * 5
    if (!values.includes(value)) {
      values.push(value)
    }
  }

  // Сортируем по возрастанию
  values.sort((a, b) => a - b)

  const options: DimensionOption[] = values.map((value, index) => ({
    __typename: "DimensionOption",
    id: faker.string.uuid(),
    value: value.toString(),
    display: `${value} см`,
    selected: index === 0, // Первый всегда selected
    unit: "CM" as DimensionUnit
  }))

  return {
    __typename: "DimensionAttribute",
    id: faker.string.uuid(),
    code: dimensionCode,
    name: displayName,
    required: true,
    options
  }
}

const schemaValues = [
  { name: "2.1 ШР: 80 П", value: "2-1-80" },
  { name: "2.2 ШР: 80 (П + П)", value: "2-2-80" },
  { name: "2.4 ШР: 80 (Б + Б)", value: "2-4-80" },
  { name: "2.3 ШР: 80 (1/3 Б + 2/3 П)", value: "2-3-80" },
  { name: "2.6 ШР: 80 (Б + П)", value: "2-6-80" }
]

export const createSchemaAttribute = (): SelectAttribute => {
  const options: SelectOption[] = schemaValues.map((item, index) => ({
    __typename: "SelectOption",
    id: faker.string.uuid(),
    value: item.value,
    display: item.name,
    selected: index === 0, // Первый всегда selected
    media: image(),
    price: null,
    order: index,
    description: faker.lorem.sentence()
  }))

  return {
    __typename: "SelectAttribute",
    id: faker.string.uuid(),
    code: "schema",
    name: "Схема наполнения",
    required: true,
    options
  }
}

export const createEquipmentAttribute = (
  equipmentCode: string,
  displayName: string
): EquipmentAttribute => {
  const count = faker.number.int({ min: 4, max: 10 })
  const equipmentValues = Array.from({ length: count }, () => ({
    name: faker.commerce.productName(),
    value: `option-${faker.string.uuid()}`
  }))

  const minQuantity = faker.number.int({ min: 0, max: 2 })
  const maxQuantity = faker.number.int({ min: 2, max: 5 })
  const quantity = faker.number.int({ min: minQuantity, max: maxQuantity })

  const options: MultiSelectOption[] = equipmentValues.map((item, index) => ({
    __typename: "MultiSelectOption",
    id: faker.string.uuid(),
    value: item.value,
    display: item.name,
    media: image(),
    addedPrice: priceChange(),
    order: index,
    quantity,
    minQuantity,
    maxQuantity,
    description: faker.lorem.sentence()
  }))

  return {
    __typename: "EquipmentAttribute",
    id: faker.string.uuid(),
    code: equipmentCode,
    name: displayName,
    required: false,
    options
  }
}

export const createColorAttribute = (
  colorCode: string,
  displayName: string
): ColorAttribute => {
  const count = faker.number.int({ min: 4, max: 10 })
  const colorValues = Array.from({ length: count }, () => ({
    name: faker.color.human(),
    value: `color-${faker.string.uuid()}`
  }))

  const options: ColorOption[] = colorValues.map((item, index) => ({
    __typename: "ColorOption",
    id: faker.string.uuid(),
    value: item.value,
    display: item.name,
    selected: index === 0, // Первый всегда selected
    order: index,
    media: colorImage(),
    addedPrice: priceChange(),
    description: faker.lorem.sentence()
  }))

  return {
    __typename: "ColorAttribute",
    id: faker.string.uuid(),
    code: colorCode,
    name: displayName,
    required: true,
    options
  }
}

export const createVariantAttribute = (): VariantAttribute => {
  const count = faker.number.int({ min: 2, max: 5 })
  const compartments: Compartment[] = Array.from(
    { length: count },
    (_, compIndex) => ({
      __typename: "Compartment",
      id: faker.string.uuid(),
      size: faker.number.float({ min: 70, max: 400 }),
      unit: "CM",
      order: compIndex,
      options: Array.from(
        { length: faker.number.int({ min: 4, max: 8 }) },
        (_, index) => {
          const minQuantity = faker.number.int({ min: 0, max: 2 })
          const maxQuantity = faker.number.int({ min: 2, max: 5 })
          const quantity = faker.number.int({
            min: minQuantity,
            max: maxQuantity
          })

          return {
            __typename: "VariantOption",
            id: faker.string.uuid(),
            value: `variant-${faker.string.uuid()}`,
            display: faker.commerce.productName(),
            media: image(),
            addedPrice: priceChange(),
            order: index,
            description: faker.lorem.sentence(),
            minQuantity,
            maxQuantity,
            quantity
          }
        }
      )
    })
  )

  return {
    __typename: "VariantAttribute",
    id: faker.string.uuid(),
    code: "variant",
    name: "Наполнение отделений",
    required: true,
    compartments
  }
}
