function ProductDetailPage(props: { params: { productId: string } }) {
  const productId = Number(props.params.productId);

  return <div>ProductDetailPage {productId}</div>;
}

export default ProductDetailPage;
