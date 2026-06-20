import { useRuntimeConfig, useFetch } from '#imports'

export const usePost = async (slug: string) => {
  const config = useRuntimeConfig()
  const apiUrl = `${config.public.wpApiBaseUrl}posts?slug=${slug}`

  const { data, error } = await useFetch(apiUrl)

  if (error.value) throw error.value

  if (data.value && data.value.length > 0) {
    return data.value[0]
  } else {
    throw new Error(`Post with slug "${slug}" not found.`)
  }
}
