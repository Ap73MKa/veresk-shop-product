<script lang="ts" setup>
import { helpers } from "@typed-router"

const categories = [
  {
    title: "Каталог",
    items: [
      { title: "Шкафы-купе", link: helpers.route({ name: "index" }) },
      { title: "Распашные шкафы", link: helpers.route({ name: "index" }) },
      { title: "Гардеробные", link: helpers.route({ name: "index" }) },
      { title: "Мебель для прихожей", link: helpers.route({ name: "index" }) },
      { title: "Мебель для гостиной", link: helpers.route({ name: "index" }) },
      { title: "Мебель для спальни", link: helpers.route({ name: "index" }) },
      { title: "Мебель для кухни", link: helpers.route({ name: "index" }) },
      { title: "Мебель лофт", link: helpers.route({ name: "index" }) }
    ]
  },
  {
    title: "Акции",
    items: [
      { title: "Хиты продаж", link: helpers.route({ name: "index" }) },
      { title: "Коллекции", link: helpers.route({ name: "index" }) },
      { title: "Каталог фасадов МДФ", link: helpers.route({ name: "index" }) },
      { title: "Ликвидация со склада", link: helpers.route({ name: "index" }) },
      { title: "Шоурум Veresk", link: helpers.route({ name: "index" }) }
    ]
  },
  {
    title: "Мебель на заказ",
    items: [
      { title: "Мебель на заказ", link: helpers.route({ name: "index" }) },
      { title: "Шкафы на заказ", link: helpers.route({ name: "index" }) },
      { title: "Кухни на заказ", link: helpers.route({ name: "index" }) },
      { title: "Гардеробные на заказ", link: helpers.route({ name: "index" }) },
      { title: "Стенки на заказ", link: helpers.route({ name: "index" }) },
      { title: "Столы на заказ", link: helpers.route({ name: "index" }) },
      {
        title: "Встраиваемая мебель на заказ",
        link: helpers.route({ name: "index" })
      },
      {
        title: "Мебель для детской на заказ",
        link: helpers.route({ name: "index" })
      }
    ]
  },
  {
    title: "О нас",
    items: [
      { title: "О фабрике", link: helpers.route({ name: "index" }) },
      { title: "Отзывы", link: helpers.route({ name: "index" }) },
      { title: "Доставка", link: helpers.route({ name: "index" }) },
      { title: "Оплата", link: helpers.route({ name: "index" }) },
      { title: "Гарантии", link: helpers.route({ name: "index" }) },
      { title: "Сотрудничество", link: helpers.route({ name: "index" }) },
      {
        title: "Политика конфиденциальности",
        link: helpers.route({ name: "index" })
      },
      {
        title: "Публичная оферта",
        link: helpers.route({ name: "index" })
      }
    ]
  }
]
</script>

<template>
  <footer class="w-full bg-secondary">
    <div class="mx-auto w-full max-w-11xl px-4 py-10 lg:px-10 2xl:px-20">
      <ul class="flex w-full flex-wrap justify-between gap-y-4">
        <li
          v-for="category in categories"
          :key="category.title"
          class="flex-1/2 md:flex-1/4"
        >
          <nav class="space-y-3">
            <h3 class="text-lg">{{ category.title }}</h3>
            <ul class="space-y-3">
              <li v-for="item in category.items" :key="item.title">
                <NuxtLink
                  :to="item.link"
                  class="text-sm underline-offset-4 transition-colors hover:text-muted-foreground hover:underline"
                >
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </li>
      </ul>
    </div>
  </footer>
</template>
