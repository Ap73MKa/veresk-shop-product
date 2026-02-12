<script setup lang="ts">
import {
  HeartIcon,
  ChevronRightIcon,
  Share2Icon,
  ShoppingBagIcon,
  StarIcon,
  ChevronDownIcon
} from "lucide-vue-next"
import { getAverageRating } from "~/entities/product/lib/rating"
import { useProductPage } from "../model/use-product-page"
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
import {
  ProductSelectMedia,
  ProductSelectName,
  ProductSelectSingleItem,
  ProductSelectSingleList,
  ProductSelectQuantitativeItem,
  ProductSelectQuantitativeList,
  ProductSelectQuantity
} from "./product-select"
import { Tabs, TabsList, TabsContent, TabsTrigger } from "~/shared/ui/tabs"
import { Slider } from "~/shared/ui/slider"
import { cn } from "~/shared/lib/utils"
import { useProductForm } from "../model/use-product-form"
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "reka-ui"

const { data: product, isLoading } = useProductPage()

const form = useProductForm()

const dimensionAttributes = computed(
  () =>
    product.value?.attributes.filter(
      (attr) => attr.__typename === "DimensionAttribute"
    ) ?? []
)

const sortedWidth = computed(() =>
  dimensionAttributes.value
    .find((item) => item.code === "width")
    ?.options.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10))
)

const sortedHeight = computed(() =>
  dimensionAttributes.value
    .find((item) => item.code === "height")
    ?.options.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10))
)

const sortedDepth = computed(() =>
  dimensionAttributes.value
    .find((item) => item.code === "depth")
    ?.options.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10))
)

const colorAttributes = computed(
  () =>
    product.value?.attributes.filter(
      (attr) => attr.__typename === "ColorAttribute"
    ) ?? []
)

const schemaAttribute = computed(() => {
  const candidate = product.value?.attributes.find(
    (attr) => attr.code === "schema"
  )
  return candidate?.__typename === "SelectAttribute" ? candidate : undefined
})

const equipmentAttribute = computed(() =>
  product.value?.attributes.filter(
    (attr) => attr.__typename === "EquipmentAttribute"
  )
)

const variantAttribute = computed(() =>
  product.value?.attributes.find(
    (attr) => attr.__typename === "VariantAttribute"
  )
)

const averageRating = computed(() =>
  getAverageRating(product.value?.reviews ?? [])
)
</script>

<template>
  <form
    @submit="
      (e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }
    "
    class="space-y-5 overflow-hidden px-4 md:px-0"
  >
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
          v-if="dimensionAttributes"
          class="px-0"
        >
          <ProductSpecsAccordionTrigger class="px-4">
            Размеры
          </ProductSpecsAccordionTrigger>
          <ProductSpecsAccordionContent>
            <div class="space-y-3">
              <form.Field v-if="sortedWidth" name="dimensions.width">
                <template v-slot="{ field }">
                  <ProductDimensionRoot
                    class="px-4"
                    :model-value="field.state.value"
                    @update:model-value="
                      (value) => {
                        if (typeof value !== 'string') return
                        console.log('new value:', value)
                        field.handleChange(value)
                      }
                    "
                  >
                    <ProductDimensionTitle>Ширина</ProductDimensionTitle>
                    <ProductDimensionList
                      class="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9"
                    >
                      <ProductDimensionItem
                        v-for="(item, index) in sortedWidth"
                        :key="index"
                        :value="item.id"
                        class="w-full rounded-md"
                      >
                        {{ item.value }}
                      </ProductDimensionItem>
                    </ProductDimensionList>
                  </ProductDimensionRoot>
                </template>
              </form.Field>

              <form.Field v-if="sortedHeight" name="dimensions.height">
                <template v-slot="{ field }">
                  <ProductDimensionRoot
                    class="px-4"
                    :model-value="field.state.value"
                    @update:model-value="
                      (value) => {
                        if (typeof value !== 'string') return
                        console.log('new value:', value)
                        field.handleChange(value)
                      }
                    "
                  >
                    <ProductDimensionTitle>Высота</ProductDimensionTitle>
                    <ProductDimensionList>
                      <ProductDimensionItem
                        v-for="(item, index) in sortedHeight"
                        :key="index"
                        :value="item.id"
                      >
                        {{ item.value }}
                      </ProductDimensionItem>
                    </ProductDimensionList>
                  </ProductDimensionRoot>
                </template>
              </form.Field>

              <form.Field
                v-if="sortedDepth"
                name="dimensions.depth"
                class="space-y-1.5"
              >
                <template v-slot="{ field }">
                  <ProductDimensionTitle class="px-4">
                    Глубина
                  </ProductDimensionTitle>

                  <div class="relative w-full px-3 pt-2">
                    <div class="w-full px-1">
                      <Slider
                        :default-value="[0]"
                        @update:model-value="
                          (value) => {
                            const valueIndex = value?.at(0)
                            if (typeof valueIndex !== 'number') return
                            const newValue = sortedDepth[valueIndex]
                            if (newValue) field.handleChange(newValue.id)
                          }
                        "
                        :max="sortedDepth.length - 1"
                        :step="1"
                      />
                    </div>

                    <div class="w-full px-3 pt-2 pb-10">
                      <ul class="relative w-full">
                        <li
                          :class="
                            cn(
                              'absolute -translate-x-1/2 transition-all',
                              sortedDepth[index]?.id === field.state.value
                                ? 'text-sm font-bold'
                                : 'text-xs text-muted-foreground'
                            )
                          "
                          :style="{
                            left: `${(index / (sortedDepth.length - 1)) * 100}%`
                          }"
                          v-for="(item, index) in sortedDepth"
                          :key="index"
                        >
                          {{ item.value }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>
              </form.Field>
            </div>
          </ProductSpecsAccordionContent>
        </ProductSpecsAccordionItem>

        <ProductSpecsAccordionItem
          value="colors"
          class="px-0"
          v-if="colorAttributes.length"
        >
          <ProductSpecsAccordionTrigger class="px-4">
            Цвета
          </ProductSpecsAccordionTrigger>
          <ProductSpecsAccordionContent class="pb-0">
            <template
              v-for="attribute in colorAttributes"
              :key="attribute.code"
            >
              <form.Field :name="`colors.${attribute.code}`">
                <template v-slot="{ field }">
                  <ProductDimensionTitle class="mt-2 px-4">
                    {{ attribute.name }}
                  </ProductDimensionTitle>

                  <ProductSelectSingleList
                    :model-value="field.state.value"
                    @update:model-value="
                      (value) => {
                        if (typeof value !== 'string') return
                        console.log('new value:', value)
                        field.handleChange(value)
                      }
                    "
                  >
                    <ProductSelectSingleItem
                      v-for="option in attribute.options"
                      :value="option.id"
                      :key="option.id"
                    >
                      <ProductSelectMedia>
                        <BaseImage
                          :src="
                            option.media.__typename === 'Image'
                              ? option.media.src
                              : ''
                          "
                          :alt="option.display"
                        />
                      </ProductSelectMedia>

                      <ProductSelectName>
                        {{ option.display }}
                      </ProductSelectName>
                    </ProductSelectSingleItem>
                  </ProductSelectSingleList>
                </template>
              </form.Field>
            </template>
          </ProductSpecsAccordionContent>
        </ProductSpecsAccordionItem>

        <ProductSpecsAccordionItem
          value="schema"
          v-if="schemaAttribute && variantAttribute"
          class="px-0"
        >
          <ProductSpecsAccordionTrigger class="px-4">
            Комплектация
          </ProductSpecsAccordionTrigger>

          <ProductSpecsAccordionContent class="space-y-3">
            <ProductDimensionTitle class="px-4">
              {{ schemaAttribute.name }}
            </ProductDimensionTitle>

            <form.Field name="schema">
              <template v-slot="{ field }">
                <ProductSelectSingleList
                  :model-value="field.state.value"
                  @update:model-value="
                    (value) => {
                      if (typeof value !== 'string') return
                      console.log('new value:', value)
                      field.handleChange(value)
                    }
                  "
                >
                  <ProductSelectSingleItem
                    v-for="item in schemaAttribute.options"
                    :value="item.id"
                    :key="item.id"
                  >
                    <ProductSelectMedia>
                      <BaseImage
                        :src="
                          item.media?.__typename === 'Image'
                            ? item.media.src
                            : ''
                        "
                        :alt="item.display"
                      />
                    </ProductSelectMedia>

                    <ProductSelectName>
                      {{ item.display }}
                    </ProductSelectName>
                  </ProductSelectSingleItem>
                </ProductSelectSingleList>
              </template>
            </form.Field>

            <ProductDimensionTitle class="px-4">
              {{ variantAttribute.name }}
            </ProductDimensionTitle>

            <Tabs defaultValue="compartment-1">
              <div class="px-4">
                <TabsList class="w-full">
                  <TabsTrigger
                    v-for="compartment in variantAttribute.compartments.sort(
                      (a, b) => a.order - b.order
                    )"
                    :value="`compartment-${compartment.order}`"
                    class="overflow-hidden"
                  >
                    <span class="truncate">Отделение</span>
                    {{ compartment.order + 1 }}
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent
                v-for="compartment in variantAttribute.compartments.sort(
                  (a, b) => a.order - b.order
                )"
                :value="`compartment-${compartment.order}`"
              >
                <ProductSelectQuantitativeList>
                  <ProductSelectQuantitativeItem
                    v-for="option in compartment.options"
                    :value="option.id"
                    :key="option.id"
                  >
                    <ProductSelectMedia>
                      <BaseImage
                        :src="
                          option.media.__typename === 'Image'
                            ? option.media.src
                            : ''
                        "
                        :alt="option.display"
                        class="size-full object-cover"
                      />
                    </ProductSelectMedia>

                    <ProductSelectName>
                      {{ option.display }}
                    </ProductSelectName>

                    <ProductSelectQuantity
                      :default-value="option.quantity"
                      :min="option.minQuantity"
                      :max="option.maxQuantity"
                      class="mt-auto pt-1"
                    />
                  </ProductSelectQuantitativeItem>
                </ProductSelectQuantitativeList>
              </TabsContent>
            </Tabs>
          </ProductSpecsAccordionContent>
        </ProductSpecsAccordionItem>

        <ProductSpecsAccordionItem
          value="equipment"
          class="px-0"
          v-if="equipmentAttribute"
        >
          <ProductSpecsAccordionTrigger class="px-4">
            Опции
          </ProductSpecsAccordionTrigger>
          <ProductSpecsAccordionContent>
            <AccordionRoot
              type="multiple"
              :default-value="
                equipmentAttribute?.length ? [equipmentAttribute[0].code] : []
              "
              class="space-y-2"
            >
              <template
                v-for="attribute in equipmentAttribute"
                :key="attribute.code"
              >
                <AccordionItem :value="attribute.code">
                  <AccordionTrigger
                    class="inline-flex w-full items-center justify-between px-4"
                  >
                    <ProductDimensionTitle class="">
                      {{ attribute.name }}
                    </ProductDimensionTitle>
                    <ChevronDownIcon class="size-4" />
                  </AccordionTrigger>
                  <AccordionContent
                    class="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  >
                    <ProductSelectQuantitativeList>
                      <ProductSelectQuantitativeItem
                        v-for="option in attribute.options"
                        :value="option.id"
                        :key="option.id"
                      >
                        <ProductSelectMedia>
                          <BaseImage
                            :src="
                              option.media.__typename === 'Image'
                                ? option.media.src
                                : ''
                            "
                            :alt="option.display"
                          />
                        </ProductSelectMedia>

                        <ProductSelectName>
                          {{ option.display }}
                        </ProductSelectName>

                        <ProductSelectQuantity
                          :default-value="option.quantity"
                          :min="option.minQuantity"
                          :max="option.maxQuantity"
                          class="mt-auto pt-1"
                        />
                      </ProductSelectQuantitativeItem>
                    </ProductSelectQuantitativeList>
                  </AccordionContent>
                </AccordionItem>
              </template>
            </AccordionRoot>
          </ProductSpecsAccordionContent>
        </ProductSpecsAccordionItem>
      </template>
    </ProductSpecsAccordion>

    <div
      class="hidden w-full grid-cols-[1.5fr_1fr] flex-col gap-3 overflow-hidden md:flex lg:grid lg:grid-cols-[1.5fr_1fr]"
    >
      <form.Subscribe>
        <template v-slot="{ canSubmit, isSubmitting }">
          <Button
            size="lg"
            type="submit"
            :disabled="!canSubmit || !product"
            class="h-12 w-full bg-primary/95 uppercase hover:bg-primary/80"
          >
            <ShoppingBagIcon class="h-5 stroke-2 md:hidden" />
            <span class="md:hidden">В корзину</span>
            <span class="hidden md:inline">Добавить в корзину</span>
          </Button>
        </template>
      </form.Subscribe>

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

  <footer
    class="fixed bottom-0 grid h-14 w-full grid-cols-2 border-t bg-background px-4 md:hidden"
  >
    <div class="flex items-center">
      <div class="flex items-baseline gap-2">
        <span class="text-xl font-semibold">
          <Skeleton v-if="isLoading || !product" class="h-4 w-16" />
          <span v-else>{{ product.price.list.amount }} ₽</span>
        </span>
        <span
          v-if="product?.price.net.amount"
          class="text-xs font-light text-muted-foreground line-through"
        >
          {{ product?.price.net.amount }} ₽
        </span>
      </div>
    </div>

    <div class="flex items-center justify-end gap-2">
      <Button size="sm">В корзину</Button>
      <Button variant="outline" size="sm">Купить</Button>
    </div>
  </footer>
</template>
