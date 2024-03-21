import { Product } from "@/schema/Product.schema";
import { instance } from "../index.api";

// getProducts: 전체 상품 목록을 제공합니다.
async function getProducts() {
  const response = await instance.get<{
    success: boolean;
    result: Product[];
    error: null;
  }>("/products");
  const data = response.data;

  return data;
}

const productsAPI = {
  getProducts,
};

// getProduct: 특정 상품의 정보를 제공합니다.
// path: /products/:productId
// method: GET

export default productsAPI;
