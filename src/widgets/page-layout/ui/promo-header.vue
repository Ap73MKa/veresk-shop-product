<script setup lang="ts">
import { ChevronDownIcon, MoveRightIcon } from "lucide-vue-next"
import { DropdownMenuTrigger } from "reka-ui"
import Autoplay from "embla-carousel-autoplay"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem
} from "~/shared/ui/dropdown"
import { Carousel, CarouselContent, CarouselItem } from "~/shared/ui/carousel"

const promotions = [
  "ВЫБИРАЙТЕ ПОДАРОК ПРИ ЗАКАЗЕ ОТ 50000 РУБЛЕЙ",
  'НОВЫЙ ШОУРУМ В ТЦ "ПАРУС"',
  "МЕБЕЛЬ ПО ЛИКВИДАЦИИ"
]
</script>

<template>
  <div>
    <div
      data-part="top"
      class="'mx-auto h-8 w-full translate-y-0 bg-foreground text-secondary opacity-100 transition-transform duration-300"
    >
      <div
        class="mx-auto grid size-full max-w-11xl grid-cols-2 gap-6 px-6 md:grid-cols-[1fr_3fr_1fr] lg:px-12 2xl:px-22"
      >
        <div class="flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger class="inline-flex items-center gap-1">
              <span class="text-xs underline underline-offset-4">Москва</span>
              <ChevronDownIcon class="size-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent class="border-none">
              <DropdownMenuItem class="py-1 text-xs">
                Санкт-Петербург
              </DropdownMenuItem>
              <DropdownMenuItem class="py-1 text-xs">Владимир</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div class="hidden md:block">
          <Carousel
            orientation="vertical"
            class="relative mx-auto h-8 w-full"
            :opts="{
              loop: true
            }"
            :plugins="[
              Autoplay({
                delay: 5000
              })
            ]"
          >
            <CarouselContent class="mt-0 h-8">
              <CarouselItem
                v-for="(text, index) in promotions"
                :key="index"
                class="pt-0 md:basis-full"
              >
                <Button
                  variant="link"
                  size="sm"
                  class="w-full text-xs text-inherit"
                  as-child
                >
                  <NuxtLink :to="{ name: 'index' }">
                    {{ text }}
                    <MoveRightIcon class="size-3.5" />
                  </NuxtLink>
                </Button>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div class="flex items-center justify-self-end">
          <Button
            variant="link"
            size="sm"
            class="w-full px-0 text-xs font-normal text-inherit"
            as-child
          >
            <a href="tel:+79999999999">+7 (999) 999-99-99</a>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
