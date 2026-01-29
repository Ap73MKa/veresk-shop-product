<script setup lang="ts">
import { TruckIcon } from "lucide-vue-next"
import {
  ImageSlider,
  ImageSliderMain,
  ImageSliderMainSlide,
  ImageSliderThumb,
  ImageSliderThumbSlide
} from "~/entities/product/ui/image-slider"
import { byTypename } from "~/shared/lib/types"
import { Badge } from "~/shared/ui/badge"
import { Skeleton } from "~/shared/ui/skeleton"
import { useProductPage } from "../model/useProductPage"

const { data: product, isLoading } = useProductPage()

const images = computed(() =>
  product.value?.systemGallery
    ?.map((i) => i.media)
    .filter(byTypename("Image"))
    .map((i) => ({ src: i.src, alt: i.alt ?? product.value?.name }))
)
</script>

<template>
  <div class="h-fit w-full md:sticky md:top-16">
    <ImageSlider class="relative w-full overflow-hidden">
      <ImageSliderMain class="rounded-lg">
        <ImageSliderMainSlide
          v-if="isLoading || !images"
          v-for="index in 3"
          :index="index"
        >
          <Skeleton class="size-full rounded-none" />
        </ImageSliderMainSlide>
        <ImageSliderMainSlide
          v-else
          v-for="(image, index) in images"
          :index="index"
        >
          <BaseImage
            :src="image.src"
            :alt="image.alt ?? product?.name ?? 'Product Image'"
            class=""
          />
        </ImageSliderMainSlide>
      </ImageSliderMain>
      <ImageSliderThumb>
        <ImageSliderThumbSlide
          v-if="isLoading || !images"
          v-for="index in 3"
          :index="index"
        >
          <Skeleton class="size-full rounded-lg" />
        </ImageSliderThumbSlide>
        <ImageSliderThumbSlide v-for="(image, index) in images" :index="index">
          <BaseImage
            :src="image.src"
            :alt="image.alt ?? product?.name ?? 'Product Image'"
            class="rounded-md"
          />
        </ImageSliderThumbSlide>
      </ImageSliderThumb>
      <div class="absolute top-2.5 right-3 flex gap-1">
        <Badge variant="secondary" class="h-6 rounded-full">-40%</Badge>
        <Badge variant="secondary" class="h-6 rounded-full">
          <TruckIcon class="h-6 w-6 stroke-2" />
          бесплатно
        </Badge>
      </div>
    </ImageSlider>
  </div>
</template>
