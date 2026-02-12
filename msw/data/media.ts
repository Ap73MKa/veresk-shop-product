import { fakerRU as faker } from "@faker-js/faker"
import type { Image, Video } from "~/shared/api"

export const image = (src?: string, alt?: string): Image => {
  if (faker.datatype.boolean({ probability: 0.1 })) {
    return brokenImage()
  }

  if (src) {
    return {
      __typename: "Image",
      src,
      alt: alt || faker.commerce.productAdjective()
    }
  }

  // Иначе случайное изображение из mocks
  const randomIndex = Math.floor(Math.random() * 9) + 1
  return {
    __typename: "Image",
    src: `/mocks/products/${randomIndex}.webp`,
    alt: faker.commerce.productAdjective()
  }
}

export const brokenImage = (): Image => ({
  __typename: "Image",
  src: "https://example.com/broken-image.jpg",
  alt: "Broken image"
})

export const video = (): Video => ({
  __typename: "Video",
  source: [
    {
      __typename: "VideoSource",
      src: faker.internet.url(),
      type: "video/mp4"
    }
  ]
})

export const colorImage = (): Image => {
  const hex = faker.color.rgb({ format: "hex" }) // например #A1B2C3
  return image(
    `https://singlecolorimage.com/get/${hex.replace("#", "")}/200x200`
  )
}
