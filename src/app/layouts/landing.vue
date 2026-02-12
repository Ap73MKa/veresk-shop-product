<script setup lang="ts">
import { LayoutHeader, PromoHeader, LayoutFooter } from "~/widgets/page-layout"
</script>

<template>
  <div class="w-screen">
    <PromoHeader />
    <LayoutHeader
      class="**:data-[part=main]:bg-transparent **:data-[part=main]:from-black/30 **:data-[part=main]:to-transparent [&_[data-part=main][data-scrolled=false]]:bg-linear-to-b [&_[data-part=main][data-scrolled=false]]:text-background [&_[data-part=main][data-scrolled=true]]:bg-background"
    />
    <slot />
    <LayoutFooter />
  </div>
</template>
