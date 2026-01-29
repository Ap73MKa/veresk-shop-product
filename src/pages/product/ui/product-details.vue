<script setup lang="ts">
import {
  HeartIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  PlusIcon,
  Share2Icon,
  ShoppingBag,
  StarIcon,
  ChevronDownIcon
} from "lucide-vue-next"
import { ToggleGroupItem, ToggleGroupRoot } from "reka-ui"
import { getAverageRating } from "~/entities/product/lib/rating"
import { useProductPage } from "./../model/useProductPage"
import DeliveryModal from "./delivery-modal.vue"
import PaymentModal from "./payment-modal.vue"
import {
  ProductDimensionItem,
  ProductDimensionList,
  ProductDimensionRoot,
  ProductDimensionTitle
} from "./product-dimension"
import {
  ProductSpecsAccordion,
  ProductSpecsAccordionContent,
  ProductSpecsAccordionItem,
  ProductSpecsAccordionTrigger
} from "./product-specs-accordion"
import { ScrollArea, ScrollBar } from "~/shared/ui/scroll-area"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "~/shared/ui/dialog"

const { data: product, isLoading } = useProductPage()

const width = ref(undefined)
const height = ref(undefined)
const depth = ref(undefined)
const facadeColorId = ref("")
const bodyColorId = ref("")

// const specs = computed(() =>
//   product.value ? resolveProductSpecs(product.value) : []
// )

// const form = useForm({
//   defaultValues: {},
//   validators: {
//     onSubmit: computed(() => buildProductSchema(specs.value, product.value))
//       .value
//   }
// })

// watch(
//   () => product.value,
//   (p) => {
//     if (!p) return
//     form.reset(buildDefaultValues(specs.value, p))
//     console.log(form.state)
//   },
//   { immediate: true }
// )

const averageRating = computed(() =>
  getAverageRating(product.value?.reviews ?? [])
)
</script>

<template>
  <form id="product-details-form" class="w-full space-y-5 overflow-hidden">
    <header class="space-y-1">
      <div class="text-base">
        <Skeleton v-if="isLoading || !product" class="h-4 w-32" />
        <span v-else>Шкаф-купе</span>
      </div>

      <div class="flex w-full gap-1">
        <h2 class="text-2xl font-semibold uppercase lg:text-3xl">
          <Skeleton v-if="isLoading || !product" class="h-9 w-64" />
          <span v-else>{{ product.name }}</span>
        </h2>

        <div class="ml-auto flex shrink-0 items-baseline gap-4">
          <button type="button">
            <Share2Icon
              class="mt-1.5 size-6 fill-transparent transition-colors hover:fill-primary lg:mt-1 lg:size-7"
            />
          </button>
          <button type="button">
            <HeartIcon
              class="mt-1.5 size-6 fill-transparent transition-colors hover:fill-primary lg:mt-1 lg:size-7"
            />
          </button>
        </div>
      </div>

      <div class="mt-3 flex items-center space-x-2 divide-x divide-foreground">
        <div class="inline-flex h-4 pr-2">
          <Skeleton v-if="isLoading || !product" class="h-4 w-8" />
          <span v-else class="text-sm leading-4">
            {{ averageRating.toFixed(1) }}/5
          </span>
        </div>

        <div class="flex pr-2">
          <div v-for="n in 5" :key="n" class="relative size-4">
            <StarIcon
              class="absolute inset-0 size-4 fill-secondary stroke-none"
            />

            <StarIcon
              v-if="n <= Math.floor(averageRating)"
              class="absolute inset-0 size-4 fill-primary stroke-none"
            />

            <div
              v-else-if="n === Math.ceil(averageRating)"
              class="absolute inset-0 overflow-hidden"
              :style="{ width: `${(averageRating % 1) * 100}%` }"
            >
              <StarIcon class="size-4 fill-primary stroke-none" />
            </div>
          </div>
        </div>

        <div class="inline-flex h-4">
          <Skeleton v-if="isLoading || !product" class="h-4 w-6" />
          <a
            href="#"
            v-else
            class="text-sm leading-4 underline underline-offset-4"
          >
            ({{ product.reviews?.length }})
          </a>
        </div>
      </div>
    </header>

    <div class="my-6 space-y-0.5">
      <div class="flex items-baseline gap-2">
        <span class="text-4xl font-semibold">
          <Skeleton v-if="isLoading || !product" class="h-8 w-32" />
          <span v-else>{{ product.price.list.amount }} ₽</span>
        </span>
        <span
          v-if="product?.price.net.amount"
          class="text-xl font-light text-muted-foreground line-through"
        >
          {{ product?.price.net.amount }} ₽
        </span>
      </div>
      <span class="text-sm">Цена в базовой комплектации</span>
    </div>

    <ProductSpecsAccordion defaultValue="dimensions">
      <template v-if="isLoading || !product">
        <ProductSpecsAccordionItem v-for="item in 3" :value="`item-${item}`">
          <ProductSpecsAccordionTrigger disabled>
            <Skeleton class="h-6 w-32"></Skeleton>
          </ProductSpecsAccordionTrigger>
        </ProductSpecsAccordionItem>
      </template>

      <template v-else>
        <ProductSpecsAccordionItem
          value="dimensions"
          v-if="product.width || product.height || product.depth"
        >
          <ProductSpecsAccordionTrigger>Размеры</ProductSpecsAccordionTrigger>
          <ProductSpecsAccordionContent class="space-y-3">
            <ProductDimensionRoot v-if="product.width" v-model="width">
              <ProductDimensionTitle>Ширина</ProductDimensionTitle>
              <ProductDimensionList>
                <ProductDimensionItem
                  v-for="(item, index) in product.width"
                  :key="index"
                  :value="item.value"
                >
                  {{ item.value }}
                </ProductDimensionItem>
              </ProductDimensionList>
            </ProductDimensionRoot>
            <ProductDimensionRoot v-if="product.height" v-model="height">
              <ProductDimensionTitle>Высота</ProductDimensionTitle>
              <ProductDimensionList>
                <ProductDimensionItem
                  v-for="(item, index) in product.height"
                  :key="index"
                  :value="item.value"
                >
                  {{ item.value }}
                </ProductDimensionItem>
              </ProductDimensionList>
            </ProductDimensionRoot>
            <ProductDimensionRoot v-if="product.depth" v-model="depth">
              <ProductDimensionTitle>Глубина</ProductDimensionTitle>
              <ProductDimensionList>
                <ProductDimensionItem
                  v-for="(item, index) in product.depth"
                  :key="index"
                  :value="item.value"
                >
                  {{ item.value }}
                </ProductDimensionItem>
              </ProductDimensionList>
            </ProductDimensionRoot>
          </ProductSpecsAccordionContent>
        </ProductSpecsAccordionItem>

        <ProductSpecsAccordionItem value="facadeColor" class="px-0">
          <ProductSpecsAccordionTrigger class="px-4">
            Цвет
          </ProductSpecsAccordionTrigger>
          <ProductSpecsAccordionContent class="pb-0">
            <ProductDimensionTitle class="mt-2 px-4">
              Цвет фасада
            </ProductDimensionTitle>
            <ToggleGroupRoot
              class="my-2 flex flex-wrap px-2"
              v-model="facadeColorId"
              type="single"
            >
              <ToggleGroupItem
                v-for="item in product.recommendedColors.map(
                  (item) => item.facadeColor
                )"
                :value="item.id"
                :key="item.id"
                class="w-1/3 space-y-1.5 self-baseline rounded-sm border border-transparent p-2 text-left transition-colors hover:border-border data-[state=on]:border-primary/50 data-[state=on]:bg-secondary/25 sm:w-1/4 md:w-1/3 xl:w-1/4"
              >
                <div class="aspect-4/3 overflow-hidden rounded-[0.185rem]">
                  <BaseImage
                    :src="
                      item.media.__typename === 'Image' ? item.media.src : ''
                    "
                    :alt="item.name"
                    class="size-full object-cover"
                  />
                </div>
                <span class="text-sm">
                  {{ item.name }}
                </span>
              </ToggleGroupItem>
            </ToggleGroupRoot>

            <ProductDimensionTitle class="px-4">
              Цвет корпуса
            </ProductDimensionTitle>

            <ToggleGroupRoot
              v-model="bodyColorId"
              type="single"
              class="mt-1 mb-2"
            >
              <ScrollArea
                class="w-full whitespace-nowrap [&>div]:px-1.5 [&>div]:pb-3"
              >
                <ToggleGroupItem
                  v-for="item in product.recommendedColors.map(
                    (item) => item.facadeColor
                  )"
                  :value="item.id"
                  :key="item.id"
                  class="w-28 space-y-1.5 rounded-sm border border-transparent p-2 text-left align-top transition-colors hover:border-border data-[state=on]:border-primary/50 data-[state=on]:bg-secondary/25 sm:w-36 md:w-24 lg:w-32"
                >
                  <div class="aspect-4/3 overflow-hidden rounded-[0.185rem]">
                    <BaseImage
                      :src="
                        item.media.__typename === 'Image' ? item.media.src : ''
                      "
                      :alt="item.name"
                      class="size-full object-cover"
                    />
                  </div>
                  <span class="text-sm whitespace-normal">
                    {{ item.name }}
                  </span>
                </ToggleGroupItem>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </ToggleGroupRoot>
          </ProductSpecsAccordionContent>
        </ProductSpecsAccordionItem>
      </template>

      <Dialog v-if="!isLoading && product">
        <DialogTrigger as-child>
          <button
            type="button"
            class="inline-flex w-full items-center justify-between rounded-md bg-secondary p-4 font-medium"
          >
            Комплектация
            <ChevronsUpDownIcon class="size-4" />
          </button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Выбор комплектации</DialogTitle>
          </DialogHeader>
          <p>Выбор комплектации</p>
          <DialogFooter>
            <DialogClose as-child>
              <Button>Применить</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog v-if="!isLoading && product">
        <DialogTrigger as-child>
          <button
            v-if="!isLoading && product"
            type="button"
            class="inline-flex w-full items-center justify-between rounded-md bg-secondary p-4 font-medium"
          >
            Опции
            <ChevronsUpDownIcon class="size-4" />
          </button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Выбор опций</DialogTitle>
          </DialogHeader>
          <p>Выбор опций</p>
          <DialogFooter>
            <DialogClose as-child>
              <Button>Применить</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ProductSpecsAccordion>

    <div
      class="grid w-full grid-cols-[1.5fr_1fr] gap-3 overflow-hidden md:flex md:flex-col lg:grid lg:grid-cols-[1.5fr_1fr]"
    >
      <Button
        size="lg"
        class="h-12 w-full bg-primary/95 uppercase hover:bg-primary/80"
      >
        <ShoppingBag class="h-5 stroke-2 md:hidden" />
        <span class="md:hidden">В корзину</span>
        <span class="hidden md:inline">Добавить в корзину</span>
      </Button>
      <Button size="lg" variant="outline" class="h-12 w-full uppercase">
        Купить в 1 клик
      </Button>
    </div>

    <DeliveryModal>
      <button
        type="button"
        class="leader-dots inline-flex w-full items-center justify-between gap-3 font-medium"
      >
        <span class="shrink-0">Доставка и сборка</span>
        <div
          class="mt-2.5 w-full border-b-2 border-dotted border-foreground/25"
        ></div>
        <ChevronRightIcon class="size-5 shrink-0" />
      </button>
    </DeliveryModal>

    <PaymentModal>
      <button
        type="button"
        class="leader-dots inline-flex w-full items-center justify-between gap-3 font-medium"
      >
        <span class="shrink-0">Рассрочка без переплаты</span>
        <div
          class="mt-2.5 w-full border-b-2 border-dotted border-foreground/25"
        ></div>
        <ChevronRightIcon class="size-5 shrink-0" />
      </button>
    </PaymentModal>
  </form>
</template>
