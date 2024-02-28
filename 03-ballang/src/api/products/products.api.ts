import { client } from "../client.api";

export async function getProducts({
  orderBy,
}: {
  orderBy?: "abc" | "popular";
}) {
  const response = await client.get("/products", { params: { orderBy } });
  const data = response.data.result;

  return data;
}

export async function getProduct(productId: number) {
  const response = await client.get(`/products/${productId}`);
  const data = response.data.result;

  return data;
}

const productsAPI = {
  getProducts,
  getProduct,
};

export default productsAPI;
