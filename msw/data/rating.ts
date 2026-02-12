import { fakerRU as faker } from "@faker-js/faker"
import { image } from "./media"
import type { Review } from "~/shared/api"

const ratingEnum = (value: number) => {
  switch (value) {
    case 1:
      return "ONE"
    case 2:
      return "TWO"
    case 3:
      return "THREE"
    case 4:
      return "FOUR"
    case 5:
      return "FIVE"
    default:
      return "FIVE"
  }
}

export const review = (): Review => {
  const ratingValue = faker.number.int({ min: 1, max: 5 })

  return {
    __typename: "Review",
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    userName: faker.person.fullName(),
    date: faker.date.recent().toISOString(),
    text: faker.lorem.sentence(),
    media: Array.from({ length: faker.number.int({ min: 0, max: 3 }) }, () =>
      image()
    ),
    rating: ratingEnum(ratingValue)
  }
}
