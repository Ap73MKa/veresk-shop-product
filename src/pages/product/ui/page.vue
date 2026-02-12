<script setup lang="ts">
import { onServerPrefetch } from "vue"
import { useProductPage } from "../model/use-product-page"
import ProductBreadcrumb from "./product-breadcrumb.vue"
import ProductDetails from "./product-details.vue"
import ProductSlider from "./product-slider.vue"

const { suspense } = useProductPage()

onServerPrefetch(async () => {
  await suspense()
})
</script>

<template>
  <main class="mx-auto -mt-13 w-full max-w-11xl pb-10 md:mt-0">
    <ProductBreadcrumb />
    <div
      class="grid grid-cols-1 gap-4 md:grid-cols-[3fr_2fr] md:gap-8 md:px-4 lg:gap-12 lg:px-10 2xl:grid-cols-[5fr_3fr] 2xl:px-20"
    >
      <div class="h-fit w-full md:sticky md:top-16">
        <ProductSlider />
      </div>

      <ProductDetails />
    </div>
  </main>
</template>
