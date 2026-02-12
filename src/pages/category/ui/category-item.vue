<script setup lang="ts">
import { Badge } from "~/shared/ui/badge"
import { StarIcon } from "lucide-vue-next"
import { type CategoryPageQuery, type Image } from "~/shared/api"

import { ref } from "vue"
import CardImageCarousel from "~/entities/product/ui/card/card-image-carousel.vue"
import CardImageContainer from "~/entities/product/ui/card/card-image-container.vue"
import CardImageCarouselBar from "~/entities/product/ui/card/card-image-carousel-bar.vue"
import { ProductFavoriteButton } from "~/features/favorite/toggle-product-favorite"
import { AddProductToCartButton } from "~/features/cart/add-product-to-cart"
import { formatCurrency } from "~/entities/product/lib/currency"
import { getAverageRating } from "~/entities/product/lib/rating"
import { BaseImage } from "~/shared/ui/base-image"
import { byTypename } from "~/shared/lib/types"

type Category = NonNullable<CategoryPageQuery["category"]>
type Product = Category["products"]["edges"][number]["node"]

const props = defineProps<{ product: Product }>()
const currentImageIndex = ref(0)

const getMinMax = (list: { value: number }[]) => {
  if (!list || list.length === 0) return null

  const values = list.map((i) => i.value)
  return {
    min: Math.min(...values),
    max: Math.max(...values)
  }
}

const discountLabel = computed(() => {
  const discount = props.product.discount
  if (!discount) return null

  switch (discount.__typename) {
    case "AbsolutePriceChange":
      return formatCurrency(
        discount.amount.amount,
        discount.amount.currencyCode
      )
    case "PercentPriceChange":
      return `${discount.percent}%`
    default:
      return null
  }
})

const reviews = computed(() => props.product.reviews ?? [])
const averageRating = computed(() => getAverageRating(reviews.value))
const images = computed(() =>
  props.product.systemGallery
    ?.map((i) => i.media)
    .filter(byTypename("Image"))
    .map((i) => ({ src: i.src, alt: i.alt ?? props.product.name }))
)

const dimensionAttributes = computed(
  () =>
    props.product.attributes.filter(
      (item) => item.__typename === "DimensionAttribute"
    ) ?? []
)

const widthAttribute = computed(() =>
  dimensionAttributes.value.find((item) => item.code === "width")
)

const widthRange = computed(() =>
  getMinMax(
    widthAttribute.value?.options.map((item) => ({
      value: parseFloat(item.value)
    })) ?? []
  )
)

const heightAttribute = computed(() =>
  dimensionAttributes.value.find((item) => item.code === "height")
)

const heightRange = computed(() =>
  getMinMax(
    heightAttribute.value?.options.map((item) => ({
      value: parseFloat(item.value)
    })) ?? []
  )
)

const depthAttribute = computed(() =>
  dimensionAttributes.value.find((item) => item.code === "depth")
)

const depthRange = computed(() =>
  getMinMax(
    depthAttribute.value?.options.map((item) => ({
      value: parseFloat(item.value)
    })) ?? []
  )
)
</script>

<template>
  <div
    class="group relative flex w-full flex-col gap-4 overflow-visible rounded-t-sm border border-transparent bg-transparent p-6 pb-0 lg:hover:border-border lg:hover:bg-background lg:hover:shadow-lg"
  >
    <CardImageContainer asChild>
      <NuxtLink
        :to="{ name: 'product-slug', params: { slug: props.product.slug } }"
      >
        <CardImageCarousel
          :images="images ?? []"
          @change="(value) => (currentImageIndex = value)"
        >
          <template #image="{ image, inView }">
            <BaseImage
              :src="image.src"
              :alt="image.alt ?? props.product.name"
              :force-loading="!inView"
            />
          </template>
        </CardImageCarousel>

        <ProductFavoriteButton
          class="absolute top-2 right-2"
          :product-id="props.product.id"
          variant="ghost"
        />

        <div class="absolute right-2 bottom-2 flex gap-1.5">
          <Badge v-if="discountLabel">{{ discountLabel }}</Badge>
        </div>
      </NuxtLink>
    </CardImageContainer>

    <CardImageCarouselBar
      :current-index="currentImageIndex"
      :total-items="images?.length ?? 0"
    />

    <div class="space-y-3">
      <div class="space-y-0.5">
        <div class="flex justify-between">
          <NuxtLink
            :to="{ name: 'product-slug', params: { slug: props.product.slug } }"
            class="font-medium text-secondary-foreground"
          >
            {{ product.name }}
          </NuxtLink>

          <NuxtLink
            :to="{ name: 'product-slug', params: { slug: props.product.slug } }"
            class="flex items-center gap-1"
          >
            <StarIcon class="size-3.5 shrink-0 fill-primary text-primary" />
            <span class="text-sm">{{ averageRating }}</span>
            <span class="text-xs text-muted-foreground">
              ({{ reviews.length }})
            </span>
          </NuxtLink>
        </div>

        <div class="flex items-center gap-2">
          <span class="gap-1 truncate text-sm">
            {{
              formatCurrency(
                product.price.net.amount,
                product.price.net.currencyCode
              )
            }}
          </span>
          <span
            v-if="product.price.net.amount !== product.price.list.amount"
            class="self-end pb-px text-xs text-muted-foreground line-through"
          >
            {{
              formatCurrency(
                product.price.list.amount,
                product.price.list.currencyCode
              )
            }}
          </span>
        </div>
      </div>
    </div>

    <div
      class="absolute top-full -left-px z-20 hidden w-[calc(100%+2px)] flex-col gap-2 rounded-b-md border border-t-0 bg-background px-6 pt-2 pb-4 shadow-lg lg:group-hover:flex"
    >
      <div class="mb-2 flex justify-between gap-2">
        <div class="flex flex-col gap-0.5" v-if="widthRange">
          <div class="text-xs text-muted-foreground">Ширина</div>
          <div
            class="inline-flex w-20 items-center justify-center rounded bg-muted py-1 text-xs"
          >
            {{ widthRange.min }} - {{ widthRange.max }}
          </div>
        </div>
        <div class="flex flex-col gap-0.5" v-if="heightRange">
          <div class="text-xs text-muted-foreground">Высота</div>
          <div
            class="inline-flex w-20 items-center justify-center rounded bg-muted py-1 text-xs"
          >
            {{ heightRange.min }} - {{ heightRange.max }}
          </div>
        </div>
        <div class="flex flex-col gap-0.5" v-if="depthRange">
          <div class="text-xs text-muted-foreground">Глубина</div>
          <div
            class="inline-flex w-20 items-center justify-center rounded bg-muted py-1 text-xs"
          >
            {{ depthRange.min }} - {{ depthRange.max }}
          </div>
        </div>
      </div>

      <AddProductToCartButton
        class="w-full rounded-xs"
        :product-id="product.id"
      >
        В корзину
      </AddProductToCartButton>

      <Button
        variant="link"
        class="font-normal text-muted-foreground underline"
        as-child
      >
        <NuxtLink
          :to="{ name: 'product-slug', params: { slug: props.product.slug } }"
        >
          Посмотреть товар
        </NuxtLink>
      </Button>
    </div>
  </div>
</template>
