import { Rating } from "~/shared/api"

const ratingToNumber: Record<Rating, number> = {
  [Rating.One]: 1,
  [Rating.Two]: 2,
  [Rating.Three]: 3,
  [Rating.Four]: 4,
  [Rating.Five]: 5
}

const getAverageRating = (reviews: { rating: Rating }[]) =>
  reviews.length > 0
    ? Math.round(
        (reviews.reduce((sum, item) => sum + ratingToNumber[item.rating], 0) /
          reviews.length) *
          10
      ) / 10
    : 0

export { ratingToNumber, getAverageRating }
