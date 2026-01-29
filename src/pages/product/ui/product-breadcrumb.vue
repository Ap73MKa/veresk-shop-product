<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "~/shared/ui/breadcrumb"
import { useProductPage } from "../model/useProductPage"

const { data, isLoading } = useProductPage()
</script>

<template>
  <Breadcrumb class="my-5">
    <BreadcrumbList
      class="scrollbar-none flex-nowrap overflow-auto px-4 whitespace-nowrap lg:px-10 2xl:px-20"
    >
      <BreadcrumbItem>
        <BreadcrumbLink>
          <NuxtLink :to="{ name: 'index' }">Интернет-магазин мебели</NuxtLink>
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
        <Skeleton v-if="isLoading || !data" class="h-4 w-32" />
        <span v-else>{{ data.name }}</span>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
