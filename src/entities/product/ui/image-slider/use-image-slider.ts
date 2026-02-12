import { createInjectionState } from "@vueuse/core"
import { ref } from "vue"
import type { CarouselApi } from "~/shared/ui/carousel"

const [useProvideSliderContext, useInjectSliderContext] = createInjectionState(
  () => {
    const mainApi = ref<CarouselApi>()
    const thumbApi = ref<CarouselApi>()
    const selectedIndex = ref(0)

    const registerMainApi = (api: CarouselApi) => {
      mainApi.value = api
      // Инициализация при первом подключении
      if (api) {
        api.on("select", onMainSelect)
        api.on("reInit", onMainSelect)
        onMainSelect()
      }
    }

    const scrollToMain = (index: number) => {
      mainApi.value?.scrollTo(index)
      const autoplayPlugin = mainApi.value?.plugins().autoplay
      if (autoplayPlugin) autoplayPlugin.stop()
    }

    const scrollToThumb = (index: number) => {
      thumbApi.value?.scrollTo(index)
    }

    const registerThumbApi = (api: CarouselApi) => {
      thumbApi.value = api
    }

    const onMainSelect = () => {
      if (!mainApi.value || !thumbApi.value) return
      selectedIndex.value = mainApi.value.selectedScrollSnap()
      scrollToThumb(selectedIndex.value)
    }

    return {
      mainApi,
      thumbApi,
      selectedIndex,
      registerMainApi,
      registerThumbApi,
      scrollToMain,
      scrollToThumb,
      onMainSelect
    }
  }
)

function useSliderContext() {
  const context = useInjectSliderContext()
  if (!context) {
    throw new Error("useSliderContext must be used within <ProductSlider>")
  }
  return context
}

export { useProvideSliderContext, useSliderContext }
