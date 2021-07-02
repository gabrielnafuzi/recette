export default async (url: string) => {
  const response = await fetch(url)
  const data = await response.blob()

  const { type } = data

  const fileName = url.split('/').pop() ?? ''

  return new File([data], fileName, { type })
}
