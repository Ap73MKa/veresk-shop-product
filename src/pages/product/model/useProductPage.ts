import { useSlug } from "~/shared/lib/use-slug"
import { useProductBySlug } from "../api/use-product-by-slug"

const useProductPage = () => {
  const slug = useSlug()
  return useProductBySlug(computed(() => slug.value ?? ""))
}

export { useProductPage }
