/* eslint-disable @next/next/no-img-element */
import { Product } from "@/schema/Product.schema";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="grid grid-cols-1 gap-y-2">
      {/* 이미지 */}
      <img alt={product.name} src={product.imgSrc} />

      {/* 브랜드명 */}
      <strong className="text-sm">{product.brand.nameEn}</strong>

      {/* 상품명 */}
      <h6>{product.name}</h6>

      {/* 가격들 */}
      <div className="flex items-center gap-x-2 font-bold text-sm">
        <span className="text-red-500 line-through">
          ₩{product.originalPrice.toLocaleString()}
        </span>
        <span>₩{product.price.toLocaleString()}</span>
      </div>
    </Link>
  );
}

export default ProductCard;
