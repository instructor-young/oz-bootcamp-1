import API from "@/api/index.api";
import Page from "@/components/Page";
import ProductCard from "@/components/ProductCard";

async function HomePage() {
  const { result: products } = await API.products.getProducts();

  return (
    <Page title="Trending">
      <div className="grid grid-cols-3 gap-x-5 md:grid-cols-4 lg:grid-cols-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Page>
  );
}

export default HomePage;
