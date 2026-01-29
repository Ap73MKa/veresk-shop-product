<script setup lang="ts">
import { Badge } from "~/shared/ui/badge"
import { StarIcon } from "lucide-vue-next"
import { Skeleton } from "~/shared/ui/skeleton"
import { type HomeCategoryQuery } from "~/shared/api"
import { ToggleProductToFavorite } from "~/features/favorite/toggle-product-to-favorite"
import CardImageContainer from "~/entities/product/ui/card/card-image-container.vue"
import CardImageColors from "~/entities/product/ui/card/card-image-colors.vue"
import CardContainer from "~/entities/product/ui/card/card-container.vue"
import { formatCurrency } from "~/entities/lib/currency"
import { BaseImage } from "~/shared/ui/base-image"
import { ratingToNumber } from "~/entities/product/lib/rating-helpers"

type Category = NonNullable<HomeCategoryQuery["category"]>
type Product = Category["products"][number]

const props = defineProps<{ product: Product }>()
const image = props.product.systemGallery?.flatMap((item) => {
  if (item.media.__typename !== "Image") return []
  return [
    {
      src: item.media.src,
      alt: item.media.alt ?? undefined
    }
  ]
})[0]

const discountLabel = (() => {
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
})()

const reviews = props.product.reviews ?? []
const averageRating =
  reviews.length > 0
    ? Math.round(
        (reviews.reduce((sum, item) => sum + ratingToNumber[item.rating], 0) /
          reviews.length) *
          10
      ) / 10
    : 0
</script>

<template>
  <CardContainer>
    <CardImageContainer asChild>
      <NuxtLink
        :to="{ name: 'product-slug', params: { slug: props.product.slug } }"
      >
        <BaseImage
          v-if="image"
          :src="image.src"
          :alt="image.alt ?? props.product.name"
        />

        <Skeleton v-else class="size-full" />

        <ToggleProductToFavorite
          class="absolute top-2 right-2"
          :product-id="props.product.id"
          variant="ghost"
        />

        <div class="absolute right-2 bottom-2 flex gap-1.5">
          <Badge v-if="discountLabel">{{ discountLabel }}</Badge>
        </div>
      </NuxtLink>
    </CardImageContainer>

    <div class="space-y-1">
      <div class="flex justify-between gap-1">
        <NuxtLink
          :to="{ name: 'product-slug', params: { slug: props.product.slug } }"
          class="font-medium text-secondary-foreground"
        >
          {{ product.name }}
        </NuxtLink>

        <div class="flex items-center gap-1">
          <StarIcon class="size-3.5 shrink-0 fill-foreground" />
          <span class="text-sm">{{ averageRating }}</span>
          <span class="text-xs text-muted-foreground">
            ({{ reviews.length }})
          </span>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <span class="gap-1 text-sm text-muted-foreground">
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

      <!-- <CardImageColors
        :colors="
          props.product.collections.map((collection) => ({
            id: collection.id,
            name: collection.colorName ?? 'Неизвестный',
            hex: collection.colorHex ?? '#ccc'
          }))
        "
      /> -->
    </div>
  </CardContainer>
</template>
