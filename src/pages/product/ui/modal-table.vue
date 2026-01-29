<script setup lang="ts">
type Props = {
  title: string
  items: {
    label: string
    value: string
  }[]
}

const props = withDefaults(defineProps<Props>(), {
  title: "Доставка",
  items: () => []
})
</script>

<template>
  <table class="w-full">
    <thead>
      <tr class="m-0 border-t p-0">
        <th
          colspan="2"
          align="center"
          class="border px-4 py-2 text-center text-sm font-normal"
        >
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in items"
        :key="index"
        class="m-0 border-t p-0 even:bg-muted"
      >
        <td class="border px-4 py-2 text-center text-xs">
          {{ item.label }}
        </td>
        <td class="border px-4 py-2 text-center text-sm whitespace-nowrap">
          {{ item.value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
