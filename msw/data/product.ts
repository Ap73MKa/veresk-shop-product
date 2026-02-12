import { fakerRU as faker } from "@faker-js/faker"
import {
  createColorAttribute,
  createDimensionAttribute,
  createSchemaAttribute,
  createEquipmentAttribute,
  createVariantAttribute
} from "./attributes"
import { price, priceChange, money } from "./price"
import { image } from "./media"
import { review } from "./rating"
import type { PeriodUnit, Product } from "~/shared/api"

export const createProducts = (count: number): Product[] => {
  return Array.from({ length: count }, (_, index) => {
    return createProduct(`product-${index}`)
  })
}

export const createProduct = (slug: string): Product => ({
  __typename: "Product",
  id: faker.string.uuid(),
  slug: slug,
  name: faker.commerce.productName(),
  partNumber: faker.number.int({ min: 1000, max: 9999 }),

  price: price(),
  discount: priceChange(),
  installment: {
    __typename: "Installment",
    payment: money(),
    period: { __typename: "Period", length: 12, unit: "MONTH" as PeriodUnit }
  },

  info: faker.lorem.sentence(),
  description: faker.lorem.paragraphs(3),
  warranty: faker.lorem.sentence(),

  rating: parseFloat((3 + Math.random() * 2).toFixed(1)),
  isFreeDelivery: faker.datatype.boolean(),
  extraTags: [],

  attributes: [
    createDimensionAttribute("width", "Ширина"),
    createDimensionAttribute("height", "Высота"),
    createDimensionAttribute("depth", "Глубина"),
    createDimensionAttribute("length", "Длина"),
    createColorAttribute("bodyColor", "Цвет корпуса"),
    createColorAttribute("facadeColor", "Цвет фасада"),
    createColorAttribute("facadeColor2", "Цвет фасада 2"),
    createEquipmentAttribute("handleColor", "Цвет ручки"),
    createEquipmentAttribute("baseboardCutout", "Вырез под плинтус"),
    createEquipmentAttribute("loopType", "Вид петель"),
    createSchemaAttribute(),
    createVariantAttribute()
  ],

  systemGallery: Array.from(
    { length: faker.number.int({ min: 5, max: 10 }) },
    (_, index) => ({
      __typename: "GalleryItem",
      media: image(),
      order: index + 1
    })
  ),
  userGallery: Array.from(
    { length: faker.number.int({ min: 5, max: 10 }) },
    (_, index) => ({
      __typename: "GalleryItem",
      media: image(),
      order: index + 1
    })
  ),
  manuals: [
    { __typename: "Link", url: faker.internet.url(), text: "Инструкция" }
  ],

  collection: {
    __typename: "Link",
    url: faker.internet.url(),
    text: "Коллекция 2026"
  },
  reviews: Array.from({
    length: faker.number.int({ min: 1, max: 10 })
  }).map(() => review()),
  questions: [],
  similarProducts: [],
  alsoProducts: [],
  collectionProducts: [],
  searched: []
})
