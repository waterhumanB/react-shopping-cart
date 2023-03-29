const BASE_URL = './product-list'

export const productApi = async (): Promise<ProductItem[]> => {
  const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((error) => console.log(error))
  return data
}
