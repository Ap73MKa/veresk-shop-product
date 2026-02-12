import { useSlug } from "~/shared/lib/use-slug"
import { useProductBySlug } from "../api/use-product-by-slug"
import type { ProductQuery } from "~/shared/api"

const useProductPage = () => {
  const slug = useSlug()
  return useProductBySlug(computed(() => slug.value ?? ""))
}

type ProductPageProp = NonNullable<ProductQuery["productBySlug"]>

export { useProductPage, type ProductPageProp }
