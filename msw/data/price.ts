import { fakerRU as faker } from "@faker-js/faker"
import type { CurrencyCode, Money, Price, PriceChange } from "~/shared/api"

export const money = (min: number = 5000, max: number = 150000): Money => {
  const raw = Number(faker.finance.amount({ min, max, dec: 0 }))
  const amount = Math.round(raw / 1000) * 1000
  return { __typename: "Money", amount, currencyCode: "RUB" as CurrencyCode }
}

export const price = (): Price => {
  const net = money(5000, 120000) // Цена для клиента со скидками
  const list = money(net.amount, 150000) // Розничная цена
  return { __typename: "Price", list, net }
}

export const priceChange = (): PriceChange => {
  const isPercent = faker.datatype.boolean()

  if (isPercent) {
    return {
      __typename: "PercentPriceChange",
      percent: faker.number.int({ min: 5, max: 30 })
    }
  }

  return {
    __typename: "AbsolutePriceChange",
    amount: money()
  }
}
