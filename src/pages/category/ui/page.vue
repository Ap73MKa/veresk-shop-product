<script setup lang="ts">
import { useCategory } from "../api/use-category"
import { useSlug } from "~/shared/lib/use-slug"
import CategoryItem from "./category-item.vue"

const slug = useSlug()

const { data: category, isLoading } = useCategory(slug.value ?? "")
</script>

<template>
  <main class="mx-auto mb-20 max-w-11xl">
    <div class="my-2 px-1.5">
      <Breadcrumb>
        <BreadcrumbList
          class="scrollbar-none flex-nowrap overflow-auto px-4 whitespace-nowrap lg:px-10 2xl:px-20"
        >
          <BreadcrumbItem>
            <BreadcrumbLink>
              <NuxtLink :to="{ name: 'index' }">
                Интернет-магазин мебели
              </NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <NuxtLink :to="{ name: 'index' }">Каталог мебели</NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <Skeleton v-if="isLoading || !category" class="h-4 w-32" />
            <span v-else>{{ category.name }}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

    <header class="my-4 max-w-11xl space-y-2.5 px-5 lg:px-11 2xl:px-20">
      <Skeleton v-if="isLoading || !category" class="h-12 w-40" />
      <h2 v-else class="text-5xl">{{ category.name }}</h2>

      <Skeleton v-if="isLoading || !category" class="h-4 w-64" />
      <p v-else>{{ category.description }}</p>
    </header>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-5 xl:grid-cols-4 2xl:grid-cols-5 2xl:px-14"
    >
      <div
        v-if="isLoading || !category?.products"
        v-for="_ in 10"
        class="h-64 w-full p-6"
      >
        <Skeleton class="size-full" />
      </div>
      <div v-else v-for="product in category.products.edges">
        <CategoryItem :key="product.node.id" :product="product.node" />
      </div>
    </div>
  </main>
</template>
