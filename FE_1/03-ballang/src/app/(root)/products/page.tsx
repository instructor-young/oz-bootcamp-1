import Page from "@/components/Page";
import Products from "./_components/Products";
import RefreshButton from "./_components/RefreshButton";

function ProductsListPage() {
  return (
    <Page title="전체 상품">
      <RefreshButton />
      <div className="grid grid-cols-2 gap-x-8">
        <Products orderBy="abc" />
        <Products orderBy="popular" />
      </div>
    </Page>
  );
}

export default ProductsListPage;
