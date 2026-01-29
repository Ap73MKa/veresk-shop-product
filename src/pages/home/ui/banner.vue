<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem } from "~/shared/ui/carousel"
</script>

<template>
  <Carousel
    class="relative mx-auto w-full"
    :opts="{
      loop: true
    }"
  >
    <CarouselContent class="ml-0">
      <CarouselItem
        class="relative aspect-4/5 w-full pl-0 md:aspect-4/3 xl:aspect-video"
      >
        <NuxtImg
          src="/mocks/index-banner/wow-bathroom.webp"
          alt=""
          class="size-full object-cover"
        />
        <div
          class="absolute inset-0 z-10 flex size-full items-center justify-center"
        >
          <div class="flex flex-col gap-4 text-center">
            <h3 class="text-3xl font-medium text-background lg:text-7xl">
              Мебель на заказ
            </h3>
            <p class="font-extralight text-background lg:text-2xl">
              Полный цикл от идеи до сборки
            </p>

            <Button
              class="mx-auto w-fit rounded-full bg-background px-6 text-foreground hover:bg-background/75 lg:mt-6"
              as-child
            >
              <NuxtLink :to="{ name: 'index' }">Заказать мебель</NuxtLink>
            </Button>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem
        class="aspect-4/5 w-full pl-0 md:aspect-4/3 xl:aspect-video"
      >
        <NuxtImg
          src="/mocks/index-banner/enamel-mania.webp"
          alt=""
          class="size-full object-cover"
        />
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>
