import { useRoute } from "vue-router"

const useSlug = (paramName: string = "slug") => {
  const route = useRoute()

  const slug = computed(() => {
    const value = route.params[paramName]

    if (!value) return ""

    return Array.isArray(value) ? value[0] : value
  })

  return slug
}

export { useSlug }
