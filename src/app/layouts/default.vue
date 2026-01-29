<script setup lang="ts">
import { LayoutHeader, PromoHeader, LayoutFooter } from "~/widgets/page-layout"
</script>

<template>
  <div class="w-screen">
    <PromoHeader />
    <LayoutHeader />
    <slot />
    <LayoutFooter />
  </div>
</template>
