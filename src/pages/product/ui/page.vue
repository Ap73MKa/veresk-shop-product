<script setup lang="ts">
import { onServerPrefetch } from "vue"
import { useProductPage } from "../model/useProductPage"
import ProductBreadcrumb from "./product-breadcrumb.vue"
import ProductDetails from "./product-details.vue"
import ProductSlider from "./product-slider.vue"

const { suspense } = useProductPage()

onServerPrefetch(async () => {
  await suspense()
})
</script>

<template>
  <main class="mx-auto w-full max-w-11xl pb-10">
    <ProductBreadcrumb />
    <div
      class="grid grid-cols-1 gap-8 px-4 md:grid-cols-[3fr_2fr] lg:gap-12 lg:px-10 2xl:grid-cols-[2fr_1fr] 2xl:px-20"
    >
      <ProductSlider />
      <ProductDetails />
    </div>
  </main>
</template>
