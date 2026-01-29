import { fakerRU as faker } from "@faker-js/faker"

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

const colorImage = () => {
  const hex = faker.color.rgb({ format: "hex" }) // например #A1B2C3

  return {
    __typename: "Image",
    src: `https://singlecolorimage.com/get/${hex.replace("#", "")}/200x200`,
    alt: hex
  }
}

const colorCombo = (
  categorySlug: string,
  productSlug: string,
  index: number
) => ({
  __typename: "ColorCombo",
  facadeColor: {
    __typename: "Color",
    id: faker.string.uuid(),
    name: faker.color.human(),
    media: colorImage(),
    hint: null,
    group: null,
    addedPrice: null,
    selected: index === 0 // первый selected
  },
  bodyColor: {
    __typename: "Color",
    id: faker.string.uuid(),
    name: faker.color.human(),
    media: colorImage(),
    hint: null,
    group: null,
    addedPrice: null,
    selected: index === 0
  }
})

const categorySlugs = [
  { slug: "menton", name: "Ментон", image: "/mocks/categories/mento.webp" },
  { slug: "nemi", name: "Неми", image: "/mocks/categories/nemi.webp" },
  { slug: "tossa", name: "Тосса", image: "/mocks/categories/tossa.webp" },
  { slug: "porto", name: "Порто", image: "/mocks/categories/porto.webp" },
  { slug: "lorena", name: "Лорена", image: "/mocks/categories/lorena.webp" },
  { slug: "mons", name: "Монс", image: "/mocks/categories/mento.webp" },
  { slug: "nemi", name: "Неми", image: "/mocks/categories/nemi.webp" }
]
const productSlugs = Array.from({ length: 10 }).map(
  (_, i) => `product-${i + 1}`
)

const money = () => {
  const raw = Number(faker.finance.amount({ min: 5000, max: 150000, dec: 0 }))
  const amount = Math.round(raw / 1000) * 1000
  return { amount, currencyCode: "RUB" }
}

const price = () => ({ list: money(), net: money() })

const image = (src?: string) => {
  const randomIndex = Math.floor(Math.random() * 9) + 1

  return {
    __typename: "Image",
    src: src || `/mocks/products/${randomIndex}.webp`,
    alt: faker.commerce.productAdjective()
  }
}

const brokenImage = () => ({
  __typename: "Image",
  src: "https://example.com/broken-image.jpg",
  alt: "Broken image"
})

const video = () => ({
  __typename: "Video",
  source: [
    {
      src: faker.internet.url(),
      type: "video/mp4"
    }
  ]
})

const productMedia = () => {
  const photosCount = faker.number.int({ min: 3, max: 5 })

  const photos = Array.from({ length: photosCount }).map(() => image())

  const brokenIndex = faker.number.int({ min: 0, max: photosCount - 1 })
  photos[brokenIndex] = brokenImage()

  return {
    photos,
    video: video()
  }
}

const dimensionList = (typename: string) => {
  const count = faker.number.int({ min: 8, max: 15 })
  const result = Array.from({ length: count }, () => ({
    __typename: typename,
    value: faker.number.int({ min: 30, max: 300 }),
    unit: "MM",
    addedPrice: null,
    selected: false
  }))

  const selectedIndex = faker.number.int({ min: 0, max: count - 1 })
  if (result[selectedIndex]) result[selectedIndex].selected = true

  return result
}

const review = () => {
  const ratingValue = faker.number.int({ min: 1, max: 5 })

  return {
    __typename: "Review",
    id: faker.string.uuid(),
    user: faker.person.fullName(),
    date: faker.date.recent().toISOString(),
    text: faker.lorem.sentence(),
    media: [],
    rating: ratingEnum(ratingValue)
  }
}

export const mockData = {
  categories: categorySlugs.map((category) => ({
    __typename: "Category",
    id: faker.string.uuid(),
    slug: category.slug,
    media: image(category.image),
    description: faker.lorem.paragraph(),
    name: category.name,
    parent: null,
    children: [],
    products: productSlugs.map((pSlug) => {
      const media = productMedia()

      return {
        __typename: "Product",
        id: faker.string.uuid(),
        slug: pSlug,
        name: faker.commerce.productName(),
        partNumber: faker.number.int({ min: 10000, max: 99999 }),
        price: price(),
        info: faker.lorem.paragraph(),
        description: faker.lorem.paragraphs(2),
        warranty: "24 месяца",
        rating: faker.number.int({ min: 1, max: 5 }),
        installment: {
          payment: money(),
          period: {
            length: faker.number.int({ min: 1, max: 12 }),
            unit: "MONTH"
          }
        },
        discount: null,
        isFreeDelivery: faker.datatype.boolean(),

        // === MEDIA ===
        extraTags: media.photos,
        systemGallery: media.photos.map((photo, i) => ({
          media: photo,
          ordinalNumber: i
        })),
        userGallery: [
          {
            media: media.video,
            ordinalNumber: 0
          }
        ],

        // === Parameters / Colors ===
        width: dimensionList("Width"),
        height: dimensionList("Height"),
        depth: dimensionList("Depth"),
        facadeColor: [
          {
            __typename: "Color",
            id: faker.string.uuid(),
            name: "Белый",
            media: colorImage(),
            hint: null,
            group: null,
            addedPrice: null,
            selected: false
          }
        ],
        bodyColor: [
          {
            __typename: "Color",
            id: faker.string.uuid(),
            name: "Дуб",
            media: colorImage(),
            hint: null,
            group: null,
            addedPrice: null,
            selected: false
          }
        ],
        recommendedColors: Array.from({
          length: faker.number.int({ min: 3, max: 8 })
        }).map((_, i) => colorCombo(category.slug, pSlug, i)),

        // === Misc ===
        variant: [],
        schema: [],
        equipment: [],
        collection: null,
        manuals: [],
        reviews: Array.from({
          length: faker.number.int({ min: 1, max: 10 })
        }).map(() => review()),
        questions: [],
        similarProducts: [],
        alsoProducts: [],
        collectionProducts: [],
        searched: [],
        isInFavourtes: false,
        inCartAmount: 0
      }
    })
  }))
}
