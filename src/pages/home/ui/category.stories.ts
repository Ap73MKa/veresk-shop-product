// CategoryItem.stories.ts
import type { Meta, StoryObj } from "@storybook/vue3"
import Category from "./category.vue"

const meta: Meta<typeof Category> = {
  title: "Entities/Category",
  component: Category
}
export default meta

export const Default: StoryObj<typeof Category> = {
  args: {
    slug: "hits"
  }
}
